/**
 * Complete Kitchen CPQ Platform Example
 * 
 * This example demonstrates the full end-to-end workflow:
 * 1. Design a kitchen in 3D
 * 2. Calculate pricing
 * 3. Generate a quote
 * 4. Create CAD files
 * 5. Generate CNC programs
 */

import {
  KitchenConfigurator,
  PricingEngine,
  QuoteGenerator,
  CADGenerator,
  CNCConverter,
  Material,
  Component
} from '../src';

// Define materials
const oakMaterial: Material = {
  id: 'mat_oak_001',
  name: 'Premium Oak',
  type: 'wood',
  finish: 'Natural Oil',
  pricePerUnit: 75,
  color: 'Natural',
  thickness: 0.75
};

const graniteCountertop: Material = {
  id: 'mat_granite_001',
  name: 'Black Granite',
  type: 'stone',
  finish: 'Polished',
  pricePerUnit: 150,
  color: 'Black',
  thickness: 1.25
};

const stainlessSteel: Material = {
  id: 'mat_steel_001',
  name: 'Stainless Steel',
  type: 'metal',
  finish: 'Brushed',
  pricePerUnit: 100,
  color: 'Silver'
};

// Step 1: Create Kitchen Design
console.log('='.repeat(60));
console.log('STEP 1: Creating 3D Kitchen Design');
console.log('='.repeat(60));

const configurator = new KitchenConfigurator('Modern L-Shape Kitchen', {
  width: 180,  // 15 feet
  height: 96,  // 8 feet
  depth: 30    // 2.5 feet
});

// Add base cabinets
const baseCabinet1: Component = {
  id: 'cab_base_001',
  type: 'cabinet',
  name: 'Base Cabinet 36"',
  dimensions: { width: 36, height: 34.5, depth: 24 },
  material: oakMaterial,
  position: { x: 0, y: 0, z: 0 }
};

const baseCabinet2: Component = {
  id: 'cab_base_002',
  type: 'cabinet',
  name: 'Base Cabinet 30"',
  dimensions: { width: 30, height: 34.5, depth: 24 },
  material: oakMaterial,
  position: { x: 36, y: 0, z: 0 }
};

const baseCabinet3: Component = {
  id: 'cab_base_003',
  type: 'cabinet',
  name: 'Corner Base Cabinet',
  dimensions: { width: 36, height: 34.5, depth: 24 },
  material: oakMaterial,
  position: { x: 66, y: 0, z: 0 }
};

// Add wall cabinets
const wallCabinet1: Component = {
  id: 'cab_wall_001',
  type: 'cabinet',
  name: 'Wall Cabinet 36"',
  dimensions: { width: 36, height: 30, depth: 12 },
  material: oakMaterial,
  position: { x: 0, y: 54, z: 0 }
};

const wallCabinet2: Component = {
  id: 'cab_wall_002',
  type: 'cabinet',
  name: 'Wall Cabinet 30"',
  dimensions: { width: 30, height: 30, depth: 12 },
  material: oakMaterial,
  position: { x: 36, y: 54, z: 0 }
};

// Add countertop
const countertop: Component = {
  id: 'counter_001',
  type: 'countertop',
  name: 'Granite Countertop',
  dimensions: { width: 102, height: 1.25, depth: 26 },
  material: graniteCountertop,
  position: { x: 0, y: 34.5, z: 0 }
};

// Add sink
const sink: Component = {
  id: 'sink_001',
  type: 'sink',
  name: 'Undermount Double Sink',
  dimensions: { width: 33, height: 9, depth: 22 },
  material: stainlessSteel,
  position: { x: 36, y: 35.75, z: 2 }
};

// Add all components
configurator.addComponent(baseCabinet1);
configurator.addComponent(baseCabinet2);
configurator.addComponent(baseCabinet3);
configurator.addComponent(wallCabinet1);
configurator.addComponent(wallCabinet2);
configurator.addComponent(countertop);
configurator.addComponent(sink);

const design = configurator.getDesign();
console.log(`✓ Created kitchen design: ${design.name}`);
console.log(`✓ Total components: ${design.components.length}`);
console.log(`✓ Total surface area: ${configurator.calculateTotalArea().toFixed(2)} sq in`);
console.log('');

// Step 2: Calculate Pricing
console.log('='.repeat(60));
console.log('STEP 2: Calculating Pricing');
console.log('='.repeat(60));

const pricingEngine = new PricingEngine(85, 0.35, 0.0825);
const pricing = pricingEngine.calculatePrice(design);

console.log(`Materials Cost:   $${pricing.materials.toFixed(2)}`);
console.log(`Labor Cost:       $${pricing.labor.toFixed(2)}`);
console.log(`Hardware Cost:    $${pricing.hardware.toFixed(2)}`);
console.log(`Markup (35%):     $${pricing.markup.toFixed(2)}`);
console.log(`Tax (8.25%):      $${pricing.tax.toFixed(2)}`);
console.log(`-`.repeat(40));
console.log(`Total Price:      $${pricing.total.toFixed(2)}`);
console.log('');

// Step 3: Generate Quote
console.log('='.repeat(60));
console.log('STEP 3: Generating Quote');
console.log('='.repeat(60));

const quoteGenerator = new QuoteGenerator(45);
const quote = quoteGenerator.generateQuote(design, pricing);

console.log(quoteGenerator.exportQuoteText(quote));
console.log('');

// Step 4: Generate CAD Files
console.log('='.repeat(60));
console.log('STEP 4: Generating CAD Files');
console.log('='.repeat(60));

const cadGenerator = new CADGenerator();
const dxfFile = cadGenerator.generateDXF(design);
const stepFile = cadGenerator.generateSTEP(design);

console.log(`✓ Generated DXF file: ${dxfFile.fileName}`);
console.log(`  Format: ${dxfFile.format}`);
console.log(`  Size: ${dxfFile.content.length} bytes`);
console.log(`  Valid: ${cadGenerator.validateCADFile(dxfFile)}`);
console.log('');

console.log(`✓ Generated STEP file: ${stepFile.fileName}`);
console.log(`  Format: ${stepFile.format}`);
console.log(`  Size: ${stepFile.content.length} bytes`);
console.log(`  Valid: ${cadGenerator.validateCADFile(stepFile)}`);
console.log('');

// Step 5: Generate CNC Programs
console.log('='.repeat(60));
console.log('STEP 5: Generating CNC Programs');
console.log('='.repeat(60));

const cncConverter = new CNCConverter(1200, 12000);
const cncProgram = cncConverter.convertToGCode(dxfFile, design.components);

console.log(`✓ Generated CNC program: ${cncProgram.fileName}`);
console.log(`  Format: ${cncProgram.format}`);
console.log(`  Tool Paths: ${cncProgram.toolPaths.length}`);
console.log(`  Program Size: ${cncProgram.content.length} bytes`);
console.log(`  Valid: ${cncConverter.validateProgram(cncProgram)}`);
console.log('');

console.log('Tool Paths:');
cncProgram.toolPaths.forEach((toolPath, index) => {
  console.log(`  ${index + 1}. ${toolPath.tool}`);
  console.log(`     Operations: ${toolPath.operations.length}`);
});
console.log('');

// Display sample G-code (first 20 lines)
console.log('Sample G-code (first 20 lines):');
console.log('-'.repeat(60));
const gCodeLines = cncProgram.content.split('\n').slice(0, 20);
gCodeLines.forEach(line => console.log(line));
console.log('...');
console.log('');

// Summary
console.log('='.repeat(60));
console.log('WORKFLOW COMPLETE');
console.log('='.repeat(60));
console.log('✓ 3D Kitchen Design Created');
console.log('✓ Pricing Calculated');
console.log('✓ Quote Generated');
console.log('✓ CAD Files Exported (DXF, STEP)');
console.log('✓ CNC Programs Generated (G-code)');
console.log('');
console.log('The kitchen is ready for manufacturing! 🎉');
