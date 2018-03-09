gopro所有的指令都可以在gpcontrol.json这个文件中找到

[http://10.5.5.9]()
**github 地址**

>https://github.com/KonradIT/goprowifihack

支持机型：2,3,4，+，5,6

API举例

1. 机器信息获取：    
> [http://10.5.5.9/gp/gpControl/info]()  

    可以获得如：机器型号，固件版本，序列号，MAC地址，无线SSID名字等信息
    
2. 一些相关服务：    
    * 开启直播 [http://10.5.5.9/gp/gpControl/execute?p1=gpStream&a1=proto_v2&c1=restart]()
    * 关闭直播  [http://10.5.5.9/gp/gpControl/execute?p1=gpStream&c1=stop]()
    * 得到媒体列表    [http://10.5.5.9/gp/gpMediaList]()


            {
                "id":"166311172181278223",
                "media":[
                    {
                        "d":"100GOPRO",
                        "fs":[
                            {
                                "n":"GOPR0563.MP4",
                                "mod":"1519943800",
                                "ls":"3879266",
                                "s":"157899442"
                            },
                            {
                                "n":"GOPR0564.MP4",
                                "mod":"1519948932",
                                "ls":"416520",
                                "s":"11102812"
                            },
                            {
                                "n":"G0010565.JPG",
                                "g":"1",
                                "b":"565",
                                "l":"574",
                                "mod":"1519949096",
                                "s":"22980959",
                                "t":"b",
                                "m":[
            
                                ]
                            }   
                        ]
                    }
                ]
            }        
            
3. 相机配置信息： [http://10.5.5.9/gp/gpControl/status]()
   >{"status":{
    "1":1,"2":3,"3":0,"4":0,"6":0,"8":0,"9":0,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0,"17":1,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"26":0,"27":0,"28":0,"29":"","30":"MofangGo","31":0,"32":0,"33":0,"34":3753,"35":4140,"36":0,"37":0,"38":10,"39":18,"40":"%12%03%0A%00%03%23","41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"54":13468762112,"55":1,"56":4,"57":299320,"58":0,"59":0,"60":500,"61":2,"62":0,"63":0,"64":1876},
    "settings":{"1":0,"2":9,"3":6,"4":0,"5":0,"6":1,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":4,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":3,"30":0,"31":0,"32":10,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"49":100,"50":0,"51":3,"52":1,"53":0,"54":1,"55":0,"56":2,"57":1,"58":0,"59":0,"60":8,"61":1,"62":700000,"63":4,"64":2,"68":0,"69":0,"70":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0}}
    
    包含status 和 setting对于
    #### status 已知
   
        1 - Internal Battery is available:
            0 = No Battery
            1 = Battery is available
        2 - Internal Battery Level:
            3 = Full
            2 = Halfway
            1 = Low
            4 = Charging
        43 - Current Mode:
            Video - 0
            Photo - 1
            MultiShot - 2
        44 - Current SubMode
            0 = Video/Single Pic/Burst
            1 = TimeLapse
            3 = Looping
        13 - Current Recording Video Duration
        39 - Number of MultiShot pictures taken
        31 - Number of clients connected to the camera
        32 - Streaming feed status:
            0 = Not Streaming
            1 = Streaming
        33 - SD card inserted:
            0 = SD card inserted
            2 = No SD Card present
        34 - Remaining Photos
        35 - Remaining Video Time
        36 - Number of Batch Photos taken (Example: TimeLapse batches, burst batches, continouous photo batches...)
        37 - Number of videos shot
        38 - Number of ALL photos taken
        39 - Number of ALL videos taken
        8 = Recording/Processing status:
            0 = Not recording/Processing
            1 = Recording/processing
            
    #### setting 已知
 ***
        Video Mode based parameters:
                Current SUB-Mode Video - 68
                    Video - 0
                    Looping - 3
                Video Resolution - 2:
                    1080 - 9
                    720 SuperView - 11
                    720 - 12
                Frame Rate - 3:
                    60 - 5
                    50 - 6
                    30 - 8
                    25 - 9
                FOV video - 4:
                    Wide - 0
                Looping Video Interval - 6:
                    Max - 0
                    5 Minutes - 1
                    20 Minutes - 2
                    60 Minutes - 3
                    120 Minutes - 4
                Low Light - 8:
                    ON - 1
                    OFF - 0
                Spot Meter - 9:  点测光
                    ON - 1
                    OFF - 0
        
        
  * * *        
 
        Photo Mode based parameters:
                Photo Sub Mode - 69:
                    Single - 0
                Megapixels - 17:
                    8MP Wide - 0
                Spot Meter - 20:
                    ON - 1
                    OFF - 0
        
        
  * * *        
    
        MultiShot Mode based parameters:
                Default Multi-Shot Sub Mode - 27:
                    Burst - 0
                    Time Lapse - 1
                Multi-Shot Sub Mode - 70:
                    Burst - 0
                    Time Lapse - 1
                Burst Rate - 29:
                    10 Photos / 2 Seconds - 3
                TimeLapse Interval - 30:
                    1 Photo / 0.5 Sec - 0
                    1 Photo / 1 Sec - 1
                    1 Photo / 2 Sec - 2
                    1 Photo / 5 Sec - 5
                    1 Photo / 10 Sec - 10
                    1 Photo / 30 Sec - 30
                    1 Photo / 60 Sec - 60
                Megapixels - 28:
                    8MP Wide - 0
                Spot Meter - 33:
                    ON - 1
                    OFF - 0
        
        
* * *        
        Other Settings:
                Orientation - 52:
                    Auto - 0
                    UP - 1
                    DOWN - 2
                Default Boot Mode - 53:
                    Video - 0
                    Photo - 1
                    MultiShot - 2
                Quick Capture - 54:
                    OFF - 0
                    ON - 1
                LED status - 55:
                    OFF - 0
                    Back LED - 1
                    Front LED - 2
                    Both LEDs - 3
                Volume for beeps - 56:
                    Mute - 2
                    70% - 1
                    100% - 0
                Video Format - 57:
                    NTSC - 0
                    PAL - 1
                LCD Display - 72: (HERO+ LCD)
                
                    ON - 1
                    OFF - 0
                
                LCD Brightness - 49: (HERO+ LCD)
                    High - 0
                    Medium - 1
                    Low - 2
                LCD Lock - 50: (HERO+ LCD)
                    On - 1
                    Off - 0
                LCD Timeout sleep - 51: (HERO+ LCD)
                    Never sleep - 0
                    1min sleep - 1
                    2min sleep - 2
                    3min sleep - 3
                    
                    
## 更新设置举例 + 控制命令举例

#### setting 方式 ： 
>[http://10.5.5.9/gp/gpControl/]() + setting + /number/value

例如： 设置1080P
>1080p: http://10.5.5.9/gp/gpControl/setting/2/9 
     
        2:      Video Resolution
        9       1080
        
举例：
            
            Default Boot Mode: 默认启动模式
                Video: http://10.5.5.9/gp/gpControl/setting/53/0
                Photo: http://10.5.5.9/gp/gpControl/setting/53/1
                MultiShot: http://10.5.5.9/gp/gpControl/setting/53/2
* * *                 
            视频
                Resolutions: 画质
                    4K: http://10.5.5.9/gp/gpControl/setting/2/1
                    4K SuperView: http://10.5.5.9/gp/gpControl/setting/2/2
                    2.7K: http://10.5.5.9/gp/gpControl/setting/2/4
                    2.7K SuperView: http://10.5.5.9/gp/gpControl/setting/2/5
                    2.7K 4:3: http://10.5.5.9/gp/gpControl/setting/2/6
                    1440p: http://10.5.5.9/gp/gpControl/setting/2/7
                    1080p SuperView: http://10.5.5.9/gp/gpControl/setting/2/8
                    1080p: http://10.5.5.9/gp/gpControl/setting/2/9
                    960p: http://10.5.5.9/gp/gpControl/setting/2/10
                    720p SuperView: http://10.5.5.9/gp/gpControl/setting/2/11
                    720p: http://10.5.5.9/gp/gpControl/setting/2/12
                    WVGA: http://10.5.5.9/gp/gpControl/setting/2/13
                Frame Rate (HERO4 Black/Session):帧率
                    240fps (WVGA only):	http://10.5.5.9/gp/gpControl/setting/3/0
                    120fps (720p only):	http://10.5.5.9/gp/gpControl/setting/3/1
                    100fps:	http://10.5.5.9/gp/gpControl/setting/3/2
                    60fps:	http://10.5.5.9/gp/gpControl/setting/3/5
                    50fps:	http://10.5.5.9/gp/gpControl/setting/3/6
                    30fps:	http://10.5.5.9/gp/gpControl/setting/3/8
                    25fps:	http://10.5.5.9/gp/gpControl/setting/3/9
                    24fps:	http://10.5.5.9/gp/gpControl/setting/3/10
                    15fps (4K only):	http://10.5.5.9/gp/gpControl/setting/3/11
                    12.5fps (4k PAL only):	http://10.5.5.9/gp/gpControl/setting/3/12
                FOV 画面视野
                    Wide: http://10.5.5.9/gp/gpControl/setting/4/0
                Low Light: 低照度
                    ON: http://10.5.5.9/gp/gpControl/setting/8/1
                    OFF: http://10.5.5.9/gp/gpControl/setting/8/0
                Video Looping Duration: 循环周期
                    Max: http://10.5.5.9/gp/gpControl/setting/6/0
                    5Min: http://10.5.5.9/gp/gpControl/setting/6/1
                    20Min: http://10.5.5.9/gp/gpControl/setting/6/2
                    60Min: http://10.5.5.9/gp/gpControl/setting/6/3
                    120Min: http://10.5.5.9/gp/gpControl/setting/6/4
                Spot Meter: 点测光
                    off: http://10.5.5.9/gp/gpControl/setting/9/0
                    on: http://10.5.5.9/gp/gpControl/setting/9/1
                    
 * * *        
            拍照
                Photo resolution for Photo Modes (incl. SubModes):拍照分辨率
                    8MP Wide: http://10.5.5.9/gp/gpControl/setting/17/0
                Spot Meter:点测光开关
                    off: http://10.5.5.9/gp/gpControl/setting/20/0
                    on: http://10.5.5.9/gp/gpControl/setting/20/1
 * * *            
            MultiShot:连拍
            
                Photo resolution for MultiShot Modes (incl. SubModes):
                    8MP Wide: http://10.5.5.9/gp/gpControl/setting/28/0
                Timelapse Interval (TIMELAPSE MODE on MultiShot):
                    0.5: http://10.5.5.9/gp/gpControl/setting/30/0
                    1: http://10.5.5.9/gp/gpControl/setting/30/1
                    2: http://10.5.5.9/gp/gpControl/setting/30/2
                    5: http://10.5.5.9/gp/gpControl/setting/30/5
                    10: http://10.5.5.9/gp/gpControl/setting/30/10
                    30: http://10.5.5.9/gp/gpControl/setting/30/30
                    60: http://10.5.5.9/gp/gpControl/setting/30/60
                Spot Meter:
                    off: http://10.5.5.9/gp/gpControl/setting/33/0
                    on: http://10.5.5.9/gp/gpControl/setting/33/1
                Burst Rate:
                    10/2: http://10.5.5.9/gp/gpControl/setting/29/3
* * * 
            其他设置
                Orientation: 方向
                    Up: http://10.5.5.9/gp/gpControl/setting/52/1
                    Down: http://10.5.5.9/gp/gpControl/setting/52/2
                    Gyro based: http://10.5.5.9/gp/gpControl/setting/52/0
                Quick Capture:快速拍摄
                    On: http://10.5.5.9/gp/gpControl/setting/54/1
                    Off: http://10.5.5.9/gp/gpControl/setting/54/0
                LED Blink:LED闪烁   +++
                    2: http://10.5.5.9/gp/gpControl/setting/55/1
                    4: http://10.5.5.9/gp/gpControl/setting/55/2
                    Off: http://10.5.5.9/gp/gpControl/setting/55/0
                Beeps:蜂鸣器声音大小
                    Off: http://10.5.5.9/gp/gpControl/setting/56/2
                    0.7: http://10.5.5.9/gp/gpControl/setting/56/1
                    Full: http://10.5.5.9/gp/gpControl/setting/56/0
                Video Format:视频格式
                    NTSC: http://10.5.5.9/gp/gpControl/setting/57/0
                    PAL: http://10.5.5.9/gp/gpControl/setting/57/1
                LCD Display:lcd 显示  在+上无效
                    On: http://10.5.5.9/gp/gpControl/setting/72/1
                    Off: http://10.5.5.9/gp/gpControl/setting/72/0
                On Screen Display:屏上显示
                    On: http://10.5.5.9/gp/gpControl/setting/58/1
                    Off: http://10.5.5.9/gp/gpControl/setting/58/0
                LCD Brightness: 背光亮度    在+上可以关闭lcd，但是不知道怎么打开
                    High: http://10.5.5.9/gp/gpControl/setting/49/0
                    Medium: http://10.5.5.9/gp/gpControl/setting/49/1
                    Low: http://10.5.5.9/gp/gpControl/setting/49/2
                LCD Lock: LCD锁
                    On: http://10.5.5.9/gp/gpControl/setting/50/1
                    Off: http://10.5.5.9/gp/gpControl/setting/50/0
                LCD Timeout sleep:
                    LCD Never sleep: http://10.5.5.9/gp/gpControl/setting/51/0
                    LCD 1min sleep timeout: http://10.5.5.9/gp/gpControl/setting/51/1
                    LCD 2min sleep timeout: http://10.5.5.9/gp/gpControl/setting/51/2
                    LCD 3min sleep timeout: http://10.5.5.9/gp/gpControl/setting/51/3
                Auto Off: 自动关机
                    Never: http://10.5.5.9/gp/gpControl/setting/59/0
                    1m: http://10.5.5.9/gp/gpControl/setting/59/1
                    2m: http://10.5.5.9/gp/gpControl/setting/59/2
                    3m: http://10.5.5.9/gp/gpControl/setting/59/3
                    5m: http://10.5.5.9/gp/gpControl/setting/59/4
                Streaming tweaks:
                Stream BitRate:
                    250 Kbps: http://10.5.5.9/gp/gpControl/setting/62/250000
                    400 Kbps: http://10.5.5.9/gp/gpControl/setting/62/400000
                    600 Kbps: http://10.5.5.9/gp/gpControl/setting/62/600000
                    700 Kbps: http://10.5.5.9/gp/gpControl/setting/62/700000
                    800 Kbps: http://10.5.5.9/gp/gpControl/setting/62/800000
                    1 Mbps: http://10.5.5.9/gp/gpControl/setting/62/1000000
                    1.2 Mbps: http://10.5.5.9/gp/gpControl/setting/59/1200000
                    1.6 Mbps: http://10.5.5.9/gp/gpControl/setting/59/1600000
                    2 Mbps: http://10.5.5.9/gp/gpControl/setting/59/2000000
                    2.4 Mbps: http://10.5.5.9/gp/gpControl/setting/59/2400000
                Stream Window Size:
                    Default: http://10.5.5.9/gp/gpControl/setting/64/0
                    240: http://10.5.5.9/gp/gpControl/setting/64/1
                    240, 3:4: http://10.5.5.9/gp/gpControl/setting/64/2
                    240 1:2: http://10.5.5.9/gp/gpControl/setting/64/3
                    480: http://10.5.5.9/gp/gpControl/setting/64/4
                    480 3:4: http://10.5.5.9/gp/gpControl/setting/64/5
                    480 1:2: http://10.5.5.9/gp/gpControl/setting/64/6
                    720 (1280x720) : http://10.5.5.9/gp/gpControl/setting/64/7
                    720 3:4 (960x720) http://10.5.5.9/gp/gpControl/setting/64/8
                    720 1:2 (640x720) http://10.5.5.9/gp/gpControl/setting/64/9
                WiFi AP Settings: wifi模式设置
                Turn WiFi OFF: http://10.5.5.9/gp/gpControl/setting/63/0
                Switch WiFi to App/Smartphone mode: http://10.5.5.9/gp/gpControl/setting/63/1
                Switch WiFi to GoPro RC: http://10.5.5.9/gp/gpControl/setting/63/2
                Switch WiFi to GoPro Smart Remote RC: http://10.5.5.9/gp/gpControl/setting/63/4

#### 非setting 方式 ：
                Set date and time 设置时间
                    http://10.5.5.9/gp/gpControl/command/setup/date_time?p=%11%0b%10%11%29%2c
                    example: 11 = (20)17, 0b = 11 (November), 10 = 16, 11 = 17, 29 = 41, 2c = 44. 
                连接蓝牙设备
                执行视频处理任务
                Reformat SD Card (CAUTION!):格式化存储卡
                    http://10.5.5.9/gp/gpControl/command/storage/delete/all
                Delete Last media taken:删除最近拍摄
                    http://10.5.5.9/gp/gpControl/command/storage/delete/last
                Delete file:删除文件
                    http://10.5.5.9/gp/gpControl/command/storage/delete?p=file (eg. /100GOPRO/G0010124.JPG)
                Locate 地区开关，不确定是不是GPS
                    On: http://10.5.5.9/gp/gpControl/command/system/locate?p=1
                    Off: http://10.5.5.9/gp/gpControl/command/system/locate?p=0
                Tag moment: 测试不通过
                    http://10.5.5.9/gp/gpControl/command/storage/tag_moment
                Tag moment in video file: 测试不通过
                    http://10.5.5.9/gp/gpControl/command/storage/tag_moment/playback?p=100GOPRO/GOPR0563.MP4&tag=2000
                Shutter 快门
                    Trigger: http://10.5.5.9/gp/gpControl/command/shutter?p=1
                    Stop (Video/Timelapse): http://10.5.5.9/gp/gpControl/command/shutter?p=0    
                wifi名字 密码Set GoPro WiFi name/password:
                     GoPro Name: http://10.5.5.9/gp/gpControl/command/wireless/ap/ssid?ssid=GOPRONAME
                     GoPro Name and Password: http://10.5.5.9/gp/gpControl/command/wireless/ap/ssid?ssid=GOPRONAME&pw=GOPROPASS
                     GOPRONAME = GoPro new WiFi name
                     GOPROPASS = GoPro new WiFi password
                配对，第一次使用
                    Code Pairing:
                    GoPro HERO4 cameras need a code authentication in order to connect to a device for the first time, this is done in the GoPro app when you firt connect your GoPro, a 4 digit PIN is displayed on the camera and that PIN needs to be entered in the GoPro app. Video explaining HERO4 pairing process
                    
                    First make sure to connect go GOPRO-BP-(numbers) password: "goprohero" and call this URL:
                    
                    https://10.5.5.9/gpPair?c=start&pin=XXXX&mode=0
                    
                    XXXX is the 4 digit PIN on the GoPro front screen.
                    
                    And to finish pairing:
                    
                    https://10.5.5.9/gpPair?c=finish&pin=XXXX&mode=0 
                Power: 开机关机
                    Power Off: http://10.5.5.9/gp/gpControl/command/system/sleep
                    Power On: To power ON a HERO4 Black/Silver camera, use WoL with these parameters: MAC ADDRESS OF THE CAMERA, 
                    10.5.5.9 as IP ADDRESS, Subnet Mask 255.255.255.0, Port 9. For the Hero4 Session, this magic packet has to 
                    be sent when your project wants to operate with the camera.
                
                Primary modes:第一模式设定
                    Video: http://10.5.5.9/gp/gpControl/command/mode?p=0
                    Photo: http://10.5.5.9/gp/gpControl/command/mode?p=1
                    MultiShot: http://10.5.5.9/gp/gpControl/command/mode?p=2
                Secondary modes:第二模式设定
                    Video (VIDEO): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=0&sub_mode=0
                    TimeLapse Video (VIDEO): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=0&sub_mode=1
                    Video + Photo (VIDEO): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=0&sub_mode=2
                    Looping (VIDEO): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=0&sub_mode=3
                    Single (PHOTO): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=1&sub_mode=0
                    Continuous (PHOTO): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=1&sub_mode=1
                    Night (PHOTO): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=1&sub_mode=2
                    Burst (MultiShot): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=2&sub_mode=0
                    Timelapse (MultiShot): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=2&sub_mode=1
                    NightLapse (MultiShot): http://10.5.5.9/gp/gpControl/command/sub_mode?mode=2&sub_mode=2
                
                
          
             