console.log("Starting notes.js");
console.log(module);
console.log(module.id);
console.log(module.paths[0]);
// Module {
//     id: '/home/javascript/Documents/JavaScriptXL/NOTE-NODE/notes.js',
//     path: '/home/javascript/Documents/JavaScriptXL/NOTE-NODE',
//     exports: {},
//     filename: '/home/javascript/Documents/JavaScriptXL/NOTE-NODE/notes.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/home/javascript/Documents/JavaScriptXL/NOTE-NODE/node_modules',
//       '/home/javascript/Documents/JavaScriptXL/node_modules',
//       '/home/javascript/Documents/node_modules',
//       '/home/javascript/node_modules',
//       '/home/node_modules',
//       '/node_modules'
//     ]
//   }
//   /home/javascript/Documents/JavaScriptXL/NOTE-NODE/notes.js
//   /home/javascript/Documents/JavaScriptXL/NOTE-NODE/node_modules

module.exports.age = 25;
module.exports.addNote = () => {
  console.log(`addNote`);
  return `Nowa notatka \n`;
};

module.exports.add = (a,b) =>{
    return a+b;
}
