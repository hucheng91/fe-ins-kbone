<template>
  <div class="container">
    <canvas  id="canvas" style="width: 100%; height: 100%; position: absolute" postype="2d"></canvas>
    <div style="z-index: 31;position: fixed;
    bottom: 100px;
    right: 0;
    width: 36px">
    <a href="#disqus_thread">
    <svg t="1573975571273" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2101" width="100%" height="100%"><path d="M850.879104 96.41591l-676.303067 0c-60.681034 0-110.049418 49.367361-110.049418 110.049418l0 446.200388c0 60.681034 49.367361 110.049418 110.049418 110.049418l90.307795 0L396.936381 931.129846c3.793396 4.838192 9.598612 7.66354 15.746636 7.66354s11.952216-2.825348 15.746636-7.66354l132.052548-168.414711 290.396903 0c60.681034 0 110.049418-49.367361 110.049418-110.049418L960.928522 206.465329C960.928522 145.784294 911.561162 96.41591 850.879104 96.41591zM920.91111 652.665717c0 38.614459-31.416524 70.030983-70.030983 70.030983L550.744419 722.6967c-6.147 0-11.952216 2.825348-15.745612 7.66354L412.683017 886.356107l-122.31579-155.995867c-3.792373-4.838192-9.597589-7.66354-15.745612-7.66354l-100.045577 0c-38.614459 0-70.030983-31.416524-70.030983-70.030983L104.545054 206.465329c0-38.614459 31.416524-70.030983 70.030983-70.030983l676.303067 0c38.614459 0 70.030983 31.416524 70.030983 70.030983L920.910087 652.665717zM272.621051 344.526731c-44.132126 0-80.035848 35.903721-80.035848 80.035848 0 44.132126 35.903721 80.036871 80.035848 80.036871s80.035848-35.904745 80.035848-80.036871C352.655875 380.430452 316.752154 344.526731 272.621051 344.526731zM272.621051 464.582037c-22.065552 0-40.017412-17.951861-40.017412-40.018436 0-22.065552 17.952884-40.017412 40.017412-40.017412 22.065552 0 40.017412 17.951861 40.017412 40.017412C312.638463 446.629153 294.686602 464.582037 272.621051 464.582037zM512.727571 344.526731c-44.132126 0-80.035848 35.903721-80.035848 80.035848 0 44.132126 35.903721 80.036871 80.035848 80.036871 44.132126 0 80.035848-35.904745 80.035848-80.036871C592.763418 380.430452 556.859697 344.526731 512.727571 344.526731zM512.727571 464.582037c-22.065552 0-40.017412-17.951861-40.017412-40.018436 0-22.065552 17.951861-40.017412 40.017412-40.017412 22.065552 0 40.017412 17.951861 40.017412 40.017412C552.746006 446.629153 534.793122 464.582037 512.727571 464.582037zM752.836137 344.526731c-44.131103 0-80.035848 35.903721-80.035848 80.035848 0 44.132126 35.904745 80.036871 80.035848 80.036871s80.035848-35.904745 80.035848-80.036871C832.871985 380.430452 796.96724 344.526731 752.836137 344.526731zM752.836137 464.582037c-22.066575 0-40.017412-17.951861-40.017412-40.018436 0-22.065552 17.951861-40.017412 40.017412-40.017412s40.017412 17.951861 40.017412 40.017412C792.853549 446.629153 774.902712 464.582037 752.836137 464.582037z" p-id="2102" fill="#ffffff"></path></svg>
    </a>
    </div>
    <div style="max-width: 1200px;z-index: 30;">
      <nav-bar :left-arrow="true" >
        <template slot="title">
          <div style="color: #fff;font-size:25px">Igram</div>
        </template>
      </nav-bar>
      <div class="intro-container">
        <h1>Instagram Online Downloader</h1>
        <h2>Free Download Instagram Videos & Photos Online</h2>
        <h3 class="intro">Free  Download Instagram photos, videos, IGTV </h3>
        <div class="form-container">
              <p><span>Instagram URL:</span> https://www.instagram.com/p/V2drXfoh0r/</p>
              <div class="row" style="display:flex;">
                <div class="input-container relative">
                    <span class="instagram-icon">
                      <img  class="img" src="https://static-oss.tt.net/hucheng/icon2.png">
                    </span>
                    <input  class="input" v-model="linkUrl" name="fileURL" id="fileURL" placeholder="Paste Instagram link..."  type="text" />
                </div>
                <el-button :loading=loading type="primary"  @click="buttonClick">{{button_text}}</el-button>
              </div>
              <p>&nbsp;</p>
              <el-collapse-transition>
                <div class="img-container" v-if="imgList.length>0" >
                  <div style="display: flex;justify-content: center;">
                      <el-button type="primary" style="max-width: 375px" @click="download" >Download Select</el-button>
                  </div> 
                  <div class="img-row" v-for="(rowList,i) in imgList" :key="i">
                    <div class="img-item"    v-for="(item,index) in rowList" :key="index">
                    <input :id="`CSS_${index}`"  class="input-checkbox" :ref="`input_show_${i}_${index}`" type="checkbox" @change="checkboxChange(index,item,$event )"  style="display:none"  />
                      <label :for="`CSS_${index}`" :ref="`label_show_${i}_${index}`" style="display:none">
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
                      <video controls  style="width:100%" @suspend="showCheckbox(i,index)">

                        <source src="item"
                                :type="mimeType">

                        Sorry, your browser doesn't support embedded videos.
                    </video>
                      <el-image  v-if="!isVideo"
                      :src="item" 
                       :fit="'contain'" @load="showCheckbox(i,index)"
                       :preview-src-list="imgList[0]"
                        >
                        <div slot="placeholder" style="" class="image-slot">
                          loading<span class="dot">...</span>
                        </div>
                      </el-image>
                    <!-- <img :src="item" @load="imgLoadSuccess" style="width:100%;height:100%" > -->
                  </div>
                  </div>
               
              </div>
              </el-collapse-transition>
             
        </div>
            
      </div>
      <article class="form-container big-text" style="color:white;margin-top:40px">
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
       <div id="disqus_thread"></div>
      <footer  style="margin-top: 40px;">
        <div class="well">
          <center>
          <p style="text-align: center;"><strong>Instagram Video &amp; Photo Downloader online</strong>
          <br>
          </p>
          <!-- <a href="how-to-download-instagram-videos-steps.php">How to Download Instagram Videos &amp; Photos</a> | <a href="privacy-policy.php">Privacy Policy</a> | <a href="tos.php">Terms</a> |<a href="contact.php">Contact us</a> | <a href="about.php">About</a></p> -->
          </center>
          </div>
      </footer>
      
    </div>
    
  </div>
 
 
</template>

<script>
import Vue from 'vue'
import { saveAs } from 'file-saver';
import login from '../common/user/login'
import NavBar from '../components/nav-bar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Web from 'reduce-loader!../components/Web.vue'

// import 'vant/lib/button/style/index.js';
const axios = require('axios').default;
import 'reduce-loader!./web'
const AV = require('leancloud-storage')
//const baseUrl = 'https://stg-insave.avosapps.us'
const baseUrl = 'http://localhost:3000'
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
      downLoadUrlList: [],
      button_text: '获取资源',
      imgList: [],
      loading:false,
      button_status: 1,
      isVideo: false,
      button_const: {
        status_1: {value: 1, text: '获取资源'},
        status_2: {value: 2, text: '获取中...'},
        status_3: {value: 3, text: '下载'},
        status_4: {value: 3, text: '下载中...'}
      },
      fileName: null,
      mimeType: null
    }
  },
  components: {
    Header,
    Footer,
    Web,
    NavBar,
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
      checkboxChange(index,item,event){
        if(event.target.checked){
          this.downLoadUrlList.push(item)
        }else{
          this.downLoadUrlList.splice(index,1)
        }
      },
      showCheckbox(i,index){
        console.log(123)
        this.$refs[`input_show_${i}_${index}`][0].style.display = 'block';
        this.$refs[`label_show_${i}_${index}`][0].style.display = 'flex';
        this.$refs[`input_show_${i}_${index}`][0].checked = true;
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
      this.loading = true;
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
      this.loading = false;
      this.setButtonStatus(1)
      let imgList = res.data.data.downloadUrl
      this.isVideo = res.data.data.isVideo;
      this.mimeType = res.data.data.mimeType;
      console.log('res.data.data',res.data.data)
      if(imgList.length > 0){
        this.imgList = [imgList]
        this.downLoadUrlList = JSON.parse(JSON.stringify(imgList));
        this.fileName = res.data.data.filename;
        //  this.imgList = imgList.reduce((acm,item) => {
        //   let lastEleArray = acm.pop() || [];
        //   let newArray = []
        //   if(lastEleArray.length < 3 ){
        //     lastEleArray.push(item)
        //     acm.push(lastEleArray)
        //   }else{
        //     newArray.push(item)
        //     acm.push(lastEleArray)
        //     acm.push(newArray)
        //   }
        //   return acm;
        // },[])
      }
    },
    async download () {
      let self = this
      const loading = this.$loading({
          lock: true,
          text: 'Downloading...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      const fileName = this.fileName.split(".")[0]
      const type = this.fileName.split(".")[1]
      this.setButtonStatus(4)
      this.downLoadUrlList.forEach((url,index) => {
        setTimeout(() => {
          saveAs(url,`${fileName}(${index+1}).${type}`)
        },500)
        
      })

      setTimeout(() => {
        loading.close()
      },10000)
      // wx.downloadFile({
      //   url: `${baseUrl}/ins/single?url=${this.linkUrl}`,
      //   fail: function (res) {
      //     wx.showToast({title: '下载失败，联系下工程师吧'})
      //   },
      //   success: function (res) {
      //     console.log('res_res', res)
      //     wx.saveImageToPhotosAlbum({
      //       filePath: res.tempFilePath,
      //       success (result) {
      //         console.log(result)
      //         self.resetData()
      //       },
      //       fail (error) {
      //         console.log(error)
      //       }
      //     })
      //   }
      // })
    },
    async buttonClick () {
      if (!this.linkUrl || this.linkUrl.length === 0) {
        mpvue.showToast({title: '请输入地址'})
        return
      }
      const method_fn = {
        1: this.loadImg
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
.el-image-viewer__btn{
color: #ffffff;
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
  // padding-top: 64px;
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
  display: block;
  .img-row{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    // justify-content: space-between;
  }
  .image-slot{
    min-width:380px;
    min-height:380px;
    color:#ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: rgb(192, 196, 204);
    background: rgb(245, 247, 250);
  }
  .h5-input{
    position: absolute;
  }
  .img-item{
    flex-basis: 33%;
    position: relative;
  }
  .el-image{
    padding: 10px;
  }
  // .img-item:first-child{
  //   padding-left: 0px;
  // }
  // .img-item:last-child{
  //   padding-right: 0px;
  // }
}
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  right: 0;
    bottom: 0;
    z-index: 30;
    margin-right: 10px;
    margin-bottom: 15px;
  cursor: pointer;
  & + label {
    display: flex;
    align-items: center;
    right: 0;
    bottom: 0;
    z-index: 30;
    margin-right: 10px;
    margin-bottom: 15px;
    position: absolute;
    &::before {
      content: "";
      width: 20px;
      height: 20px;
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
