/**
 * Created by yzini on 12/17/14.
 */
async=require("async");
function func (element,callback){
    callback(null,element+ "sds");
}
async.map(['aa','bb','cc'],func,function(err,results){
    console.log(results);
})


S=require("string");
console.log(S("/speakers/ellen_t_hoen".replace(/\//g," ")).humanize().s);


var cheerio = require('cheerio');
var   $ = cheerio.load("<HTML><body><div<span>hello world</span></div></body></HTML>");


res=$('body').find('*').contents()
    .filter(function() {
        return this.nodeType === 3; //Node.TEXT_NODE
    });

for(i=0;i<res.length;i++){
    console.log(res[i]);
}

var utils=require("../utils/utils.js");
console.log(utils.getXpathFromJQueryElement($,$("span")[0]));