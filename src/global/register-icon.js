import * as ElementPlusIconsVue from "@element-plus/icons-vue"

// 全局导入element-ui中所有的图标
function registerIcons(app) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default registerIcons