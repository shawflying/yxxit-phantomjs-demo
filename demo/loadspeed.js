var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
}

t = Date.now();
// 读取控制台参数
address = system.args[1];
page.open(address, function(status) {
    if (status !== 'success') {
        console.log('FAIL to load the address');
    } else {
        t = Date.now() - t;
        console.log('Loading ' + system.args[1]);
        console.log('Loading time ' + t + ' msec');
    }
    phantom.exit();
});

//测试方法

//phantomjs loadspeed.js http://www.baidu.com
//phantomjs loadspeed.js http://m.sh.189.cn