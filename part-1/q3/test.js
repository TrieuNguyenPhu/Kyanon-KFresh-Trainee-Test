const reduceFn = require('./groupByAge.reduce');
const forFn = require('./groupByAge.for');
const forEachFn = require('./groupByAge.forEach');
const mapFn = require('./groupByAge.map');

// Danh sách function
const functions = {
  reduce: reduceFn,
  for: forFn,
  foreach: forEachFn,
  map: mapFn
};

// Lấy tên function từ command line
const selected = process.argv[2];

// Data test
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
];

if (!selected || !functions[selected]) {
  console.log("❌ Vui lòng chọn function:");
  console.log("👉 node test.js reduce");
  console.log("👉 node test.js for");
  console.log("👉 node test.js foreach");
  console.log("👉 node test.js map");
  process.exit(1);
}

const result = functions[selected](users);

console.log(`✅ Using: ${selected}`);
console.log(result);