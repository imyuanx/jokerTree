import a from "./a";
import patch from "./patch";
let container = document.getElementById("app");

let data = `{"a":1,"b":{"c":2,"d":[3,"4",{"e":"5","f":[],"g":{}}]}}`;
data = JSON.parse(data);
let astTree = a(0, "", data);
console.log(astTree);

astTree.value.map((item)=>{
    
});

// patch(container, vNode);