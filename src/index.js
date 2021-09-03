import h from "./h.js";

let data = `{"a":1,"b":{"c":2,"d":[3,"4",{"e":"5","f":[],"g":{}}]}}`;
data = JSON.parse(data);
console.log(h(0, "", data));