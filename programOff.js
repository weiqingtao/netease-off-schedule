const shell = require('shelljs');
const fs = require('fs');
const schedule = require('node-schedule');
console.log("program is starting!!程序会在每天下午六点定时关闭![Yeah!]");
const time = '0 00 18 * * ?' //每天下午六点执行一次
schedule.scheduleJob(time, function () {
    const version = shell.exec('ps aux | grep NeteaseMusic', { silent: true }).stdout; //获取程序运行信息
    fs.writeFileSync('message.txt', version); //把运行信息写入文件
    const message = shell.exec('head -1 message.txt | tail -1', { silent: true }).stdout; //获取文件第一行
    const port = message.split(" ")[7];
    shell.exec(`kill ${port}`, { silent: true }).stdout; //获取程序运行信息
    fs.unlinkSync("./message.txt")
    console.log('Netease Music is killed');
});