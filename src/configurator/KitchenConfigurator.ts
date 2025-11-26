import { KitchenDesign, Component, Dimensions } from '../types';

/**
 * 3D Kitchen Configurator
 * Handles the configuration and visualization of kitchen designs
 */
export class KitchenConfigurator {
  private design: KitchenDesign;

  constructor(name: string, dimensions: Dimensions) {
    this.design = {
      id: this.generateId(),
      name,
      components: [],
      totalDimensions: dimensions,
      created: new Date(),
      modified: new Date()
    };
  }

  /**
   * Add a component to the kitchen design
   */
  addComponent(component: Component): void {
    this.validateComponent(component);
    this.design.components.push(component);
    this.design.modified = new Date();
  }

  /**
   * Remove a component from the design
   */
  removeComponent(componentId: string): boolean {
    const initialLength = this.design.components.length;
    this.design.components = this.design.components.filter(c => c.id !== componentId);
    
    if (this.design.components.length < initialLength) {
      this.design.modified = new Date();
      return true;
    }
    return false;
  }

  /**
   * Update a component in the design
   */
  updateComponent(componentId: string, updates: Partial<Component>): boolean {
    const component = this.design.components.find(c => c.id === componentId);
    
    if (!component) {
      return false;
    }

    Object.assign(component, updates);
    this.design.modified = new Date();
    return true;
  }

  /**
   * Get the current design
   */
  getDesign(): KitchenDesign {
    return { ...this.design, components: [...this.design.components] };
  }

  /**
   * Validate that a component fits within the kitchen dimensions
   */
  private validateComponent(component: Component): void {
    const { position, dimensions } = component;
    const { totalDimensions } = this.design;

    if (position.x + dimensions.width > totalDimensions.width) {
      throw new Error('Component exceeds kitchen width');
    }

    if (position.y + dimensions.height > totalDimensions.height) {
      throw new Error('Component exceeds kitchen height');
    }

    if (position.z + dimensions.depth > totalDimensions.depth) {
      throw new Error('Component exceeds kitchen depth');
    }
  }

  /**
   * Generate a unique ID
   */
  private generateId(): string {
    return `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Export design as 3D model data
   */
  export3DModel(): string {
    return JSON.stringify({
      design: this.design,
      format: '3D_MODEL',
      version: '1.0'
    }, null, 2);
  }

  /**
   * Calculate total surface area for all components
   */
  calculateTotalArea(): number {
    return this.design.components.reduce((total, component) => {
      const { width, height, depth } = component.dimensions;
      // Calculate surface area of a box (all 6 faces)
      const area = 2 * (width * height + width * depth + height * depth);
      return total + area;
    }, 0);
  }
}
