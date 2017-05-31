var page = require('webpage').create();
var moment = require("moment");
phantom.outputEncoding = "utf-8";
page.open("http://m.sh.189.cn/", function(status) {
    if (status === "success") {
        console.log(page.title);
        // 如果状态为success，将整个page保存为hfly.jpg（也可以是png，pdf, gif）
        page.render('img/wechat-mobile-' + moment().format("YYYYMMDD") + '.jpg');
    } else {
        console.log("Page failed to load.");
    }
    phantom.exit(0);
});