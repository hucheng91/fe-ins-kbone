// @ts-nocheck
/* eslint-disable import/extensions */


import login from './common/user/login'
import { setSystemInfo, setMenuButtonInfo } from './common/store/action'
// @ts-ignore
import { Raven } from '@qtt/fe-mobile-report-wx/dist/index.es.js'

App({
  onLaunch(options) {
    
    setSystemInfo()
    setMenuButtonInfo()
    console.log('App.onLaunch --> ', options)
  },
  onShow(options) {
    console.log('App.onShow --> ', options)
    const pages = getCurrentPages() || []
    const currentPage = pages[pages.length - 1]
    if (currentPage) console.log('currentPage --> ', currentPage.pageId)
  },
  onHide() {
    console.log('App.onHide --> ')
    const pages = getCurrentPages() || []
    const currentPage = pages[pages.length - 1]
    if (currentPage) console.log('currentPage --> ', currentPage.pageId)
  },
  onError(err) {
    Raven.captureException(err, {
      level: 'error'
    })
  },
  onPageNotFound(options) {
    console.log('App.onPageNotFound --> ', options)
  },
})
