/**
 * Created by mohammad on 2/25/2017.
 */
var express=require('express');
var app=express();


app.use(express.static(__dirname + "/static")) ;

app.get("/",function (req,resp,next) {
    console.log("get");
    resp.end("<h1>salam</h1>");
})
app.post("/",function (req, resp, next) {
   console.log(req);
    resp.end(req.toString());
});

app.listen(8080);
console.log("server listening in port 8080");