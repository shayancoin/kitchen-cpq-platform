import { PricingEngine } from '../pricing/PricingEngine';
import { KitchenDesign, Component, Material } from '../types';

describe('PricingEngine', () => {
  let pricingEngine: PricingEngine;
  
  const testMaterial: Material = {
    id: 'mat_001',
    name: 'Oak Wood',
    type: 'wood',
    finish: 'Natural',
    pricePerUnit: 10
  };

  const testComponent: Component = {
    id: 'comp_001',
    type: 'cabinet',
    name: 'Base Cabinet',
    dimensions: { width: 2, height: 3, depth: 2 },
    material: testMaterial,
    position: { x: 0, y: 0, z: 0 }
  };

  beforeEach(() => {
    pricingEngine = new PricingEngine(75, 0.30, 0.08);
  });

  test('should calculate pricing breakdown', () => {
    const design: KitchenDesign = {
      id: 'design_001',
      name: 'Test Kitchen',
      components: [testComponent],
      totalDimensions: { width: 120, height: 96, depth: 24 },
      created: new Date(),
      modified: new Date()
    };

    const pricing = pricingEngine.calculatePrice(design);
    
    expect(pricing.materials).toBeGreaterThan(0);
    expect(pricing.labor).toBeGreaterThan(0);
    expect(pricing.total).toBeGreaterThan(0);
    expect(pricing.total).toBeGreaterThan(pricing.materials + pricing.labor);
  });

  test('should update pricing parameters', () => {
    pricingEngine.updatePricingParameters({
      laborRate: 100,
      markup: 0.40,
      taxRate: 0.10
    });

    const design: KitchenDesign = {
      id: 'design_001',
      name: 'Test Kitchen',
      components: [testComponent],
      totalDimensions: { width: 120, height: 96, depth: 24 },
      created: new Date(),
      modified: new Date()
    };

    const pricing = pricingEngine.calculatePrice(design);
    expect(pricing).toBeDefined();
  });

  test('should calculate materials cost based on volume', () => {
    const component: Component = {
      ...testComponent,
      dimensions: { width: 10, height: 10, depth: 10 }
    };

    const design: KitchenDesign = {
      id: 'design_001',
      name: 'Test Kitchen',
      components: [component],
      totalDimensions: { width: 120, height: 96, depth: 24 },
      created: new Date(),
      modified: new Date()
    };

    const pricing = pricingEngine.calculatePrice(design);
    // Volume = 10 * 10 * 10 = 1000, pricePerUnit = 10, so materials = 10000
    expect(pricing.materials).toBe(10000);
  });
});
