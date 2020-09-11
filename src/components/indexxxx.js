
const fs = require('fs');

function importAll(r) {
    return r.keys().map(r);
}

const images20 = importAll(
    require.context("../images/2020/", false, /\.(png|jpe?g|svg|JPG)$/)
  );
console.log("dfdf");

// const images20JSON = JSON.stringify(images20);

// fs.writeFileSync('images20JSON.json', images20JSON);

// console.log(require)