import a from "./a";
import parse from "./parse";
import patch from "./patch";
let container = document.getElementById("app");
try {
    let data = `{"a":"1","b":2,"c":{"d":[true]}}`;
    data = parse(data);
    let astTree = a(data, "", "");
    console.log(astTree);
    patch(container, astTree);
}catch{
    console.error("JSON string format error");
}