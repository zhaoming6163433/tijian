<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import router from './router'
import util from './util/util.js'
import api from './model/api.js'
import appConfigs from './configs'
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      titlename: {
        'homechild' : '系统首页',
        'addphy' : '添加体检'
      }
    }
  },
  created() {
    //拦截路由
    router.beforeEach((to, from, next) => {
      next();
      $(document).unbind('scroll');
      //运行滚动条滚动
      util.allscroll();
    });
    //首次进入页面设置标题
    this.firstitle()
  },
  methods: {
    //第一次进入页面也判断标题
    firstitle(){
        let url = window.location.href;
        let name = '';
        if(url.indexOf('?')!=-1){
            name = url.substring(url.indexOf('#')+2,url.indexOf('?'));
        }else{
            name = url.substring(url.indexOf('#')+2);
        }
        let _arr = name.split('/');
        name = _arr[_arr.length-1];
        if(name){
            document.title = this.titlename[name]
        }
    }
  },
  components: {

  }
}
</script>

<style lang="scss" >
/*.router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .1s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}*/

#app {
  font-family: 'Microsoft YaHei';
  color: #000000;
  font-size: 16px;
}

body {

}

body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  outline:none;
  margin: 0;
  padding: 0;
  list-style-type:none;
}

::-webkit-input-placeholder {
  color: #999999;
}

img{
    width:100%;
}

.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}


/*文字超出省略号 第二行超出省略*/

.ellipisis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.ellipisis2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.textleft {
  text-align: left;
}

.textright {
  text-align: right;
}


/*自适应颜色*/

.mywhite{
    color:#fff;
}
/*公共样式*/
.fixed{
  position: fixed;
}

/*输入框*/
.app_input{
    width: 16.4rem;
    height:2.5rem;
    border-radius: 2px;
    border:1px solid $bordercolor;
    font-size:0.9rem;
    padding:0 0.75rem;
}
.app_btn{
    background-color:$topgreen;
    width:100%;
    border: 1px solid rgba(32,128,103,0.16);
    border-radius: 2px;
    color:#fff;
    height:2.5rem;
    font-size:0.9rem;
    cursor: pointer;
}
</style>
