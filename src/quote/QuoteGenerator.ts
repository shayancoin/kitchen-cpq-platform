import { KitchenDesign, Quote, PriceBreakdown } from '../types';

/**
 * Quote Generator
 * Generates professional quotes for kitchen designs
 */
export class QuoteGenerator {
  private validityDays: number;

  constructor(validityDays = 30) {
    this.validityDays = validityDays;
  }

  /**
   * Generate a quote for a kitchen design
   */
  generateQuote(design: KitchenDesign, pricing: PriceBreakdown): Quote {
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + this.validityDays);

    return {
      id: this.generateQuoteId(),
      design,
      pricing,
      validUntil,
      created: new Date()
    };
  }

  /**
   * Export quote as formatted text
   */
  exportQuoteText(quote: Quote): string {
    const lines: string[] = [];
    
    lines.push('='.repeat(60));
    lines.push('KITCHEN DESIGN QUOTE');
    lines.push('='.repeat(60));
    lines.push('');
    lines.push(`Quote ID: ${quote.id}`);
    lines.push(`Design: ${quote.design.name}`);
    lines.push(`Created: ${quote.created.toLocaleDateString()}`);
    lines.push(`Valid Until: ${quote.validUntil.toLocaleDateString()}`);
    lines.push('');
    lines.push('-'.repeat(60));
    lines.push('DESIGN DETAILS');
    lines.push('-'.repeat(60));
    lines.push(`Total Components: ${quote.design.components.length}`);
    lines.push(`Dimensions: ${quote.design.totalDimensions.width}" W x ${quote.design.totalDimensions.height}" H x ${quote.design.totalDimensions.depth}" D`);
    lines.push('');
    lines.push('Components:');
    quote.design.components.forEach((component, index) => {
      lines.push(`  ${index + 1}. ${component.name} (${component.type})`);
      lines.push(`     Material: ${component.material.name}`);
      lines.push(`     Size: ${component.dimensions.width}" x ${component.dimensions.height}" x ${component.dimensions.depth}"`);
    });
    lines.push('');
    lines.push('-'.repeat(60));
    lines.push('PRICING BREAKDOWN');
    lines.push('-'.repeat(60));
    lines.push(`Materials:        $${quote.pricing.materials.toFixed(2)}`);
    lines.push(`Labor:            $${quote.pricing.labor.toFixed(2)}`);
    lines.push(`Hardware:         $${quote.pricing.hardware.toFixed(2)}`);
    lines.push(`Markup:           $${quote.pricing.markup.toFixed(2)}`);
    lines.push(`Tax:              $${quote.pricing.tax.toFixed(2)}`);
    lines.push('-'.repeat(60));
    lines.push(`TOTAL:            $${quote.pricing.total.toFixed(2)}`);
    lines.push('='.repeat(60));
    
    return lines.join('\n');
  }

  /**
   * Export quote as JSON
   */
  exportQuoteJSON(quote: Quote): string {
    return JSON.stringify(quote, null, 2);
  }

  /**
   * Validate if a quote is still valid
   */
  isQuoteValid(quote: Quote): boolean {
    return new Date() <= quote.validUntil;
  }

  /**
   * Generate a unique quote ID
   */
  private generateQuoteId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 11).toUpperCase();
    return `QT-${timestamp}-${random}`;
  }

  /**
   * Update quote validity period
   */
  setValidityDays(days: number): void {
    if (days <= 0) {
      throw new Error('Validity days must be positive');
    }
    this.validityDays = days;
  }
}
