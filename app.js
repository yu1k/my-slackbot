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
            console.log("hoge");
        });
    }

    //関数をmain関数にまとめる
    function main(){
        timeTest();
        postNotice();
    }

    main();
};