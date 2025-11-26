import { CADGenerator } from '../cad/CADGenerator';
import { KitchenDesign, Component, Material } from '../types';

describe('CADGenerator', () => {
  let cadGenerator: CADGenerator;
  
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

  const testDesign: KitchenDesign = {
    id: 'design_001',
    name: 'Test Kitchen',
    components: [testComponent],
    totalDimensions: { width: 120, height: 96, depth: 24 },
    created: new Date(),
    modified: new Date()
  };

  beforeEach(() => {
    cadGenerator = new CADGenerator();
  });

  test('should generate DXF file', () => {
    const dxf = cadGenerator.generateDXF(testDesign);
    
    expect(dxf.format).toBe('DXF');
    expect(dxf.fileName).toMatch(/\.dxf$/);
    expect(dxf.content).toContain('SECTION');
    expect(dxf.content).toContain('EOF');
  });

  test('should generate STEP file', () => {
    const step = cadGenerator.generateSTEP(testDesign);
    
    expect(step.format).toBe('STEP');
    expect(step.fileName).toMatch(/\.step$/);
    expect(step.content).toContain('ISO-10303-21');
    expect(step.content).toContain('ENDSEC');
  });

  test('should validate CAD file', () => {
    const dxf = cadGenerator.generateDXF(testDesign);
    const isValid = cadGenerator.validateCADFile(dxf);
    expect(isValid).toBe(true);
  });

  test('should reject invalid CAD file', () => {
    const invalidCAD = {
      format: 'DXF' as const,
      content: '',
      fileName: 'test.dxf'
    };
    
    const isValid = cadGenerator.validateCADFile(invalidCAD);
    expect(isValid).toBe(false);
  });
});
