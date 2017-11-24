<template>
    <div class="homechild">
        <!--体检四个方块数据-->
        <section>
            <ul class="rectul">
                <li><div class="rect rect1"><div class="title">体检总数（人）</div><div class="fontext">{{persionobj.num1}}</div><div class="img1"></div></div></li>
                <li><div class="rect rect2"><div class="title">今日体检数量（人）</div><div class="fontext">{{persionobj.num2}}</div><div class="img2"></div></div></li>
                <li><div class="rect rect3"><div class="title">异常体检数量（人）</div><div class="fontext">{{persionobj.num3}}</div><div class="img3"></div></div></li>
                <li><div class="rect rect4"><div class="title">未总检数量（人）</div><div class="fontext">{{persionobj.num4}}</div><div class="img4"></div></div></li>
            </ul>
        </section>
        <!--体检详情-->
        <section class="detail">
            <div class="divhead">体检详情</div>
            <div class="info padleft">
                <ul>
                    <li><div class="detailimg"><img src="../../../static/img/icon_no.png"/></div>未体检人员<span>10</span>人</li>
                    <li><div class="detailimg"><img src="../../../static/img/icon_yes_2.png"/></div>已完成体检<span>23</span>人</li>
                    <li><div class="detailimg"><img src="../../../static/img/icon_deng.png"/></div>待总检<span>12</span>人</li>
                </ul>
            </div>
        </section>
        <!--体检统计-->
        <section class="statistics">
            <div class="divhead">体检体检统计</div>
            <div class="info">
                <div class="infodata"></div>
                <div class="infoimg"></div>
            </div>
        </section>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import { get_healthInformationCategoryList } from 'src/model/api.js'

export default {
    name: 'homechild',
    props : [],
    data () {
        return {
            persionobj:{'num1':214,'num2':308,'num3':106,'num14':52}
        }
    },
    components: {

    },
    created(){

    },
    methods : {
        async get_info(params){

            let res = await get_healthInformationCategoryList(params);
            res.datetime = new Date(res.updateDate).Format('yyyy-MM-dd');
            this.infomation = res;

        },
    },
    mounted(){
        this.get_info()
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .homechild{
        .rectul{
            width:100%;
            display: flex;
            justify-content: space-between;
            >li{
                width:23.5%;
                max-width: 18.9rem;
                .rect{
                    border-radius: 4px;
                    position: relative;
                    @include wh(100%,6.8rem);
                    >div{
                        position: absolute;
                    }
                    .title{
                        color:$wihte_c;
                        left: 1.4rem;
                        top:1rem;
                        @include font(0.8rem,0.8rem);
                    }
                    .fontext{
                        @include font(1.9rem,1.9rem);
                        font-weight: bold;
                        bottom:1.6rem;
                        left:1.2rem;
                        color:$wihte_c;
                    }
                    .img1{
                        right: 0.45rem;
                        top: 0.9rem;
                        @include wh(4rem,4.7rem);
                        @include bis('../../../static/img/tijian.png');
                    }
                    .img2{
                        right: 0.45rem;
                        top: 1rem;
                        @include wh(4.5rem,4.5rem);
                        @include bis('../../../static/img/img_2.png');
                    }
                    .img3{
                        right: 0.45rem;
                        top: 1.2rem;
                        @include wh(4.7rem,4rem);
                        @include bis('../../../static/img/img_3.png');
                    }
                    .img4{
                        right: 0.45rem;
                        top: 1.2rem;
                        @include wh(4.4rem,4.4rem);
                        @include bis('../../../static/img/img_4.png');
                    }
                }
                .rect1{
                    background-color:#00C0EF;
                }
                .rect2{
                    background-color:#00A65A;
                }
                .rect3{
                    background-color:#F39C12;
                }
                .rect4{
                    background-color:#F56954;
                }
            }
        }
        .detail{
            margin-top:1.5rem;
            .info{
                background-color:$wihte_c;
                height: 4.4rem;
                @include font(0.8rem,4.4rem);
                >ul>li{
                    width: 23.5%;
                    max-width: 18.9rem;
                    display: inline-block;
                    margin-right: 1.6%;
                    >span{
                        @include font(1.2rem,1.2rem);
                        margin-left: 2.7rem;
                    }
                }
                .detailimg{
                    margin-right: 0.45rem;
                    position: relative;
                    top: 0.2rem;
                    width:1rem;
                    display: inline-block;
                }
            }
        }
        .statistics{
            margin-top:1.5rem;
            .info{
                background-color:$wihte_c;
                height:21.75rem;
                display: flex;
                .infodata{
                    width:8.75rem;
                    display:inline-block;
                    border-right: 1px solid $bordercolor;
                    height: 100%;
                }
                .infoimg{
                    width:100%;
                    height: 100%;
                    display:inline-block;
                }
            }
        }
    }
</style>
