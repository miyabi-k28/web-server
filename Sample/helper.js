var fs = require('fs');

const person = {
  name:"Motoki",
  age:18,
};

const read = function (){
  fs.readFile("./sample.json","utf-8",function(err, data){
    const person = JSON.parse(data);
    console.log(person.age);
});
}

const write = function(){
  fs.writeFile("sample.json", JSON.stringify(person), function () {
    console.log("書き込み完了");
});
}

module.exports = {
  read: read,
  write: write,
};
