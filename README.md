# Kitchen CPQ Platform

Frontier, end-to-end, 3D kitchen CPQ + CAD-to-CNC platform.

## Overview

The Kitchen CPQ Platform is a comprehensive solution for configuring, pricing, and quoting custom kitchen designs with full CAD and CNC manufacturing support. The platform provides an end-to-end workflow from initial 3D design to manufacturing-ready CNC programs.

## Features

### 🏗️ 3D Kitchen Configurator
- Interactive 3D kitchen design
- Component-based architecture (cabinets, countertops, sinks, appliances)
- Material selection and customization
- Real-time validation of design constraints
- Surface area calculations

### 💰 Pricing Engine
- Comprehensive cost breakdown (materials, labor, hardware)
- Configurable markup and tax rates
- Volume-based material pricing
- Complexity factor calculations
- Customizable pricing parameters

### 📋 Quote Generator
- Professional quote generation
- Detailed component listings
- Formatted text and JSON export
- Quote validity tracking
- Configurable validity periods

### 🔧 CAD Generation
- DXF format support for 2D/3D designs
- STEP format support for 3D models
- Component-based CAD entities
- Automatic file naming and validation

### 🤖 CNC Conversion
- G-code generation for CNC machines
- Automated tool path generation
- Tool selection based on material type
- Cutting and drilling operations
- Configurable feed rates and spindle speeds

## Installation

```bash
npm install
```

## Usage

### Basic Example

```typescript
import {
  KitchenConfigurator,
  PricingEngine,
  QuoteGenerator,
  CADGenerator,
  CNCConverter
} from 'kitchen-cpq-platform';

// Create a kitchen design
const configurator = new KitchenConfigurator('My Kitchen', {
  width: 120,
  height: 96,
  depth: 24
});

// Add components
configurator.addComponent({
  id: 'cab_001',
  type: 'cabinet',
  name: 'Base Cabinet',
  dimensions: { width: 24, height: 36, depth: 24 },
  material: {
    id: 'mat_oak',
    name: 'Oak Wood',
    type: 'wood',
    finish: 'Natural',
    pricePerUnit: 50
  },
  position: { x: 0, y: 0, z: 0 }
});

// Calculate pricing
const pricingEngine = new PricingEngine();
const design = configurator.getDesign();
const pricing = pricingEngine.calculatePrice(design);

// Generate quote
const quoteGenerator = new QuoteGenerator();
const quote = quoteGenerator.generateQuote(design, pricing);
console.log(quoteGenerator.exportQuoteText(quote));

// Generate CAD files
const cadGenerator = new CADGenerator();
const dxfFile = cadGenerator.generateDXF(design);
const stepFile = cadGenerator.generateSTEP(design);

// Convert to CNC
const cncConverter = new CNCConverter();
const cncProgram = cncConverter.convertToGCode(dxfFile, design.components);
console.log(cncProgram.content);
```

## Architecture

The platform is organized into five main modules:

1. **Configurator** - 3D design and component management
2. **Pricing** - Cost calculation and pricing logic
3. **Quote** - Quote generation and formatting
4. **CAD** - CAD file generation (DXF, STEP)
5. **CNC** - CNC program generation (G-code)

## Development

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Lint

```bash
npm run lint
```

## API Documentation

### KitchenConfigurator

```typescript
const configurator = new KitchenConfigurator(name: string, dimensions: Dimensions);
configurator.addComponent(component: Component): void;
configurator.removeComponent(componentId: string): boolean;
configurator.updateComponent(componentId: string, updates: Partial<Component>): boolean;
configurator.getDesign(): KitchenDesign;
configurator.calculateTotalArea(): number;
configurator.export3DModel(): string;
```

### PricingEngine

```typescript
const engine = new PricingEngine(laborRate?: number, markup?: number, taxRate?: number);
engine.calculatePrice(design: KitchenDesign): PriceBreakdown;
engine.updatePricingParameters(params: {...}): void;
```

### QuoteGenerator

```typescript
const generator = new QuoteGenerator(validityDays?: number);
generator.generateQuote(design: KitchenDesign, pricing: PriceBreakdown): Quote;
generator.exportQuoteText(quote: Quote): string;
generator.exportQuoteJSON(quote: Quote): string;
generator.isQuoteValid(quote: Quote): boolean;
```

### CADGenerator

```typescript
const cad = new CADGenerator();
cad.generateDXF(design: KitchenDesign): CADFile;
cad.generateSTEP(design: KitchenDesign): CADFile;
cad.validateCADFile(cadFile: CADFile): boolean;
```

### CNCConverter

```typescript
const cnc = new CNCConverter(feedRate?: number, spindleSpeed?: number);
cnc.convertToGCode(cadFile: CADFile, components: Component[]): CNCProgram;
cnc.updateParameters(params: {...}): void;
cnc.validateProgram(program: CNCProgram): boolean;
```

## Component Types

- `cabinet` - Base cabinets, wall cabinets, tall cabinets
- `countertop` - Work surfaces
- `sink` - Kitchen sinks
- `appliance` - Built-in appliances
- `hardware` - Hinges, handles, accessories
- `backsplash` - Wall protection and decoration

## Material Types

- `wood` - Natural wood materials
- `metal` - Stainless steel, aluminum
- `laminate` - Laminated surfaces
- `stone` - Granite, marble, quartz
- `composite` - Engineered materials

## License

MIT