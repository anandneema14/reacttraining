var express=require('express');
var app=express();
app.use(express.static('Public'));
app.listen(2000,function(){
console.log('server is Started');
});