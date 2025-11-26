import { KitchenConfigurator } from '../configurator/KitchenConfigurator';
import { Component, Material } from '../types';

describe('KitchenConfigurator', () => {
  let configurator: KitchenConfigurator;
  
  const testMaterial: Material = {
    id: 'mat_001',
    name: 'Oak Wood',
    type: 'wood',
    finish: 'Natural',
    pricePerUnit: 50
  };

  beforeEach(() => {
    configurator = new KitchenConfigurator('Test Kitchen', {
      width: 120,
      height: 96,
      depth: 24
    });
  });

  test('should create a new kitchen design', () => {
    const design = configurator.getDesign();
    expect(design.name).toBe('Test Kitchen');
    expect(design.components).toHaveLength(0);
  });

  test('should add a component to the design', () => {
    const component: Component = {
      id: 'comp_001',
      type: 'cabinet',
      name: 'Base Cabinet',
      dimensions: { width: 24, height: 36, depth: 24 },
      material: testMaterial,
      position: { x: 0, y: 0, z: 0 }
    };

    configurator.addComponent(component);
    const design = configurator.getDesign();
    expect(design.components).toHaveLength(1);
  });

  test('should remove a component from the design', () => {
    const component: Component = {
      id: 'comp_001',
      type: 'cabinet',
      name: 'Base Cabinet',
      dimensions: { width: 24, height: 36, depth: 24 },
      material: testMaterial,
      position: { x: 0, y: 0, z: 0 }
    };

    configurator.addComponent(component);
    const removed = configurator.removeComponent('comp_001');
    expect(removed).toBe(true);
    expect(configurator.getDesign().components).toHaveLength(0);
  });

  test('should throw error when component exceeds kitchen dimensions', () => {
    const component: Component = {
      id: 'comp_001',
      type: 'cabinet',
      name: 'Oversized Cabinet',
      dimensions: { width: 200, height: 36, depth: 24 },
      material: testMaterial,
      position: { x: 0, y: 0, z: 0 }
    };

    expect(() => configurator.addComponent(component)).toThrow();
  });

  test('should calculate total area correctly', () => {
    const component: Component = {
      id: 'comp_001',
      type: 'cabinet',
      name: 'Base Cabinet',
      dimensions: { width: 10, height: 10, depth: 10 },
      material: testMaterial,
      position: { x: 0, y: 0, z: 0 }
    };

    configurator.addComponent(component);
    const area = configurator.calculateTotalArea();
    // Surface area of a 10x10x10 cube = 2(100 + 100 + 100) = 600
    expect(area).toBe(600);
  });
});
