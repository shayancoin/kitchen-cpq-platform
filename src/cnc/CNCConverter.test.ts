import { CNCConverter } from '../cnc/CNCConverter';
import { Component, Material, CADFile } from '../types';

describe('CNCConverter', () => {
  let cncConverter: CNCConverter;
  
  const testMaterial: Material = {
    id: 'mat_001',
    name: 'Oak Wood',
    type: 'wood',
    finish: 'Natural',
    pricePerUnit: 50
  };

  const testComponent: Component = {
    id: 'comp_001',
    type: 'cabinet',
    name: 'Base Cabinet',
    dimensions: { width: 24, height: 36, depth: 24 },
    material: testMaterial,
    position: { x: 0, y: 0, z: 0 }
  };

  const testCADFile: CADFile = {
    format: 'DXF',
    content: '0\nSECTION\n0\nEOF',
    fileName: 'test.dxf'
  };

  beforeEach(() => {
    cncConverter = new CNCConverter();
  });

  test('should convert CAD to G-code', () => {
    const program = cncConverter.convertToGCode(testCADFile, [testComponent]);
    
    expect(program.format).toBe('GCODE');
    expect(program.fileName).toMatch(/\.gcode$/);
    expect(program.content).toContain('G21');
    expect(program.content).toContain('M30');
  });

  test('should generate tool paths', () => {
    const program = cncConverter.convertToGCode(testCADFile, [testComponent]);
    
    expect(program.toolPaths).toBeDefined();
    expect(program.toolPaths.length).toBeGreaterThan(0);
  });

  test('should validate CNC program', () => {
    const program = cncConverter.convertToGCode(testCADFile, [testComponent]);
    const isValid = cncConverter.validateProgram(program);
    
    expect(isValid).toBe(true);
  });

  test('should update CNC parameters', () => {
    cncConverter.updateParameters({
      feedRate: 1500,
      spindleSpeed: 12000
    });

    const program = cncConverter.convertToGCode(testCADFile, [testComponent]);
    expect(program.content).toContain('S12000');
  });

  test('should select appropriate tool for material type', () => {
    const metalComponent: Component = {
      ...testComponent,
      material: { ...testMaterial, type: 'metal' }
    };

    const program = cncConverter.convertToGCode(testCADFile, [metalComponent]);
    expect(program.toolPaths[0].tool).toContain('METAL');
  });
});
