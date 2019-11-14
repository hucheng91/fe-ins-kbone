<template>
  <div class="hob-status-bar" :style="{'background-color':bgcolor,'height':height+'px'}">
  </div>
</template>

<script>

import { getSystemInfo } from '../common/store/action'

export default {
  name: 'status-bar',
  data() {
    return {
      height: 20
    }
  },
  props: {
    bgcolor: String
  },
  created() {
    //const systemInfo = getSystemInfo()
   // this.height = systemInfo.statusBarHeight
  },
  computed: {
  }
}
</script>
<style  lang="less">
    .hob-status-bar{
        display: block;
        width: 100%;
        height: 20PX;
    }
</style>
