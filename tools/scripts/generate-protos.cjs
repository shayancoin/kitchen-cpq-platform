#!/usr/bin/env node

// Placeholder proto generation script. In later steps this will
// invoke buf/protoc or grpc-tools to generate language-specific stubs
// into packages/proto-defs/gen/*.
//
// For now, enumerate all .proto files recursively under packages/proto-defs/protos
// so future codegen hooks have the full list (including nested workflow/v1 paths).

const fs = require('fs');
const path = require('path');

const protoRoot = path.join(__dirname, '..', '..', 'packages', 'proto-defs', 'protos');

function listProtos(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listProtos(full));
    } else if (entry.isFile() && entry.name.endsWith('.proto')) {
      files.push(full);
    }
  }
  return files;
}

const protos = listProtos(protoRoot);
console.log('Found proto files:', protos.map((p) => path.relative(protoRoot, p)));
