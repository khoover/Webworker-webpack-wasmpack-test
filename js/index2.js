console.log("I'm alive!");
var blob = new Blob(["console.log('The worker is alive!');"], {type: 'text/javascript'});
var url = URL.createObjectURL(blob);
var worker = new Worker(url, {type: 'classic'});
blob = new Blob(['importScripts("http://localhost:8080/worker.js");'], {type: 'text/javascript'});
url = URL.createObjectURL(blob);
console.log("Let's try the other worker.");
worker = new Worker(url, {type: 'classic'});
