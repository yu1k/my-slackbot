"use strict";

const cron = require("node-cron");

const apiToken = "xxxxxxxxxxx";

module.exports = (robot) => {
    //Node cronのテスト用
    function timeTest(){
        //秒 分 時　日 月　曜日
        cron.schedule("50 49 23 23 June *", () => {
            console.log("hoge");
        });
    }

    function postNotice(){
        cron.schedule("* * * * * *", () => {
            msg.send(`hoge`);
            //console.log("hoge");
        });
    }

    //天気予報を教えてくれる機能
    //まだ動くかテストしてないです
    var location = ""; //受け取った文字を入れておく変数

    function weatherForecastPost(){
        robot.hear(/の天気予報を教えて/, msg => { //メッセージ読み込みの形式 : osakaの天気予報を教えて //受け取った文字列
        location = msg.massage;
        if(!location){
            return;
        }
        var result = location.slice(0, -9); //"の天気予報を教えて"という部分を削除
        msg.send(`https://wttr.in/` + `<${result}>`);
        //console.log("https://wttr.in/" + location);
        });
    }

    //help機能
    function help(){
        //受け取ったメッセージ
        robot.hear(/botHelp>/i, response => {
            //!helpなど
            if(!("botHelp>")){
                return;
            }
            response.send(
                "このbotは の生活の助けをしてくれるbotです。" + "\n",
                " 以外の人にはあまり役に立たないかもしれないので使わないことを推奨します。" + "\n",
                "地名+の天気予報を教えて 、というとその地名の天気予報を教えてくれます。" + "\n",
                "また、朝9時,お昼12時30分,午後4時,午後10時に時間を教えてくれます。"
            );
            //console.log("使い方");
        });
    }

    //関数をmain関数にまとめる
    function main(){
        timeTest();
        postNotice();
        weatherForecastPost();
        help();
    }

    main();
};