const printDate= function(){
    let currentDate=new Date()
    console.log('The current date is : ',currentDate)
};
const printMonth=function (){

    let currentDate = new Date()
    console.log('The current months is : ', currentDate.getMonth() + 1)
};
const getBatchInfo=function(){
    console.log("uranium, W2 D4, the topic for today is Nodejs module system")

};


module.exports.date=printDate
module.exports.month=printMonth
module.exports.batch=getBatchInfo