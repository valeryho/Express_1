var btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click",GetData);
var data = [];

function GetData(){
    var key = document.querySelector(".paje_key").value;
    var title = document.querySelector(".inp_title").value;
    var header = document.querySelector(".inp_Header").value;
    var content = document.querySelector(".inp_content").value;
    var footer = document.querySelector(".inp_footer").value;

    // var t=(`{"key":${key},"title":${title},"header":${header},"content":${content},"footer":${footer}`);     
    // console.log(t);
    // console.log(JSON.parse(t));
    
    data.push({key:key,title:title,header:header,content:content,footer:footer});

    console.log(data);
    console.log(JSON.stringify(data));

}