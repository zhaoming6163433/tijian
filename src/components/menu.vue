<template>
  <div class="menu content">
        <el-collapse accordion v-model="activeNames">
            <el-collapse-item :name="`${index}`" v-for="(item,index) in menulist" :key="index">
                <template slot="title">
                    <i :class="`iconimg ${item.imgname}`"></i>{{item.name}}
                </template>
                <ul class="menuin"><li class="menuili" v-for="(item1,index1) in item.menuin" :type="item1.page" :key="index1" @click="menuili($event,item1)">{{item1.name}}</li></ul>
            </el-collapse-item>
        </el-collapse>
  </div>
</template>

<script>
import router from '../router'
import appConfigs from 'src/configs'
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'menu',
    props : [],
    data () {
        return {
            activeNames: ['0'],//默认选择当前路由第一个
            menulist:[
                {'name':'首页','imgname':'btn_shouye','menuin':[{'name':'系统首页','page':'homechild'},{'name':'账户设置'},{'name':'登录日志'}]},
                {'name':'病例','imgname':'btn_jianli','menuin':[{'name':'病例列表'},{'name':'添加病例'},{'name':'设置标签'}]},
                {'name':'检查','imgname':'btn_jiancha','menuin':[{'name':'全部体检','page':'allphy'},{'name':'待体检','page':'nocheck'},{'name':'体检中'},{'name':'待总检'},{'name':'已完成'}]},
                {'name':'报告','imgname':'btn_baogao','menuin':[{'name':'全部体检'},{'name':'待体检'},{'name':'体检中'},{'name':'待总检'},{'name':'已完成'}]},
                {'name':'统计','imgname':'btn_tongji','menuin':[{'name':'体检统计'},{'name':'异常统计'}]},
                {'name':'设置','imgname':'btn_shouye','menuin':[{'name':'平台信息'},{'name':'模板设置'}]},
                {'name':'权限','imgname':'btn_quanxian','menuin':[{'name':'部门管理'},{'name':'成员管理'},{'name':'操作日志','page':'handlelog'}]}
            ]
        }
    },
    methods : {
        ...mapMutations({
            SAVE_MENU_LIST: 'SAVE_MENU_LIST',//菜单列表
            SAVE_REFRESH_NAME: 'SAVE_REFRESH_NAME'//二级标题
        }),
        //点击菜单
        menuili(e,item){
            this.$router.push({'name':item.page});
        },
        //根据地址展示按钮选择
        selectmenu(){
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
                //展示按钮点击样式
                this.updatebtn(name);
                //展示大菜单样式和二级标题刷新栏文字
                return this.refreshnamefn(name);
            }
        },
        //刷新栏标题
        refreshnamefn(name){
            //展开大的菜单
            let menuindex = '0';
            //二级标题
            let name1 = '';
            let name2 = '';

            for(let i=0;i<this.menulist.length;i++){
                for(let j=0;j<this.menulist[i].menuin.length;j++){
                    let pageitem = this.menulist[i].menuin[j];
                    if(pageitem.page == name){
                        menuindex = i.toString();
                        name1 = this.menulist[i].name;
                        name2 = pageitem.name;
                        break;
                    }
                }
            }

            this.activeNames = [];
            this.activeNames.push(menuindex);

            if(name2){
                return '<span>'+name1+'</span> / <span class="deepcol">'+name2+'</span>';
            }else{
                return '<span class="deepcol">'+name1+'</span>';
            }
        },
        //修改按钮颜色
        updatebtn(name){
            $('.menu').find('.menuili').removeClass('mywhite');
            $('.menu').find('.menuin').find("[type$='"+name+"']").addClass('mywhite');
        }
    },
    created(){
        router.beforeEach((to, from, next) => {
            next();
            this.updatebtn(to.name);
            this.SAVE_REFRESH_NAME(this.refreshnamefn(to.name));
        });
    },
    mounted(){
        setTimeout(()=>{
            this.SAVE_MENU_LIST(this.menulist);
            this.SAVE_REFRESH_NAME(this.selectmenu());
        },100);
    }
}

</script>
<!--修改组件样式-->
<style lang="scss">
.menu{
    .el-icon-arrow-right:before{
        font-weight: bold;
    }
    .el-collapse-item.is-active .el-collapse-item__header{
        color:$wihte_c;
        background-color:$topgreen;
        .btn_shouye{
            @include bis('../../static/img/btn_shouye2.png');
        }
        .btn_jianli{
            @include bis('../../static/img/btn_jianli2.png');
        }
        .btn_jiancha{
            @include bis('../../static/img/btn_jiancha2.png');
        }
        .btn_baogao{
            @include bis('../../static/img/btn_baogao2.png');
        }
        .btn_tongji{
            @include bis('../../static/img/btn_tongji2.png');
        }
        .btn_quanxian{
            @include bis('../../static/img/btn_quanxian2.png');
        }
    }
    .el-collapse-item__header{
        @include font(0.8rem,2.5rem);
        background-color:$menuback;
        color:$menutext1;
        .iconimg{
            display: inline-block;
            vertical-align: middle;
            position: relative;
            top: -0.15rem;
            @include wh(1.2rem,1.2rem);
            @include marginlr(1.35rem,0.55rem);
        }
        .btn_shouye{
            @include bis('../../static/img/btn_shouye1.png');
        }
        .btn_jianli{
            @include bis('../../static/img/btn_jianli1.png');
        }
        .btn_jiancha{
            @include bis('../../static/img/btn_jiancha1.png');
        }
        .btn_baogao{
            @include bis('../../static/img/btn_baogao1.png');
        }
        .btn_tongji{
            @include bis('../../static/img/btn_tongji1.png');
        }
        .btn_quanxian{
            @include bis('../../static/img/btn_quanxian1.png');
        }
    }
    .el-collapse-item__content{
        background-color:$menuback2;
        color:$menutext1;
    }
    .el-collapse, .el-collapse-item__header, .el-collapse-item__wrap{
        @include bordertb($menuborder);
        border-top:none;
    }
    .el-collapse-item__arrow{
        transform: rotate(90deg);
    }
    .el-collapse-item.is-active .el-collapse-item__header .el-collapse-item__arrow{
        transform: rotate(270deg);
    }
}
</style>
<style lang="scss" scoped>
  .menu{
        background-color:$menuback;
        top:2.9rem;
        overflow-y: auto;
        overflow-x: hidden;
        @include wh(12.9rem,auto);
        .menuin{
            @include font(0.7rem,1.8rem);
            margin-left: 2.85rem;
            padding-top: 0.8rem;
            cursor: pointer;
        }
  }
</style>
