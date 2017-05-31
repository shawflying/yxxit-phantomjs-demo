// 接受漫画网页地址

var page = require('webpage').create(),
    system = require('system');
var url = system.args[1];
page.open(url, function(status) {
    if (status === "success") {
        console.log(page.title);
        // 处理页面
        var pic_url = page.evaluate(function() {
            // DOM操作
            //return document.getElementsByTagName('image').getAttribute('src');
            return document.getElementsByClassName('m-img').getAttribute('href');
        });
        console.log(pic_url);
    } else {
        console.log('failed');
    }
    phantom.exit();
});

//执行：phantomjs get_pic_url.js http://www.dm5.com/m5342-p2/

//phantomjs get_pic_url.js http://m.sh.189.cn/html/more/index.html