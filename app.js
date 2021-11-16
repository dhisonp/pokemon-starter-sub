const fs = require("fs");
const { type } = require("os");
//Functions
const reformat = (types) => {
  let map = new Map();

  types.forEach((e) => {
    let id = e.name;
    let val = e.strengths;
    map.set(id, val);
  });

  return map;
};

const search = (types) => {
  let set = new Set();
  let flags = [];
  let count = 0;
  types.forEach((strength, type) => {
    let a = type;
    let b, c;
    strength.forEach((type_b) => {
      let strengths_b = types.get(type_b);
      strengths_b.forEach((type_c) => {
        let strengths_c = types.get(type_c);
        if (strengths_c.includes(a)) {
          let b = type_b;
          let c = type_c;
          // console.log(`Found: ${a} => ${b} => ${c}`);
          set.add([a, b, c]);
        } else {
        }
      });
    });
  });
  console.log("Found starter sub elements: ")
  console.log(set);
};

////Procedure
let types = JSON.parse(fs.readFileSync("types.json"));

types = reformat(types);
search(types);
// console.log(types);


////////////////////////////////////////////////////////////////////////////////////////////////
///// Notes ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//Stackoverflow link: https://stackoverflow.com/questions/69978723/created-a-script-to-output-possible-pokemon-starter-elements-alternatives-fire
//O(n^3) is the lowest complexity possible for the initial query.
//O(1) is possible by writing the found results into a file and reading it afterwards.
//Using the path data structure will simplify the code by a lot, but will retain the O(n^3) time complexity.
//To remove the duplicates, you are to write a function after the intitial query is output.

