console.log('In worker.');
import("../pkg/index.js").catch(console.error).finally(console.log('Loaded wasm'));
