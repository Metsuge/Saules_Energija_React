// // export const S202011 = require('./2020/1-1.jpg');
// // export const S202012 = require('./2020/1-2.jpg');
// // export const S202013 = require('./2020/1-3.jpg');
// // export const S202014 = require('./2020/1-4.jpg');

// // export const S202021 = require('./2020/2-1.jpg');
// // export const S202022 = require('./2020/2-2.jpg');
// // export const S202023 = require('./2020/2-3.jpg');
// // export const S202024 = require('./2020/2-4.jpg');


// const testFolder = './2020/';
// const fs = require('fs');
// const path = require('path');
// const files = fs.readdirSync(testFolder);
// const allowedExts = ['.png', '.jpg', 'svg'] // add any extensions you need

// const modules = {};

// if (files.length) {
//   let filterThruFiles = files.filter(file => allowedExts.indexOf(path.extname(file)) > -1) //visi failai in current directory

//   filterThruFiles.forEach(file => modules[file] = `../images/2020/${file}`);


// }

// module.exports = modules;
// console.log(modules);

// let modulesStringify = JSON.stringify(modules);
// fs.writeFileSync('pics-url-list.json', modulesStringify);
