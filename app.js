var express=require('express')

var app = express()

app.use(express.static('./'))
app.get('/',function (req,res) {

})

var schedule = require('node-schedule');



scheduleCronstyle();

//完成数据库的读入，与文件的读写

var fs = require('fs')
var mysql = require('mysql');

//   1.创建连接数据库
var connection = mysql.createConnection({
    host:'62.234.68.226',
    user:'bjut',
    password:'password',
    database:'ticketsdata'
});
//2.连接数据库
connection.connect();
//3.执行数据操作
data={}
data2={}

data3={}
function scheduleCronstyle(){
    schedule.scheduleJob('*/10 * * * * *', function(){
        connection.query('select fticketno from ticket ',function(error,results,field){
            if(error) throw error;
            // console.log(results[0])
            //where funiqueid< 576579499559374149
            data={}
            data2={}
            data3={}
            for(var i=0;i<results.length;i++){
                //var str1 = results[i].fticketno.toJSONString();
                if(results[i].fticketno.length ==18 ){
                    var str = results[i].fticketno.substr(0,2)
                }else {
                    str = "异常值"
                }
                if (data[str] === undefined){
                    data[str] = 1
                } else{
                    data[str] += 1
                }
            }
            //console.log(data);
            data2['北京']=data['11'];
            data2['天津']=data['12'];
            data2['河北']=data['13'];
            data2['山西']=data['14'];
            data2['内蒙古']=data['15'];
            data2['辽宁']=data['21'];
            data2['吉林']=data['22']
            data2['黑龙江']=data['23'];
            data2['上海']=data['31'];
            data2['江苏']=data['32'];
            data2['浙江']=data['33'];
            data2['安徽']=data['34'];
            data2['福建']=data['35'];
            data2['江西']=data['36'];
            data2['山东'] =data['37'];
            data2['河南']=data['41'] ;
            data2['湖北']=data['42'];
            data2['湖南']=data['43'] ;
            data2['广东']=data['44'] ;
            data2['广西']=data['45'];
            data2['海南' ]=data['46'];
            data2['重庆' ]=data['50'];
            data2['四川']=data['51'] ;
            data2['贵州']=data['52'] ;
            data2['云南']=data['53'];
            data2['西藏']=data['54'];
            data2['陕西']=data['61'];
            data2['甘肃']=data['62'];
            data2['青海']=data['63'];
            data2['宁夏']=data['64'];
            data2['新疆']=data['65'];
            // console.log(data.length);
            //console.log(data2);
            var data3 = {people:[
                    {name:'北京',value:data2['北京']},
                    {name:'天津',value:data2['天津']},
                    {name:'河北',value:data2['河北']},
                    {name:'山西',value:data2['山西']},
                    {name:'内蒙古',value:data2['内蒙古']},
                    {name:'辽宁',value:data2['辽宁']},
                    {name:'吉林',value:data2['吉林']},
                    {name:'黑龙江',value:data2['黑龙江']},
                    {name:'上海',value:data2['上海']},
                    {name:'江苏',value:data2['江苏']},
                    {name:'浙江',value:data2['浙江']},
                    {name:'安徽',value:data2['安徽']},
                    {name:'福建',value:data2['福建']},
                    {name:'江西',value:data2['江西']},
                    {name:'山东',value:data2['山东']},
                    {name:'河南',value:data2['河南']},
                    {name:'湖北',value:data2['湖北']},
                    {name:'湖南',value:data2['湖南']},
                    {name:'西藏',value:data2['西藏']},
                    {name:'广西',value:data2['广西']},
                    {name:'广东',value:data2['广东']},
                    {name:'海南',value:data2['海南']},
                    {name:'重庆',value:data2['重庆']},
                    {name:'四川',value:data2['四川']},
                    {name:'贵州',value:data2['贵州']},
                    {name:'云南',value:data2['云南']},
                    {name:'陕西',value:data2['陕西']},
                    {name:'甘肃',value:data2['甘肃']},
                    {name:'青海',value:data2['青海']},
                    {name:'宁夏',value:data2['宁夏']},
                    {name:'新疆',value:data2['新疆']},
                ]}
            fs.writeFile('./data/people.json',JSON.stringify(data3), function (error) {
                // console.log('文件写入成功')
                // console.log(error)
                if (error) {
                    console.log('写入失败')
                } else {
                    console.log('写入成功了')
                }
            })
            fs.writeFile('./data/people2.json',JSON.stringify(data2), function (error) {
                // console.log('文件写入成功')
                // console.log(error)
                if (error) {
                    console.log('写入失败')
                } else {
                    console.log('写入成功了')
                }
            })

        });
        connection.query('select fdoorid from ticket ',function(error,results,field){
            if(error) throw error;
            //console.log(results[0].fdoorid)
            // console.log(results[0])
            //where funiqueid< 576579499559374149



                var data={};
                for(var i=0;i<results.length;i++){
                    //var str1 = results[i].fticketno.toJSONString();
                    var str = results[i].fdoorid;
                    if (data[str] === undefined){
                        data[str] = 1
                    } else{
                        data[str] += 1
                    }
                }
                //console.log(data);

            var data2 = {"door":
                    [{name:"A门",value:data["11"]},
                    {name:'B门',value:data["21"]},
                    {name:'C门',value:data["51"]},
                    {name:'D门',value:data["61"]},
                    ]};
            //console.log(data2)
            fs.writeFile('./data/door.json',JSON.stringify(data2), function (error) {
                // console.log('文件写入成功')
                // console.log(error)
                if (error) {
                    console.log('写入失败')
                } else {
                    console.log('写入成功了')
                }
            })

        });
        connection.query('select fpasstime from ticket ',function(error,results,field){
            if(error) throw error;
            var data={"09":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0};
            for(var i=0;i<results.length;i++){
                //var str1 = results[i].fticketno.toJSONString();
                var str = results[i].fpasstime;
                str=JSON.stringify(str);
                //console.log(str);
                str=str.substr(9,2);
                if (data[str] === undefined){
                    data[str] = 1
                } else{
                    data[str] += 1
                }
            }
            //console.log(data);
            // dataStr=JSON.stringify(a)

            fs.writeFile('./data/day.json',JSON.stringify(data), function (error) {
                // console.log('文件写入成功')
                // console.log(error)
                if (error) {
                    console.log('写入失败')
                } else {
                    console.log('写入成功了')
                }
            })

        });
    });
}

//4.关闭连接
// connection.end();
app.listen(3000,function () {
    console.log('express app is running')
})
