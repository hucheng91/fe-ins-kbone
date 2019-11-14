<template>
  <div class="container">
    <div style="max-width: 1200px;">
      <nav-bar :left-arrow="true" >
    <template slot="title">
      <div style="color: #fff;font-size:25px">Igram</div>
    </template>
    </nav-bar>
    <canvas  id="canvas" style="width: 100%; height: 100%; position: absolute" postype="2d"></canvas>
    <div class="intro-container">
      <h1>Instagram Online Downloader</h1>
       <h2>Free Download Instagram Videos & Photos Online</h2>
      <h3 class="intro">Free  Download Instagram photos, videos, IGTV </h3>
      <div class="form-container">
            <p><span>Instagram URL:</span> https://www.instagram.com/p/V2drXfoh0r/</p>
            <div class="row" style="display:flex;">
              <div class="input-container relative">
                  <span class="instagram-icon">
                    <img  class="img" src="https://static-oss.gg.net/hucheng/icon2.png">
                  </span>
                  <input  class="input" v-model="linkUrl" name="fileURL" id="fileURL" placeholder="Paste Instagram link..."  type="text" />
              </div>
              <el-button :loading=loading type="primary"  @click="buttonClick">{{button_text}}</el-button>
            </div>
             <p>&nbsp;</p>
      </div>
      <div class="img-container" >
                <div class="img-item"   v-for="(item,index) in imgList" :key="index">
                  <input  class="input-checkbox" type="checkbox" id="CSS" name="language" />
                    <label for="CSS">
                      <svg
                        class="tick"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 13L6 14L7 15L8 16L9 17L11 15L12 14L13 13L14 12L15 11L16 10L17 9L18 8"
                        />
                      </svg>
                    </label>
                  <img :src="item" @load="imgLoadSuccess" style="width:100%;height:100%" >
                </div>
            </div>
    </div>
    <article class="form-container big-text" style="color:white">
      <a id="use_insta_downloader"></a>
      <div class="row">
        <h3 style="font-size: 26px;font-weight: bold;">How to Download Instagram Videos / Photos</h3>
        <p class="row-text"><strong>Note:</strong> The video or photo which you will download must be from a public Instagram account. But you still able to download videos and photos from private instagram accounts. <a href="/private.php">Just click here</a>.</p>
        <p class="row-text"><strong>Step 1:</strong> Copy video or photo’s URL from your browser or Instagram app.</p>
        <br>
        <ul style="list-style: disc;
    padding-left: 40px;">
          <li><strong>On Instagram app:</strong>
          <br/>
          <p class="row-text">
            Tap <img src="https://instadownloader.co//img/tap-ios.png" alt="get url instagram photo" /> (iOS) or <img src="https://instadownloader.co//img/tap-android.jpg" alt="copy url instagram" /> (Android) above the post and then tap <b>Copy Share URL</b>. The link will be saved to your clipboard.
            <div style="display:flex;flex-wrap: wrap;">
              <div  style="padding: 0">
              <img  src="https://instadownloader.co//img/Instagram video downloader.png" class="img-responsive" alt="download instagram video online" title="download instagram video guide" width="375px">
              </div>
              <div  style="padding: 0">
              <img src="https://instadownloader.co//img/download instagram video.png" class="img-responsive" alt="download instagram video steps" title="download instagram video guide" width="375px">
              </div>
            </div>
          </p>
          
            <br />
          </li>
          <li><strong>On PC / Mac:</strong> <br />
            <p class="row-text">Right-click on the date of the video or photo on Instagram then click <strong>"Copy Link "</strong></p> 
            <img src="https://instadownloader.co//img/download instagram video on desktop.png" class="img-responsive" alt="download instagram video on desktop" width="800px">
          </li>
        </ul>
        <strong>Step 2:</strong> Paste URL in the above text box area.<br />
        <strong>Step 3:</strong> Hit"<strong>Download</strong>"button.
      </div>
      
    </article>
    <article class="form-container big-text" style="color:white;margin-top: 40px;">
      <div class="panel panel-info">
          <div class="panel-heading" >
              <h3 class="panel-title">Frequently Asked Questions</h3>
          </div>
          <div>
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Does Instagram Video Downloader needs any money after some Downloads limit?" name="1">
                  <div>this service is Totally Free and has no limit to download.</div>
                </el-collapse-item>
                <el-collapse-item title="Where my videos saved after download?" name="2">
                  <div>
                    <div class="panel-body">
                      Videos usually saved under "Downloads" folder but you may use Save As Option and changed it to another one. However, you can check the download folder by following the below steps:
                      <ul>
                      <li><strong>Chrome:</strong>
                      <ul>
                      <li><strong>Windows:</strong> Press [<strong>CTRL + J</strong> ]</li>
                      <li><strong>Mac:</strong> Press [<strong>Shift + Command + J</strong>]</li>
                      </ul>
                      </li>
                      </ul>
                      <ul>
                      <li><strong>Firefox:</strong>
                      <ul>
                      <li><strong>Windows:</strong> Press [<strong>CTRL + J</strong> ]</li>
                      <li><strong>Mac:</strong> Press [<strong>Command + J</strong>]</li>
                      </ul>
                      </li>
                      </ul>
                    </div>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Can I Save instagram live videos?" name="3">
                  <div>You can't save instagram Live videos while streaming but you can download it after they finish streaming.</div>
                </el-collapse-item>
                <el-collapse-item title="Can I download Facebook videos?" name="4">
                  <div>Sorry, now,We do not have this function</div>
                </el-collapse-item>
              </el-collapse>
          </div>
      </div>
      
         
    
    
    </article>
    <footer  style="margin-top: 40px;">
      <div class="well">
        <center>
        <p style="text-align: center;"><strong>Instagram Video &amp; Photo Downloader online</strong>
        <br>
        <a href="how-to-download-instagram-videos-steps.php">How to Download Instagram Videos &amp; Photos</a> | <a href="privacy-policy.php">Privacy Policy</a> | <a href="tos.php">Terms</a> |<a href="contact.php">Contact us</a> | <a href="about.php">About</a></p>
        </center>
        </div>
    </footer>
    </div>
    
  </div>
 
 
</template>

<script>
import Vue from 'vue'
import login from '../common/user/login'
import NavBar from '../components/nav-bar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Web from 'reduce-loader!../components/Web.vue'
import { Button } from 'element-ui';
import { Collapse } from "element-ui";
import { CollapseItem } from "element-ui";
//import  "element-ui/lib/theme-chalk/collapse.css";

import 'element-ui/lib/theme-chalk/icon.css';
import 'element-ui/lib/theme-chalk/button.css';
import  "element-ui/lib/theme-chalk/collapse.css";
import  "element-ui/lib/theme-chalk/collapse-item.css";
// import 'vant/lib/button/style/index.js';
const axios = require('axios').default;
import 'reduce-loader!./web'
const AV = require('leancloud-storage')
//const baseUrl = 'https://stg-insave.avosapps.us'
const baseUrl = 'http://192.168.1.5:3000'
AV.init({
  appId: 'pstrmVUajkWM5l0V5DTfIbRI-MdYXbMMI',
  appKey: 'UWRmg11QM4MrWUbvFEG0WGce'
})
const {User} = AV
export default Vue.extend({
  name: 'App',
  data() {
    return {
      activeNames: ['1','3'],
      count: 0,
      isLoading: false,
      linkUrl: 'https://www.instagram.com/p/B4kVW83JY6C/?utm_source=ig_web_button_share_sheet',
      button_text: '获取资源',
      imgList: [],
      loading:false,
      button_status: 1,
      button_const: {
        status_1: {value: 1, text: '获取资源'},
        status_2: {value: 2, text: '获取中...'},
        status_3: {value: 3, text: '下载'},
        status_4: {value: 3, text: '下载中...'}
      }
    }
  },
  components: {
    Header,
    Footer,
    Web,
    NavBar,
    'el-button':Button,
    'el-collapse':Collapse,
    'el-collapse-item':CollapseItem
  },
  created() {
    // login().then((userInfo) => {
    //   console.log('userInfo_userInfo', userInfo)
    // })
    
  
   // console.log(wx.getAccountInfoSync())
    if (process.env.isMiniprogram) {
      console.log('I am in miniprogram')
    } else {
      console.log('I am in Web')
    }
   // login()
  },
  mounted(){
   
    this.initCanvas();
  },
  methods: {
      handleChange(){

      },
      imgLoadSuccess () {
      console.log('imgLoadSuccess')
      this.setButtonStatus(3)
    },
    resetData () {
      this.setButtonStatus(1)
      this.linkUrl = ''
      this.imgList = []
    },
    setButtonStatus (status) {
      this.button_text = this.button_const[`status_${status}`].text
      this.button_status = this.button_const[`status_${status}`].value
    },
    async loadImg () {
      this.setButtonStatus(2)
      // if (!get('userInfo')) {
      //   let user = await User.loginWithWeapp({preferUnionId: true}).catch(console.error)
      //   set('userInfo', user)
      // }
      let res = await  axios({
        url: `${baseUrl}/ins/single?url=${this.linkUrl}`,
        method: 'GET',
        headers:{'Content-Type':'application/json'}
      })
      console.log('res.data.data',res.data.data)
      this.imgList = res.data.data.downloadUrl
    },
    async download () {
      let self = this
      this.setButtonStatus(4)
      wx.downloadFile({
        url: `${baseUrl}/ins/single?url=${this.linkUrl}`,
        fail: function (res) {
          wx.showToast({title: '下载失败，联系下工程师吧'})
        },
        success: function (res) {
          console.log('res_res', res)
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success (result) {
              console.log(result)
              self.resetData()
            },
            fail (error) {
              console.log(error)
            }
          })
        }
      })
    },
    async buttonClick () {
      if (!this.linkUrl || this.linkUrl.length === 0) {
        mpvue.showToast({title: '请输入地址'})
        return
      }
      const method_fn = {
        1: this.loadImg,
        3: this.download
      }
      if (method_fn[this.button_status]) {
        method_fn[this.button_status]()
      }
    },
     initCanvas () {
       var Canvas = document.getElementById('canvas');
        var ctx = Canvas.getContext('2d');

        var resize = function() {
            Canvas.width = Canvas.clientWidth;
            Canvas.height = Canvas.clientHeight;
        };
        window.addEventListener('resize', resize);
        resize();
    var elements = [];
        var presets = {};

        presets.o = function (x, y, s, dx, dy) {
            return {
                x: x,
                y: y,
                r: 12 * s,
                w: 5 * s,
                dx: dx,
                dy: dy,
                draw: function(ctx, t) {
                    this.x += this.dx;
                    this.y += this.dy;

                    ctx.beginPath();
                    ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
                    ctx.lineWidth = this.w;
                    ctx.strokeStyle = 'rgba(192,192,192,0.35)';
                    ctx.stroke();
                }
            }
        };

        presets.x = function (x, y, s, dx, dy, dr, r) {
            r = r || 0;
            return {
                x: x,
                y: y,
                s: 20 * s,
                w: 5 * s,
                r: r,
                dx: dx,
                dy: dy,
                dr: dr,
                draw: function(ctx, t) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.r += this.dr;

                    var _this = this;
                    var line = function(x, y, tx, ty, c, o) {
                        o = o || 0;
                        ctx.beginPath();
                        ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                        ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                        ctx.lineWidth = _this.w;
                        ctx.strokeStyle = c;
                        ctx.stroke();
                    };

                    ctx.save();

                    ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
                    ctx.rotate(this.r * Math.PI / 180);

                    line(-1, -1, 1, 1, 'rgba(192,192,192,0.35)');
                    line(1, -1, -1, 1, 'rgba(192,192,192,0.35)');

                    ctx.restore();
                }
            }
        };

        for(var x = 0; x < Canvas.width; x++) {
            for(var y = 0; y < Canvas.height; y++) {
                if(Math.round(Math.random() * 8000) == 1) {
                    var s = ((Math.random() * 5) + 1) / 10;
                    if(Math.round(Math.random()) == 1)
                        elements.push(presets.o(x, y, s, 0, 0));
                    else
                        elements.push(presets.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
                }
            }
        }

        setInterval(function() {
            ctx.clearRect(0, 0, Canvas.width, Canvas.height);

            var time = new Date().getTime();
            for (var e in elements)
                elements[e].draw(ctx, time);
        }, 10);
      
    }
  }
})
</script>

<style lang="less">
body{
  width: 100%;
  margin: 0px;
}
.well{
  min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #ecf0f1;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
    a{
      color: #3e98db;
      text-decoration: none;
    }
}
.panel{
    margin-bottom: 21px;
    background-color: #409eff;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    border-color: #409eff;
}
.panel-title{
  font-size: 23pxl
}
.panel-heading {
    background-color: #409eff;
    border-color: #409eff;
    padding-left: 10px;
}
.el-collapse{
  border-top: none;
  border-bottom: none;
}
.el-collapse-item__header{
  background-color: #3498db;
  color: #ebeef5;
  border-bottom: 1px solid #409eff;
  padding: 0 10px;
  font-size: 20px;
}
.el-collapse-item__wrap{
  background-color: #409eff;
  color: #ebeef5;
  border-bottom:none;
  padding: 10px 10px 0px;
}
.el-collapse-item__content{
  color: #ebeef5;
  font-size: 17px;
}
  
img{
  vertical-align: middle;
}
.img-responsive{
  display: block;
  max-width: 100%;
  height: auto;
}
@keyframes pulse {
  from {
    box-shadow: 0 0 0 0 #3498db;
  }
}
.big-text{
  font-size: 125%;
  line-height: 30px;
}
.row{
  
  padding:10px ;
}
.container {
  position: relative;
  height: 100%;
  background-repeat: repeat-x;
  background-size: cover;
  background-color: #0082c8;
  background-image: linear-gradient(45deg, #0082c8, #6441a5);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.intro-container {
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  width: 100%;
.intro {
  margin-top: -5px;
  font-size: 16PX;
  text-align: center;
  line-height: 30PX;
  color: #fafafa;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
  h1 {
    font-size: 32px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    font-family: 'Nexa Bold';
    line-height: 56px;
    margin-bottom: 9px;
    text-align: center;
    color: white;
    margin-bottom: 0px;
  }
  h2{
    text-align: center;
    margin-top: -1%;
    letter-spacing: -.7px;
    color: #999;
    font-size: 21px;
  }
}

.input-container {
    position: relative;
    height: 48px;
    flex: 2;
}
.el-button{
  flex: 1;
  height: 48px;
  margin-left: -3px;
  max-width: 120px;
}
.form-container {
    position: relative;
    margin: 0 0 0;
    font-size: 14px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 5px;
    background-image: linear-gradient(45deg, #115d9a, #3a428c);
    padding: 20px 10px;
    p {
      color: #e0e0e0;
      font-size: 13px;
      margin: 0;
      padding-left: 10px;
    }
    strong{
      font-size: 23px;
      font-weight: 700;
     }
    .row-text{
      font-size: 17px;
      padding: 0px;
      color: white;
    //  strong{
    //   font-size: 23px;
    //   font-weight: 700;
    //  }
      a{
        color: #83ec11;
      }
    }
    p span {
      font-size: 14PX;
      font-weight: 600;
      color: white;
      text-transform: uppercase;
    }
    .download-btn {
      margin-top: 24px;
      height: 48px;
      line-height: 48px;
      display: block;
      text-align: center;
      font-weight: 700;
      color: white;
      border-radius: 40px;
      background-color: transparent;
      border: 2px solid #fff;
      width: 100%;
    }
    a:hover, .form-container a:active, .form-container a:focus, .form-container .download-btn:hover, .form-container .download-btn:active, .form-container .download-btn:focus {
    background-color: white;
    color: #0082c8;
    transition: all .25s ease-out;
}
}
.input-container span.instagram-icon {
  position: absolute;
  z-index: 100;
  top: 50%;
  background-size: cover;
  width: 21px;
  height: 21px;
  background-repeat: no-repeat;
  color: #5d5d5d;
  left: 18px;
  transform: translate(0, -50%);
}
.instagram-icon .img{
  width: 21px;
    height: 21px;
}
.input-container .h5-input {
  width: 100%;
}
.input-container  .input {
  border: none;
  position: relative;
  padding-left: 45px;
  border-radius: 4px;
  background-color: white;
  line-height: 48px;
  height: 48px;
  width: 100%;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
  box-sizing:border-box;
}
.input-container::after{
  content: '';
  display: inline-block;
  width: 100%
}


.img-container{
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 100%;
  flex-wrap: wrap;
  .h5-input{
    position: absolute;
  }
  .img-item{
    flex-basis:50%;
    position: relative;
    max-width: 200px;
  }
}
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  & + label {
    display: flex;
    align-items: center;
    right: 0;
    bottom: 0;
    position: absolute;
    &::before {
      content: "";
      width: 15px;
      height: 15px;
      border: 1px solid darken(#ecf0f1, 25%);
      background: #ecf0f1;
      cursor: pointer;
      transition: 0.3s ease;
    }
    .tick {
      position: absolute;
      stroke: white;
      stroke-width: 3px;
      stroke-dasharray: 19px;
      stroke-dashoffset: 19px;
      transition: 0.2s 0.1s ease;
      cursor: pointer;
    }
  }
  &:checked {
    & + label {
      &::before {
        background: #3498db;
        animation: pulse 1s;
        box-shadow: 0 0 0 8px rgba(#3498db, 0);
      }
      .tick {
        stroke-dashoffset: 0;
      }
    }
  }
  &:focus {
    & + label {
      &::before {
        border-color: #3498db;
      }
    }
  }
  &:disabled {
    & + label {
      &::before {
        background: darken(#ecf0f1, 25%);
      }
    }
  }
}




</style>
