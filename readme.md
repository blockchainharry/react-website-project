
var theMoment ={
"_id": "1004",
"Definition": "need definition",
"Examples": "need examples",
"Apps_like": "need apps",
"Monthly_Moments": 28,
"Symbol": "Srt",
"Moment_Name": "Secret",
"Category": "Games, Sports & Entertainment",
"className": "moment-games",
"Id": 1004
};
colId = '16'
//Moments.insert(theMoment)
MomentColumns.update({'_id':colId},{$set:{'elements':[]}})
symbols = ['Bem','Cfm','Cpm','Ezm','Pfm','Srt','Bam','Gom','Scm','Vim']


theRow = 11
_.each(symbols,function(symbol){
var theMoment = Moments.findOne({'Symbol':symbol});
if(theMoment){
console.log(symbol,theMoment.Symbol)
}else{
return true
}


theRow = theRow-1
theMoment.row = theRow
console.log(theRow)
console.log(theMoment)

MomentColumns.update({'_id':colId},{$addToSet:{'elements':theMoment}})
})



