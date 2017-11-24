<template>
    <div class="nocheck">
            <div class="divhead searchead">
                    <span>输入搜索</span>
                    <div class="input_div"><input class="app_input_a" v-model="tijiano"  placeholder="体检人姓名 / 体检编号" type="text"/></div>
                    <span class="comtime">提交时间</span>
                    <div class="input_div">
                        <el-date-picker
                            class="myeldata wd"
                            v-model="comtime"
                            type="datetime"
                            placeholder="请选择时间"
                            align="right">
                        </el-date-picker>
                    </div>
                    <div class="app_btn_in resultbtn">查询结果</div>
                    <div class="app_btn_in_w resultbtn">高级检索</div>
            </div>
            <div class="divhead searchcon">
                    <span>数据列表</span>
                    <div class="app_btn_in addbtn"><div><img src="../../../static/img/icon_jia.png"/><span>添加</span></div></div>
                    <el-select class="sortype" v-model="sortype" placeholder="排序方式">
                        <el-option
                        v-for="item in sortypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
            </div>
            <div class="checkc">
                <!--表格组件-->
                <el-table :data="tablelist" tooltip-effect="dark" ref="multipleTable" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column  type="selection"></el-table-column>
                    <el-table-column  label="体检编号" prop="no"></el-table-column>
                    <el-table-column  label="提交时间" prop="time"></el-table-column>
                    <el-table-column  label="联系电话" prop="phone"></el-table-column>
                    <el-table-column  label="姓名" prop="name"></el-table-column>
                    <el-table-column  label="体检类型" prop="type"></el-table-column>
                    <el-table-column  label="用户来源" prop="from"></el-table-column>
                    <el-table-column  label="体检状态" prop="statu"></el-table-column>
                    <el-table-column label="操作" align="center" width="189" style="text-aligen:center">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 0)" type="text" size="small">查看报告</el-button>
                            <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 1)" type="text" size="small">下载报告</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'

export default {
    name: 'nocheck',
    props : [],
    data () {
        return {
            sortype:'',
            sortypes:[
                {value: '0',label: '正序'},
                {value: '1',label: '倒序'}
            ],//排序方式
            tijiano:'',//编号
            comtime:'',//提交时间
            tablelist:[
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'}
            ]
        }
    },
    components: {

    },
    methods : {
        //选中的值
        handleSelectionChange(val){
            console.log(val)
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    },
    created(){

    },
    mounted(){

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .nocheck{
        .searchead{
            height:3.4rem;
            @include font(0.7rem,3.4rem);
            .input_div{
                display:inline-block;
                >input{
                    margin:0 0.45rem;
                }
                .wd{
                    margin:0 0.45rem;
                    width:11.6rem;
                }
            }
            .comtime{
                margin-left:0.45rem;
            }
            .resultbtn{
                width:5.5rem;
                margin-right:0.45rem;
            }
        }
        .searchcon{
            margin-top:1rem;
            position: relative;
            .addbtn{
                position: absolute;
                top: 0.3rem;
                right:7.5rem;
                width:4.1rem;
                >div{
                    position: relative;
                    top: -0.1rem;
                    img{
                        width: 1.2rem;
                        vertical-align: middle;
                    }
                    span{
                        vertical-align: middle;
                        height:1.75rem;
                        display:inline-block;
                    }
                }
            }
            .sortype{
                position: absolute;
                right:1.5rem;
                width:5.5rem;
            }
        }
        .checkc{
            min-height:34.75rem;
            background-color:$wihte_c;
            padding: 1.2rem;
            .tablelist{
                padding:1.35rem;
                color:$gray;
            }
        }
    }
</style>
