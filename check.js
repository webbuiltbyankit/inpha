const fs = require('fs'), vm = require('vm');
const code = fs.readFileSync(__dirname + '/data.js', 'utf8') + fs.readFileSync(__dirname + '/hifi.js', 'utf8') +
  `;PAGES.map(p=>{const h=frameHTML(JSON.parse(JSON.stringify(p)));if(/undefined|NaN|\\[object/.test(h))throw new Error(p.id+' has bad output');return p.id+':'+h.length}).join(' ')`;
console.log(vm.runInNewContext(code, {}));
