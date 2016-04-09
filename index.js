var ejs = require('ejs');
var json = require('./cah.json');
var fs = require('fs');
var template = fs.readFileSync('./view/template.ejs', 'utf8');
var out = [];

for(var i=0; i<json.blackCards.length; i++){
    var whites = []
    for(var j=0; j<json.blackCards[i].pick; j++) {
        console.log(j)
        whites.push(json.whiteCards[Math.floor(Math.random()*json.whiteCards.length)]);
    }
    var chosenblack = json.blackCards[i].text.replace(/_/g, '<span class="underscore">____________</span>');
    fs.writeFile("./out/" + i + ".html", ejs.render(template, {itteration: i, blackcard: chosenblack, whites: whites, errorcode: 404, errorstring: "Page not found!", }), function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}
console.log("Done")