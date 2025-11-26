import { KitchenDesign, CADFile, Component } from '../types';

/**
 * CAD Generator
 * Generates CAD files from kitchen designs
 */
export class CADGenerator {
  /**
   * Generate a DXF CAD file from a kitchen design
   */
  generateDXF(design: KitchenDesign): CADFile {
    const dxfContent = this.buildDXFContent(design);
    
    return {
      format: 'DXF',
      content: dxfContent,
      fileName: `${this.sanitizeFileName(design.name)}.dxf`
    };
  }

  /**
   * Generate a STEP CAD file from a kitchen design
   */
  generateSTEP(design: KitchenDesign): CADFile {
    const stepContent = this.buildSTEPContent(design);
    
    return {
      format: 'STEP',
      content: stepContent,
      fileName: `${this.sanitizeFileName(design.name)}.step`
    };
  }

  /**
   * Build DXF file content
   */
  private buildDXFContent(design: KitchenDesign): string {
    const lines: string[] = [];
    
    // DXF header
    lines.push('0');
    lines.push('SECTION');
    lines.push('2');
    lines.push('HEADER');
    lines.push('9');
    lines.push('$ACADVER');
    lines.push('1');
    lines.push('AC1015');
    lines.push('0');
    lines.push('ENDSEC');
    
    // Entities section
    lines.push('0');
    lines.push('SECTION');
    lines.push('2');
    lines.push('ENTITIES');
    
    // Add components as 3D boxes
    design.components.forEach(component => {
      lines.push(...this.createDXF3DBox(component));
    });
    
    lines.push('0');
    lines.push('ENDSEC');
    
    // EOF
    lines.push('0');
    lines.push('EOF');
    
    return lines.join('\n');
  }

  /**
   * Create a 3D box in DXF format
   */
  private createDXF3DBox(component: Component): string[] {
    const { position, dimensions } = component;
    const lines: string[] = [];
    
    // Create a 3DFACE for each side of the box
    const vertices = this.calculateBoxVertices(position, dimensions);
    
    // Bottom face
    lines.push('0');
    lines.push('3DFACE');
    lines.push('8');
    lines.push(component.type);
    lines.push('10');
    lines.push(vertices[0].x.toString());
    lines.push('20');
    lines.push(vertices[0].y.toString());
    lines.push('30');
    lines.push(vertices[0].z.toString());
    lines.push('11');
    lines.push(vertices[1].x.toString());
    lines.push('21');
    lines.push(vertices[1].y.toString());
    lines.push('31');
    lines.push(vertices[1].z.toString());
    lines.push('12');
    lines.push(vertices[2].x.toString());
    lines.push('22');
    lines.push(vertices[2].y.toString());
    lines.push('32');
    lines.push(vertices[2].z.toString());
    lines.push('13');
    lines.push(vertices[3].x.toString());
    lines.push('23');
    lines.push(vertices[3].y.toString());
    lines.push('33');
    lines.push(vertices[3].z.toString());
    
    return lines;
  }

  /**
   * Calculate the 8 vertices of a box
   */
  private calculateBoxVertices(
    position: { x: number; y: number; z: number },
    dimensions: { width: number; height: number; depth: number }
  ): Array<{ x: number; y: number; z: number }> {
    const { x, y, z } = position;
    const { width, height, depth } = dimensions;
    
    return [
      { x, y, z },
      { x: x + width, y, z },
      { x: x + width, y: y + height, z },
      { x, y: y + height, z },
      { x, y, z: z + depth },
      { x: x + width, y, z: z + depth },
      { x: x + width, y: y + height, z: z + depth },
      { x, y: y + height, z: z + depth }
    ];
  }

  /**
   * Build STEP file content
   */
  private buildSTEPContent(design: KitchenDesign): string {
    const lines: string[] = [];
    
    // STEP header
    lines.push('ISO-10303-21;');
    lines.push('HEADER;');
    lines.push(`FILE_DESCRIPTION(('Kitchen Design: ${design.name}'),'2;1');`);
    lines.push(`FILE_NAME('${this.sanitizeFileName(design.name)}.step','${new Date().toISOString()}',(''),(''),'','Kitchen CPQ Platform','');`);
    lines.push('FILE_SCHEMA((\'\'));');
    lines.push('ENDSEC;');
    
    // Data section
    lines.push('DATA;');
    
    let entityId = 1;
    design.components.forEach(component => {
      lines.push(`#${entityId}=PRODUCT('${component.id}','${component.name}','${component.type}',(#${entityId + 1}));`);
      lines.push(`#${entityId + 1}=PRODUCT_CONTEXT('',#${entityId + 2},'');`);
      lines.push(`#${entityId + 2}=APPLICATION_CONTEXT('Kitchen CPQ');`);
      entityId += 3;
    });
    
    lines.push('ENDSEC;');
    lines.push('END-ISO-10303-21;');
    
    return lines.join('\n');
  }

  /**
   * Sanitize filename
   */
  private sanitizeFileName(name: string): string {
    return name
      .replace(/[^a-z0-9_-]/gi, '_')
      .replace(/_+/g, '_')
      .toLowerCase();
  }

  /**
   * Validate CAD file content
   */
  validateCADFile(cadFile: CADFile): boolean {
    if (!cadFile.content || cadFile.content.length === 0) {
      return false;
    }
    
    if (cadFile.format === 'DXF') {
      return cadFile.content.includes('SECTION') && cadFile.content.includes('EOF');
    }
    
    if (cadFile.format === 'STEP') {
      return cadFile.content.includes('ISO-10303-21') && cadFile.content.includes('ENDSEC');
    }
    
    return true;
  }
}
