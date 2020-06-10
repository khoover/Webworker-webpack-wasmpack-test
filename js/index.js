console.log('In index.');
var blob = new Blob(['import("http://localhost:8080/worker.js").then(() => { console.log("In worker."); });'], { type: 'text/javascript'});
var url = URL.createObjectURL(blob);
var worker = new Worker(url, { type: 'classic' });
console.log('Made worker.');
