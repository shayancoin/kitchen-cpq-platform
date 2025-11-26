import { KitchenDesign, PriceBreakdown } from '../types';

/**
 * Pricing Engine
 * Calculates pricing for kitchen designs
 */
export class PricingEngine {
  private laborRatePerHour: number;
  private markupPercentage: number;
  private taxRate: number;

  constructor(
    laborRatePerHour = 75,
    markupPercentage = 0.30,
    taxRate = 0.08
  ) {
    this.laborRatePerHour = laborRatePerHour;
    this.markupPercentage = markupPercentage;
    this.taxRate = taxRate;
  }

  /**
   * Calculate comprehensive pricing for a kitchen design
   */
  calculatePrice(design: KitchenDesign): PriceBreakdown {
    const materials = this.calculateMaterialsCost(design);
    const labor = this.calculateLaborCost(design);
    const hardware = this.calculateHardwareCost(design);
    
    const subtotal = materials + labor + hardware;
    const markup = subtotal * this.markupPercentage;
    const beforeTax = subtotal + markup;
    const tax = beforeTax * this.taxRate;
    const total = beforeTax + tax;

    return {
      materials,
      labor,
      hardware,
      markup,
      tax,
      total
    };
  }

  /**
   * Calculate materials cost
   */
  private calculateMaterialsCost(design: KitchenDesign): number {
    return design.components.reduce((total, component) => {
      const volume = 
        component.dimensions.width *
        component.dimensions.height *
        component.dimensions.depth;
      
      const materialCost = volume * component.material.pricePerUnit;
      return total + materialCost;
    }, 0);
  }

  /**
   * Calculate labor cost
   */
  private calculateLaborCost(design: KitchenDesign): number {
    // Estimate hours based on number and complexity of components
    const baseHours = design.components.length * 2; // 2 hours per component
    const complexityFactor = this.calculateComplexityFactor(design);
    const totalHours = baseHours * complexityFactor;
    
    return totalHours * this.laborRatePerHour;
  }

  /**
   * Calculate hardware cost
   */
  private calculateHardwareCost(design: KitchenDesign): number {
    // Count hardware components (hinges, handles, etc.)
    const hardwareComponents = design.components.filter(
      c => c.type === 'hardware'
    );
    
    return hardwareComponents.reduce((total, component) => {
      return total + component.material.pricePerUnit;
    }, 0);
  }

  /**
   * Calculate complexity factor based on design characteristics
   */
  private calculateComplexityFactor(design: KitchenDesign): number {
    let factor = 1.0;
    
    // More components = more complex
    if (design.components.length > 20) {
      factor += 0.2;
    }
    
    // Custom materials increase complexity
    const uniqueMaterials = new Set(
      design.components.map(c => c.material.id)
    ).size;
    
    if (uniqueMaterials > 5) {
      factor += 0.1;
    }
    
    return factor;
  }

  /**
   * Update pricing parameters
   */
  updatePricingParameters(params: {
    laborRate?: number;
    markup?: number;
    taxRate?: number;
  }): void {
    if (params.laborRate !== undefined) {
      this.laborRatePerHour = params.laborRate;
    }
    if (params.markup !== undefined) {
      this.markupPercentage = params.markup;
    }
    if (params.taxRate !== undefined) {
      this.taxRate = params.taxRate;
    }
  }
}
