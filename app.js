const fs = require("fs");
const { type } = require("os");
//Functions
const reformat = (types) => {
  let map = new Map();

  types.forEach((e) => {
    let id = e.name;
    let val = [e.strengths];
    map.set(id, val);
  });

  return map;
};

const search = (types) => {
  let set = new Set();;
  let flags = [];
  let count = 0;
  types.forEach((strength, type) => {
    // console.log(`1: ${type}: ${strength}`);
    let a = type;
    let b, c;
    strength[0].forEach((type_b) => {
      let strengths_b = types.get(type_b);
      //   console.log("2: " + strengths_b);
      strengths_b[0].forEach((type_c) => {
        let strengths_c = types.get(type_c);
        // console.log("3: " + strengths_c);
        if (strengths_c[0].includes(a)) {
          let b = type_b;
          let c = type_c;
        //   console.log(`Found: ${a} => ${b} => ${c}`);
          set.add([a, b, c]);
        } else {
        }
      });
    });
  });
    console.log(set);
};

//Procedure
let types = JSON.parse(fs.readFileSync("types.json"));

types = reformat(types);
search(types);
// console.log(types);
