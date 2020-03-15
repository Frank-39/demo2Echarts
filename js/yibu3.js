$(document).ready(function(){
    // 基于准备好的dom，初始化echarts实例




    var qufenbu_data =echarts.init(document.getElementById("qufenbu_data"),'infographic');
    option = {
        color: ['#FADB71'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            x:45,
            y:10,
            x2:15,
            y2:20
        },
        xAxis : [
            {
                type : 'category',
                data : [data4[0], data4[1], data4[2], data4[3], data4[4], data4[5]],
                //data:['河北', '天津', '北京', '新疆', '内蒙', '宁夏', '海南'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "#FADB71" ,//刻度线标签颜色
                    interval:0
                },

            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    color: "#FADB71" //刻度线标签颜色
                }
            }
        ],
        series : [
            {
                name:'地区分布',
                type:'bar',
                barWidth: '40%',
                data:[data5[0],data5[1],data5[2],data5[3],data5[4],data5[5]]
                //data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };

    qufenbu_data.setOption(option);
    //为echarts对象加载数据
    //objsortbyvcal方法作用：把对象按照键值排序（从大到小） 返回对象
    function objsortbyval(obj) {
        var keyArr = [],valArr = [];
        for (var key in obj) {
            keyArr.push(key);
            valArr.push(obj[key]);
        }
        for (var i = 0, len = valArr.length; i < len; i++) {
            for (var j = 0; j < len - i; j++) {
                var keyTemp, valTemp;
                if (valArr[j] < valArr[j + 1]) {
                    valTemp = valArr[j];
                    valArr[j] = valArr[j + 1];
                    valArr[j+1] = valTemp;
                    keyTemp = keyArr[j];
                    keyArr[j] = keyArr[j + 1];
                    keyArr[j+1] = keyTemp;
                }
            }
        }
        var newobj={};
        for(var i=0;i<valArr.length;i++){
            newobj[keyArr[i]]=valArr[i];
        }
        return(newobj);
    }


    var getting5 = {
        url : "../data/people2.json", //后台查询验证的方法
        dataTpye : "json",
        data : {
        },
        type : "get",
        success : function(msg) {
            //获取数据
            var mydata3=msg;
            var data3 = objsortbyval(mydata3)
            //设置数组
            var data4=[];
            var data5=[];
            count=0;
            //收集前六个元素
            for(var value in data3){
                if(count<=5) {
                    data4.push(value);
                    data5.push(data3[value])
                    count+=1;
                }
            }

            qufenbu_data.setOption({

                xAxis : [
                    {
                        type : 'category',
                        data : [data4[0], data4[1], data4[2], data4[3], data4[4], data4[5]],
                        //data:['河北', '天津', '北京', '新疆', '内蒙', '宁夏', '海南'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            color: "#FADB71" ,//刻度线标签颜色
                            interval:0
                        },

                    }
                ],
                series : [
                    {
                        name:'地区分布',
                        type:'bar',
                        barWidth: '40%',
                        data:[data5[0],data5[1],data5[2],data5[3],data5[4],data5[5]]
                        //data:[10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            })

            // 使用刚指定的配置项和数据显示图表。

        },
        error:function(){  //请求失败的回调方法
            alert("请求失败，请重试");
        }
    };


    window.setInterval(function(){$.ajax(getting5)},3000);   //每三秒调用一次ajax


});
