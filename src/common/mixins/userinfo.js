import login from '../../common/user/login'

export default {
  data() {
    return {
      userInfo: null,
      hasUserInfo: false
    }
  },
  computed: {
    islogin() {
      return this.hasUserInfo
    }
  },
  mounted() {
  },
  methods: {
    login() {
      return login().then((userInfo) => {
        this.hasUserInfo = true
        console.log(userInfo, userInfo)
        this.userInfo = userInfo
      })
    }
  }
}
