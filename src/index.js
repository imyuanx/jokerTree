import a from "./a";
import parse from "./parse";
import patch from "./patch";
import "./style.css";

let container = document.getElementById("app");
let data = `{"a":"1","b":2,"c":{"d":[true]}}`;
try {
    data = parse(data);
} catch {
    console.error("JSON string format error");
}

let astTree = a(data, "", "");
console.log(astTree);
patch(container, astTree);