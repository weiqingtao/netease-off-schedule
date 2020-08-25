# netease-off-schedule
网易云音乐定时关闭
由于下班走的匆忙，所以常常忘记关掉网易云音乐，导致歌曲放一晚上，不仅浪费电而且第二天一来电脑烫的要死，所以写了该定时程序，每天下午六点半定时关掉网易云

## 运行 
node programOff.js

pm2 守护进程的方式：
pm2 start programOff.js

设置开机启动：

pm2 startup

pm2 save
