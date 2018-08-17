import {
  observable,
  // computed,
  // autorun,
  action,
} from 'mobx'

class AppState {
  @observable code // 代码
  @observable syncing // 正在加载
  @observable xmlFile // 打开xml文件

  constructor({
    code = 'print(u"欢迎光临YaK编程世界！")',
    syncing = false,
    xmlFile = '',
  } = {}) { // 构造方法给默认值
    this.code = code
    this.syncing = syncing
    this.xmlFile = xmlFile
  }

  // @computed get getCode() {
  //   return this.code
  // }

  @action changeCode(code) { // 实时变动代码
    this.code = code
  }

  @action changeXMLFile(xmlFile) { // 实时变动xmlFile
    this.xmlFile = xmlFile
  }
}

const appState = new AppState()

export default appState
