<template>
  <div class="login">
        <div class="loginin"><img class="backimg" src="../../../static/img/logoinback.jpg"/></div>
        <div class="contentlogin">
            <div class="logoinout">
                <div class="logoinc">
                    <h1>欢迎登录志晟体检系统</h1>
                    <div>
                        <div class="input_div userpass username"><input v-model="username" class="app_input" placeholder="账户名称" type="text"/><i></i></div>
                        <div class="input_div userpass password"><input v-model="password" class="app_input" placeholder="账户密码" type="password"/><i></i></div>
                        <div class="passwordstyle"><div><el-checkbox  v-model="checkremember">记住密码</el-checkbox></div><div><span class="span2">忘记密码？</span></div></div>
                        <div class="btn" @click="gohome()"><button class="app_btn" >登录</button></div>
                    </div>
                </div>
            </div>
            <div class="copyright"><span>Copyright ©2018 [体检系统] Powered By [体检系统] Version 1.0.0</span></div>
        </div>
  </div>
</template>

<script>
import util from 'src/util/util.js'
import appConfigs from 'src/configs'

export default {
    name: 'login',
    props : [],
    data () {
        return {
            checkremember:false,
            username:'',
            password:''
        }
    },
    components: {

    },
    created(){

    },
    watch :{
        //记不记住密码
        checkremember(val){
            this.saveInfo();
        }
    },
    methods : {
        //登录
        gohome(){
            if(this.checkremember){
                this.saveInfo();
            }
            this.$router.push({'name':'homechild'});
        },
        //背景图片缩放
        scalebackimg(_domimg){
            //scrollHeight
            let scrollw = document.documentElement.scrollWidth,
                scrollh = document.documentElement.scrollHeight<720?720:document.documentElement.scrollHeight,
                clientw = document.documentElement.clientWidth,
                clienth = document.documentElement.clientHeight,
                backimg = $('.backimg'),
                loginin = $('.loginin'),
                contentlogin = $('.contentlogin'),
                w = _domimg.width,
                h = _domimg.height,
                outscale = scrollw/scrollh,
                inscale = w/h;

            //外框宽高比大于里面图片时，图片100%高度，否则100%宽度
            loginin.css('width' ,'100%');
            loginin.css('height' ,'100%');
			if(outscale>inscale){
                backimg.css('width',scrollw);
                backimg.css('height',scrollw/inscale);
                backimg.css('top',(scrollh-scrollw/inscale)/2);
                backimg.css('left',0);
			}else{
                backimg.css('width',scrollh*inscale);
                backimg.css('height',scrollh);
                backimg.css('top',0);
                backimg.css('left',(scrollw-scrollh*inscale)/2);
            }
            if(clienth<700){
                loginin.css('height' ,'700px');
            }
            if(clientw<550){
                loginin.css('width' ,'550px');
            }
            // //内容垂直居中
            let _top = (clienth - contentlogin.height())/2;
            if(_top<20) _top = 20;
            contentlogin.css('top' ,_top+'px');
        },
        //执行缩放
        initscaleimg(){
            var img = new Image();
            img.src = appConfigs.assetsPublicPath+'/../static/img/logoinback.jpg';
            img.onload = ()=>{
                this.scalebackimg(img);
                window.onresize = ()=>{
                    window.requestAnimationFrame( () => {
                        this.scalebackimg(img);
                    });
                }
            }
        },
        //存用户名密码
        saveInfo(){
            let obj = {'username':this.username,'password':this.password,'checkremember':this.checkremember};
            util.setlocal('userInfo',obj);
        }
    },
    mounted(){
        this.initscaleimg();
        //记住密码时候就用缓存的
        let obj = util.getlocal('userInfo');
        if(obj.checkremember){
            Object.assign(this.$data, obj);
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .login{
        .loginin{
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .backimg{
                z-index: -1;
                position: absolute;
                min-width: 1052px;
                min-height: 658px;
            }
        }
        .contentlogin{
            position: relative;
            top:5rem;
            .logoinout{
                width: 27.5rem;
                height: 27.5rem;
                position: relative;
                margin: 0 auto;
                .logoinc{
                    position: absolute;
                    margin: 0 5rem;
                    left: 50%;
                    margin-left:-12.075rem;
                    width:24.15rem;
                    height:22.7rem;
                    background: $wihte_c;
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
                    border-radius: 2px;
                    h1{
                        color:$logoback;
                        text-align: center;
                        height: 5.3rem;
                        border-bottom:1px solid $bordercolor;
                        @include font(1.8rem,5.3rem);
                    }
                    .input_div{
                        margin-top:1.25rem;
                        text-align: center;
                    }
                    .userpass{
                        position: relative;
                        i{
                            position: absolute;
                            right: 3.5rem;
                            top: 0.7rem;
                            @include wh(1.2rem,1.2rem);
                        }
                        input{
                            padding-right: 2rem;
                            width: 15.1rem;
                        }
                    }
                    .username{
                        i{@include bis('../../../static/img/icon_yonghu.png');}
                    }
                    .password{
                        i{@include bis('../../../static/img/icon_mima.png');}
                    }
                    .passwordstyle{
                        display: flex;
                        width:18rem;
                        justify-content: space-between;
                        height: 3rem;
                        margin:0 auto;
                        @include font(0.7rem,3rem);
                        input{
                            position: relative;
                            top: -1px;
                        }
                        .span1{
                            margin-left:0.4rem;
                            color:$gray;
                            cursor: pointer;
                        }
                        .span2{
                            color:$red_c;
                            cursor: pointer;
                        }
                    }
                    .btn{
                        width: 18rem;
                        margin: 0 auto;
                        position: relative;
                        top:0.8rem;
                        button{
                            letter-spacing: 0.44rem;
                        }
                    }
                }
            }
            .copyright{
                color:$gray;
                position: relative;
                width:100%;
                height:0;
                top:3rem;
                text-align: center;
                @include font(0.7rem,0.7rem);
            }
        }
    }
</style>
