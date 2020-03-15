
$(document).ready(function(){
    // 基于准备好的dom，初始化echarts实例


    //中国地图开始
    var china_map =echarts.init(document.getElementById("china_map"),'infographic');

        mydata2={
            '北京': 1,
            '天津': 1,
            '河北': 1,
            '山西': 1,
            '内蒙古': 1,
            '辽宁': 1,
            '吉林': 1,
            '黑龙江': 1,
            '上海': 1,
            '江苏': 1,
            '浙江': 1,
            '安徽': 1,
            '福建': 1,
            '江西': 1,
            '山东': 1,
            '河南': 1,
            '湖北': 1,
            '湖南': 1,
            '广东': 1,
            '广西': 1,
            '海南': 1,
            '重庆': 541,
            '四川': 1,
            '贵州': 1354,
            '云南': 1,
            '西藏': 72,
            '陕西': 1,
            '甘肃': 1,
            '青海': 1,
            '宁夏': 1,
            '新疆': 1
        }
        mydata =[{"name":"北京","value":1},{"name":"天津","value":1},{"name":"河北","value":1},
            {"name":"山西","value":1},{"name":"内蒙古","value":1},{"name":"辽宁","value":1},
            {"name":"吉林","value":1},{"name":"黑龙江","value":1},{"name":"上海","value":604},
            {"name":"江苏","value":1},{"name":"浙江","value":1},{"name":"安徽","value":1},
            {"name":"福建","value":1},{"name":"江西","value":1},{"name":"山东","value":1},
            {"name":"河南","value":1},{"name":"湖北","value":1},{"name":"湖南","value":1},
            {"name":"西藏","value":72},{"name":"广西","value":1},{"name":"广东","value":1},
            {"name":"海南","value":237},{"name":"重庆","value":541},{"name":"四川","value":1},
            {"name":"贵州","value":1},{"name":"云南","value":1316},{"name":"陕西","value":31},
            {"name":"甘肃","value":1},{"name":"青海","value":517},{"name":"宁夏","value":1},
            {"name":"新疆","value":1}];

    // 基于准备好的dom，初始化echarts实例

    option = {
        title: {
            x: "left",
            text: '省份分布',
            textStyle: {
                fontSize: 14
                , fontWeight: 'normal'
                , color: '#D2EDFF'
            }
            , left: 20
            , top: 10
        },
        tooltip: {
            trigger: 'item'
            , formatter: '{b}<br>参与人数：{c}'
        },
        visualMap: {
            min: 0,
            max: 2500,
            left: 20,
            bottom: 10,
            text: ['高', '低'],// 文本，默认为数值文本
            color: ['#20a0ff', '#D2EDFF'],
            calculable: false
        },
        series: [
            {
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true, //显示省份标签
                        textStyle: {
                            color: "white"
                        } //省份标签字体颜色

                    },
                    emphasis: { //对应的鼠标悬浮效果
                        show: false,
                        textStyle: {
                            color: "#800080"
                        }
                    }
                },
                data:mydata
            }]
    };
    //为echarts对象加载数据
    china_map.setOption(option);
    var getting = {
        url : "../data/people.json", //后台查询验证的方法
        dataTpye : "json",
        data : {
        },
        type : "get",
        success : function(msg) {

            //获取数据
            var d=msg.people;


            // fetchData(function (data11) {
            china_map.setOption({
                series: [{
                    data:d
                },
                ]
            });

            // 使用刚指定的配置项和数据显示图表。

        },
        error:function(){  //请求失败的回调方法
            alert("请求失败，请重试");
        }
    };


    window.setInterval(function(){$.ajax(getting)},1000);   //每三秒调用一次ajax


    china_map.setOption(option);
    //中国地图结束
    /*****************/

    //各个门进入人数饼图
    var pie_fanzui =echarts.init(document.getElementById("pie_fanzui"),'infographic');
    option = {
        title : {
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['A门','B门','C门','D门'],
            textStyle: {color: '#fff'}
        },

        label: {
            normal: {
                textStyle: {
                    color: 'red'  // 改变标示文字的颜色
                }
            }
        },
        series : [
            {
                name: '各个门进入人数',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[{"name":"A门","value":1},{"name":"B门","value":1},
                    {"name":"C门","value":1},{"name":"D门","value":1}
                ],

                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,

                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }
        ]
    };
    //为echarts对象加载数据
    pie_fanzui.setOption(option);
    var getting2 = {
        url : "../data/door.json", //后台查询验证的方法
        dataTpye : "json",
        data : {
        },
        type : "get",
        success : function(msg) {

            //获取数据
            var d=msg.door;


            // fetchData(function (data11) {
            pie_fanzui.setOption({
                series: [{
                    data:d
                },
                ]
            });

            // 使用刚指定的配置项和数据显示图表。

        },
        error:function(){  //请求失败的回调方法
            alert("请求失败，请重试");
        }
    };


    window.setInterval(function(){$.ajax(getting2)},3000);   //每三秒调用一次ajax
    pie_fanzui.setOption(option);
    //各个门进入人数饼图结束



    //===================人口出入时间段统计=======================

    var line_time =echarts.init(document.getElementById("line_time"),'macarons');
    var mydata3={"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"09":1,"":11}
    var option = {
        // 给echarts图设置背景色
        //backgroundColor: '#FBFBFB',  // -----------> // 给echarts图设置背景色
        color: ['#7FFF00'],
        tooltip: {
            trigger: 'axis'
        },

        grid:{
            x:60,
            y:30,
            x2:5,
            y2:20

        },
        calculable: true,


        xAxis: [{
            type: 'category',
            data: ['9号', '10号', '11号', '12号', '13号','14号','15号','16号','17号'],
            axisLabel: {
                color: "#7FFF00", //刻度线标签颜色
                interval:0
            }
        }],
        yAxis: [{

            type: 'value',
            axisLabel: {
                color: "#7FFF00" //刻度线标签颜色
            }
        }],
        series: [{
            name: '人次',
            type: 'line',
            data: [mydata3['09'], mydata3['10'],mydata3['11'],mydata3['12'],mydata3['13'],mydata3['14'],mydata3['15'],
                mydata3['16'],mydata3['17']],

        }]
    };

    //为echarts对象加载数据
    line_time.setOption(option);
    var getting3 = {
        url : "../data/day.json", //后台查询验证的方法
        dataTpye : "json",
        data : {
        },
        type : "get",
        success : function(msg) {

            //获取数据
            var mydata3=msg;


            // fetchData(function (data11) {
            line_time.setOption({
                series: [{
                    data:[mydata3['09'], mydata3['10'],mydata3['11'],mydata3['12'],mydata3['13'],mydata3['14'],mydata3['15'],
                        mydata3['16'],mydata3['17']],
                },
                ]
            });

            // 使用刚指定的配置项和数据显示图表。

        },
        error:function(){  //请求失败的回调方法
            alert("请求失败，请重试");
        }
    };


    window.setInterval(function(){$.ajax(getting3)},3000);   //每三秒调用一次ajax


    //=========参会最多六个地区分布开始=======================
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

    var data3 = objsortbyval(mydata2)
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
    //=========参会最多六个地区分布开始=======================

});