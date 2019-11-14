// @ts-nocheck

import userInfoMixin from '../common/mixins/userinfo'
const install = function (Vue) {
  Vue.component(this.name, this)
}

export default function (sfc) {
  sfc = getCommoption(sfc)
  sfc.install = sfc.install || install
  if (!sfc.mixins) { sfc.mixins = [] }
  sfc.mixins.push(userInfoMixin)
  return sfc
}

function getCommoption (sfc) {
  if (!sfc.props) { sfc.props = {} }
  sfc.name = 'qtt-wx' + sfc.name
  return sfc
}
