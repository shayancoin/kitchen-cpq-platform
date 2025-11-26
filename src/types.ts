/**
 * Core types for the Kitchen CPQ Platform
 */

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Material {
  id: string;
  name: string;
  type: 'wood' | 'metal' | 'laminate' | 'stone' | 'composite';
  finish: string;
  pricePerUnit: number;
  color?: string;
  thickness?: number;
}

export interface Component {
  id: string;
  type: 'cabinet' | 'countertop' | 'sink' | 'appliance' | 'hardware' | 'backsplash';
  name: string;
  dimensions: Dimensions;
  material: Material;
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation?: {
    x: number;
    y: number;
    z: number;
  };
  metadata?: Record<string, unknown>;
}

export interface KitchenDesign {
  id: string;
  name: string;
  components: Component[];
  totalDimensions: Dimensions;
  created: Date;
  modified: Date;
  metadata?: Record<string, unknown>;
}

export interface PriceBreakdown {
  materials: number;
  labor: number;
  hardware: number;
  markup: number;
  tax: number;
  total: number;
}

export interface Quote {
  id: string;
  design: KitchenDesign;
  pricing: PriceBreakdown;
  validUntil: Date;
  created: Date;
}

export interface CADFile {
  format: 'DXF' | 'DWG' | 'STEP' | 'IGES';
  content: string;
  fileName: string;
}

export interface CNCProgram {
  format: 'GCODE' | 'HPGL' | 'NC';
  content: string;
  fileName: string;
  toolPaths: ToolPath[];
}

export interface ToolPath {
  tool: string;
  operations: Operation[];
}

export interface Operation {
  type: 'cut' | 'drill' | 'mill' | 'route';
  coordinates: number[][];
  depth: number;
  feedRate: number;
}
