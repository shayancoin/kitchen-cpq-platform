#!/usr/bin/env node

/**
 * Quick Start Demo
 * Run: npm start
 */

const {
  KitchenConfigurator,
  PricingEngine,
  QuoteGenerator,
  CADGenerator,
  CNCConverter
} = require('./dist');

console.log('\n🏗️  Kitchen CPQ Platform - Quick Demo\n');

// 1. Create a simple kitchen
const kitchen = new KitchenConfigurator('Demo Kitchen', {
  width: 120,
  height: 96,
  depth: 24
});

const material = {
  id: 'oak_001',
  name: 'Oak Wood',
  type: 'wood',
  finish: 'Natural',
  pricePerUnit: 50
};

kitchen.addComponent({
  id: 'cab_001',
  type: 'cabinet',
  name: 'Base Cabinet',
  dimensions: { width: 36, height: 34, depth: 24 },
  material: material,
  position: { x: 0, y: 0, z: 0 }
});

console.log('✓ Kitchen design created');
console.log(`  Components: ${kitchen.getDesign().components.length}`);

// 2. Calculate pricing
const pricing = new PricingEngine();
const price = pricing.calculatePrice(kitchen.getDesign());
console.log(`\n✓ Pricing calculated: $${price.total.toFixed(2)}`);

// 3. Generate quote
const quotes = new QuoteGenerator();
const quote = quotes.generateQuote(kitchen.getDesign(), price);
console.log(`✓ Quote generated: ${quote.id}`);

// 4. Generate CAD
const cad = new CADGenerator();
const dxf = cad.generateDXF(kitchen.getDesign());
console.log(`✓ CAD file generated: ${dxf.fileName}`);

// 5. Generate CNC
const cnc = new CNCConverter();
const program = cnc.convertToGCode(dxf, kitchen.getDesign().components);
console.log(`✓ CNC program generated: ${program.fileName}`);

console.log('\n✅ All systems operational!\n');
console.log('📚 See examples/complete-workflow.ts for a comprehensive example\n');
