
/*
 * GET home page.
 */
var utils =require("./infra/utils.js");
var logger=utils.startLogger("Index");
var mongoCon=require("./infra/mongoConnections.js");



exports.index = function(req, res){

    mongoCon.connectrssDataDB(function(err,conn){
        conn.aggregate(
            [
                { $unwind : "$Items" },
                { $group : { _id : "$Industry", number : { $sum : 1 } } },
                { $sort : { number : -1 } }
            ],function(err,arrIndustries){
                if (err){
                    res.send("Error in page " + err);
                } else if (arrIndustries){
                    var arrayIndustriesHrefs=new Array();

                        for (var i=0;i<arrIndustries.length;i++){
                        arrayIndustriesHrefs.push({link:"/getIndustryInsight?industry=" + encodeURIComponent(arrIndustries[i]._id),text:arrIndustries[i]._id,count:arrIndustries[i].number})
                    }

                    res.render('index', { title: 'Industry News ' + arrayIndustriesHrefs.length  + " industries",links:arrayIndustriesHrefs });
                }
            }
        );
    });

};