const express = require('express')
const path = require("path");
const app = express();

//console.log(__dirname);

app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")))


//app.get('/', function (req, res) {
//  res.send('<h1>トップページ</h1>')
//});

app.post("/api/v1/quiz", function (req, res) {
    const answer = req.body.answer;
    if(answer ==="2"){
        //res.send("正解!");
        res.redirect("/correct.html");
    }
    else{
        res.redirect("/wrong.html");
        //res.send("失敗");
    }
  });

app.get('/about', function (req, res) {
    //console.log(req);
    res.send('Aboutページ')
  });

  app.get('/Motoki', function (req, res) {
    //console.log(req);
    res.send('I love you!')
  });

app.listen(3000, function(){
    console.log("I am running");
});
