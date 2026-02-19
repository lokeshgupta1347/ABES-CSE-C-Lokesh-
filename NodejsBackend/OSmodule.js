const os=require('os');
console.log("platform",os.platform());
console.log("userinfo",os.userInfo());

console.log("free memory",os.freemem());
console.log("total mem",os.totalmem());
console.log("uptime",os.uptime());
console.log("home dir",os.homedir());
console.log("host name",os.hostname());
console.log("CPU",os.arch());
