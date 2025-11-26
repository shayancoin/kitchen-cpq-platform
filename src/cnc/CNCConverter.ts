import { CADFile, CNCProgram, ToolPath, Operation, Component } from '../types';

/**
 * CNC Converter
 * Converts CAD files to CNC programs for manufacturing
 */
export class CNCConverter {
  private feedRate: number;
  private spindleSpeed: number;

  constructor(feedRate = 1000, spindleSpeed = 10000) {
    this.feedRate = feedRate;
    this.spindleSpeed = spindleSpeed;
  }

  /**
   * Convert CAD file to G-code CNC program
   */
  convertToGCode(cadFile: CADFile, components: Component[]): CNCProgram {
    const toolPaths = this.generateToolPaths(components);
    const gcode = this.buildGCode(toolPaths);
    
    return {
      format: 'GCODE',
      content: gcode,
      fileName: cadFile.fileName.replace(/\.[^/.]+$/, '.gcode'),
      toolPaths
    };
  }

  /**
   * Generate tool paths from components
   */
  private generateToolPaths(components: Component[]): ToolPath[] {
    const toolPaths: ToolPath[] = [];
    
    components.forEach(component => {
      const operations = this.createOperationsForComponent(component);
      
      toolPaths.push({
        tool: this.selectTool(component),
        operations
      });
    });
    
    return toolPaths;
  }

  /**
   * Create operations for a component
   */
  private createOperationsForComponent(component: Component): Operation[] {
    const operations: Operation[] = [];
    const { position, dimensions } = component;
    
    // Generate cutting path for the perimeter
    const perimeterPath: number[][] = [
      [position.x, position.y, position.z],
      [position.x + dimensions.width, position.y, position.z],
      [position.x + dimensions.width, position.y + dimensions.height, position.z],
      [position.x, position.y + dimensions.height, position.z],
      [position.x, position.y, position.z] // Close the loop
    ];
    
    operations.push({
      type: 'cut',
      coordinates: perimeterPath,
      depth: dimensions.depth,
      feedRate: this.feedRate
    });
    
    // Add drilling operations for hardware mounting points if applicable
    if (component.type === 'cabinet') {
      operations.push(...this.generateDrillingOperations(component));
    }
    
    return operations;
  }

  /**
   * Generate drilling operations for hardware mounting
   */
  private generateDrillingOperations(component: Component): Operation[] {
    const operations: Operation[] = [];
    const { position, dimensions } = component;
    
    // Drill holes for hinges (example positions)
    const holePositions = [
      [position.x + 10, position.y + 50, position.z],
      [position.x + 10, position.y + dimensions.height - 50, position.z]
    ];
    
    holePositions.forEach(pos => {
      operations.push({
        type: 'drill',
        coordinates: [pos],
        depth: 20, // 20mm deep
        feedRate: this.feedRate * 0.5 // Slower feed rate for drilling
      });
    });
    
    return operations;
  }

  /**
   * Select appropriate tool for component
   */
  private selectTool(component: Component): string {
    switch (component.material.type) {
      case 'wood':
        return 'WOOD_ROUTER_6MM';
      case 'metal':
        return 'METAL_MILL_8MM';
      case 'stone':
        return 'DIAMOND_BIT_10MM';
      case 'laminate':
        return 'LAMINATE_CUTTER_4MM';
      default:
        return 'GENERAL_PURPOSE_6MM';
    }
  }

  /**
   * Build G-code from tool paths
   */
  private buildGCode(toolPaths: ToolPath[]): string {
    const lines: string[] = [];
    
    // G-code header
    lines.push('G21 ; Set units to millimeters');
    lines.push('G90 ; Absolute positioning');
    lines.push(`M3 S${this.spindleSpeed} ; Start spindle`);
    lines.push('G0 Z5 ; Move to safe height');
    lines.push('');
    
    // Process each tool path
    toolPaths.forEach((toolPath, pathIndex) => {
      lines.push(`; Tool Path ${pathIndex + 1}: ${toolPath.tool}`);
      lines.push(`; Tool: ${toolPath.tool}`);
      lines.push('');
      
      toolPath.operations.forEach((operation, opIndex) => {
        lines.push(`; Operation ${opIndex + 1}: ${operation.type}`);
        
        if (operation.type === 'cut') {
          lines.push(...this.generateCutGCode(operation));
        } else if (operation.type === 'drill') {
          lines.push(...this.generateDrillGCode(operation));
        }
        
        lines.push('G0 Z5 ; Return to safe height');
        lines.push('');
      });
    });
    
    // G-code footer
    lines.push('M5 ; Stop spindle');
    lines.push('G0 Z20 ; Move to safe height');
    lines.push('G0 X0 Y0 ; Return to origin');
    lines.push('M30 ; End program');
    
    return lines.join('\n');
  }

  /**
   * Generate G-code for cutting operation
   */
  private generateCutGCode(operation: Operation): string[] {
    const lines: string[] = [];
    
    operation.coordinates.forEach((coord, index) => {
      if (index === 0) {
        // Move to start position
        lines.push(`G0 X${coord[0].toFixed(3)} Y${coord[1].toFixed(3)}`);
        lines.push(`G1 Z${(-operation.depth).toFixed(3)} F${operation.feedRate}`);
      } else {
        // Cut to next position
        lines.push(`G1 X${coord[0].toFixed(3)} Y${coord[1].toFixed(3)} F${operation.feedRate}`);
      }
    });
    
    return lines;
  }

  /**
   * Generate G-code for drilling operation
   */
  private generateDrillGCode(operation: Operation): string[] {
    const lines: string[] = [];
    
    operation.coordinates.forEach(coord => {
      lines.push(`G0 X${coord[0].toFixed(3)} Y${coord[1].toFixed(3)}`);
      lines.push(`G1 Z${(-operation.depth).toFixed(3)} F${operation.feedRate}`);
      lines.push('G0 Z5');
    });
    
    return lines;
  }

  /**
   * Update CNC parameters
   */
  updateParameters(params: { feedRate?: number; spindleSpeed?: number }): void {
    if (params.feedRate !== undefined) {
      this.feedRate = params.feedRate;
    }
    if (params.spindleSpeed !== undefined) {
      this.spindleSpeed = params.spindleSpeed;
    }
  }

  /**
   * Validate CNC program
   */
  validateProgram(program: CNCProgram): boolean {
    if (!program.content || program.content.length === 0) {
      return false;
    }
    
    if (program.format === 'GCODE') {
      return program.content.includes('G21') && program.content.includes('M30');
    }
    
    return true;
  }
}
