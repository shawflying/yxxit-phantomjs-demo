var page = require('webpage').create();
page.open('http://m.sh.189.cn', function() {
    page.includeJs("http://cdn.bootcss.com/jquery/3.2.0/jquery.min.js", function() {
        page.evaluate(function() {
            $("a").click(function() {
                console.log("app:" + $("title"));
                console.log($("a").attr('href'))
            });
            console.log("app:" + $("title"));
            console.log($("a").attr('href'))
        });
        phantom.exit()
    });
});