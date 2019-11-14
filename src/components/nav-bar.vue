<template>
  <div
    class="hob-nav-bar"
    :style="{'height':style.height+'px','z-index':zIndex,'background-color':bg,'color':color,'font-size':fontSize}"
  >
    <status-bar :bgcolor="statusBgColor"></status-bar>
    <div class="hob-nav-bar-container" :style="{'z-index':zIndex,
    'padding-top':style.padding+'px',
    'padding-bottom':style.padding+'px',
    'height':style.menuButtonHeight+'px',
    'line-height':style.menuButtonHeight+'px',
    }">
        <div class="hob-nav-bar__left" @click="leftClick" v-if="showLeft">
          <slot name="left" >
            <div v-if="leftArrow"  class="hob-nav-bar_arrow">
              <img src="/hucheng/ic_back.png"/>
             </div>
            <div v-if="leftText" v-text="leftText" class="hob-nav-bar_text" >
            </div>
          </slot>
        </div>
    <div class="hob-ellipsis hob-nav-bar__title" >
      <slot name="title">{{ title }}</slot>
    </div>
    </div>

  </div>
</template>

<script>
import { getSystemInfo, getMenuButtonInfo } from '../common/store/action'
import StatusBar from './status-bar.vue'

export default {
  name: 'nav-bar',
  components: {
    StatusBar
  },
  data() {
    return {
      style: {
        padding: 6,
        height: 64,
        menuButtonHeight: 32
      }

    }
  },
  props: {
    title: String,
    leftText: String,
    leftArrow: Boolean,
    zIndex: {
      type: Number,
      default: 1
    },
    statusBgColor:String,
    bg:  String,
    showLeft: false,  
    fontSize: {
      type: String,
      default: '16px'
    },
    color: String
  },
  beforeCreate() {
   // const systemInfo = getSystemInfo()
    //const menuButtonInfo = getMenuButtonInfo()
    //const padding = menuButtonInfo.top - systemInfo.statusBarHeight
    // this.style = {
    //   padding,
    //   menuButtonHeight: menuButtonInfo.height,
    //   height: 2 * padding + systemInfo.statusBarHeight + menuButtonInfo.height
    // }
  },
  computed: {
    // style() {
    //   return {
    //     zIndex: this.zIndex
    //   }
    // }
  },
  methods: {
    leftClick() {
      console.log(122)
      this.$emit('leftClick')
    }
  }
}
</script>
<style  lang="less">
.hob-nav-bar{
    position: relative;
    user-select: none;
    text-align: center;
    box-shadow: 0PX 2PX 6PX 0PX rgba(55, 64, 62, 0.08);
     top: 0;
    left: 0;
    width: 100%;
}
.hob-hairline--bottom::after {
    border-bottom-width: 1PX;
}
.hob-nav-bar-container{
    position: relative;
    padding-top: 6PX;
    padding-bottom: 6PX;
    height: 32PX;
    line-height: 32PX;

}
[class*='hob-hairline']::after {
    content: ' ';
    position: absolute;
    pointer-events: none;
    box-sizing: border-box;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    transform: scale(0.5);
    border: 0 solid #e8edec;
}

.hob-nav-bar__left {
    left: 16PX;
    font-size: 16PX;
    position: absolute;
    display: flex;
}
.hob-nav-bar_arrow, .hob-nav-bar_text{

}
.hob-nav-bar_arrow img{
  width: 16px;
  height: 16px;
}
.hob-nav-bar__title {
    margin: 0 auto;
    max-width: 60%;
    font-size: 18PX;
    font-weight: 500;
}

.hob-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
