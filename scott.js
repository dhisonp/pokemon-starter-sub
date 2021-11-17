const paths = (types, length, children = Object.keys(types)) =>
  length <= 1
    ? children.map((s) => [s])
    : children.flatMap((s) =>
        paths(types, length - 1, types[s]).map((p) => [s, ...p])
      );

const dedupe =
  (fn) =>
  (xs, res = new Set()) =>
    xs.filter(
      (x, _, __, key = fn(x), dup = res.has(key)) => (res.add(key), !dup)
    );

const search = (
  ts,
  types = Object.fromEntries(ts.map((t) => [t.name, t.strengths]))
) =>
  dedupe((s) => [...s].sort().join("|"))(
    paths(types, 3).filter((s) => types[s[s.length - 1]].includes(s[0]))
  );

//Procedure
const fs = require("fs");
let types = JSON.parse(fs.readFileSync("types.json"));
console.log(search(types));
