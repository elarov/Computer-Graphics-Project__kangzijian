## Project1: 音频可视化

16307130169 康子健

### 一. 使用方法

点击index.html打开网页如下

![image-20191229144211747](C:\Users\kzj\AppData\Roaming\Typora\typora-user-images\image-20191229144211747.png)

点击load music加载本地音频文件，完成解码后开始播放，如下所示

![image-20191229144345323](C:\Users\kzj\AppData\Roaming\Typora\typora-user-images\image-20191229144345323.png)

拖动volumn滑块可以调节音量大小

### 二.实现方法

#### 开发环境

javascript + Vs code

#### 算法原理

在具体实现时，选择采用AudioContext Web API以及HTML Canvas进行开发。

AudioContext是音频处理的接口，主要工作机制是创建出一些节点（AudioNode），音频数据经过节点，被显示或是被其他方法处理。

具体实现如下

#####音频处理

音频处理模块在MusicVisualizer.js中实现

+ 创建音频处理的对象

  ```javascript
  function Musicvisualizer(obj) {...}
  ```

  在这个对象中完成处理音频的相关事务

+ 创建AudioContext对象

  ```javascript
  this.gainNode = Musicvisualizer.ac[Musicvisualizer.ac.createGain?"createGain":"createGainNode"]();
  Musicvisualizer.ac = new (window.AudioContext || window.webkitAudioContext)();
  ```
  
+ 读入文件并解码
  
  ```javascript
Musicvisualizer.prototype.load = function(url,fun){
	  ...
Musicvisualizer.ac.decodeAudioData(arraybuffer,function(buffer){...}
  ...
	}
	```

##### 图形绘制

图形绘制模块在index.js中实现

+ 绘制每个小矩形的样式

  ```javascript
  function getDots(){...}
  ```


+ 绘制整体图形

  ```javascript
  function draw(arr){...}
  ```

##### 整体页面

整体样式通过css设计，在此不再赘述

#### 三. 参考资料



https://github.com/loosenRogers/MusicVisualizer-WebAudioAPI

