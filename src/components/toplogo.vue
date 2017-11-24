<template>
  <div class="toplogo content">
        <div class="logo">志晟体检系统</div>
        <div class="right">
            <img class="img1" src="../../static/img/icon_yonghu1.png"/>
            <span class="username">admin</span>
            <i class="el-icon-arrow-right jiantou"></i>
            <i class="divline"></i>
            <img class="img1" src="../../static/img/btn_shouye2.png"/>
            <i class="divline"></i>
            <img @click="closepc()" class="img2" src="../../static/img/icon_guanbi.png"/>
        </div>
  </div>
</template>

<script>

export default {
    name: 'toplogo',
    props : [],
    data () {
        return {

        }
    },
    methods : {
        closepc(){
            this.$router.push({'name':'login'})
        }
    },
    mounted(){

    }
}

</script>

<style lang="scss" scoped>
    .toplogo{
        background-color:$topgreen;
        @include minw(36.9rem);
        @include wh(100%,2.9rem);
        .logo{
            background-color:$logoback;
            color:$wihte_c;
            text-align: center;
            @include font(1rem,2.9rem);
            @include wh(12.9rem,2.9rem);
        }
        .right{
            position: absolute;
            right:1rem;
            top: 0.8rem;
            color:$wihte_c;
            @include font(0.8rem,0.8rem);
            .img1{
                width:1.2rem;
            }
            .img2{
                width:1.2rem;
                cursor: pointer;
            }
            .username{
                cursor: pointer;
                position: relative;
                top: -0.25rem;
            }
            .jiantou{
                cursor: pointer;
                transform: rotate(90deg);
                color: $wihte_c;
                font-weight: bold;
                position: relative;
                top: -0.25rem;
            }
            .divline{
                background-color:$gray2;
                @include wh(1px,1rem);
                display: inline-block;
                margin:0 0.7rem;
            }
        }
    }
</style>
