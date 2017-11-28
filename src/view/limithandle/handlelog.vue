<template>
    <div class="handlelog">
            <div class="divhead searchead">
                    <span>操作人员</span>
                    <el-select class="inputwh input_div" v-model="handleperson" placeholder="请选择操作人员">
                        <el-option
                        v-for="item in handlepersons"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <span class="comtime">操作日期</span>
                    <div class="input_div">
                        <el-date-picker
                            class="myeldata wd"
                            v-model="comtime"
                            type="datetime"
                            placeholder="请选择日期"
                            align="right">
                        </el-date-picker>
                    </div>
                    <div class="app_btn_in resultbtn">查询结果</div>
            </div>
            <div class="divhead searchcon">
                    <span class="font16">数据列表</span>
                    <div class="clearlog">
                        <span class="spanleft">清除日志</span>
                        <el-select  v-model="clearlog" placeholder="选择清除的日志">
                            <el-option
                            v-for="item in clearlogs"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <div class="app_btn_in sure">确定</div>
                    </div>
            </div>
            <div class="tablepadding">
                <!--表格组件-->
                <el-table :data="tablelist" tooltip-effect="dark" ref="multipleTable" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column  type="selection"></el-table-column>
                    <el-table-column  label="体检编号" prop="no"></el-table-column>
                    <el-table-column  label="操作者" prop="handlep"></el-table-column>
                    <el-table-column  label="操作日期" prop="handled"></el-table-column>
                    <el-table-column  label="IP地址" prop="ipaddress"></el-table-column>
                    <el-table-column  label="操作记录" prop="handlercord"></el-table-column>
                </el-table>
                <el-checkbox class="checkedall" v-model="checkedall" >全选</el-checkbox>
                <el-select  class="piliang" v-model="batchandle" placeholder="批量操作">
                    <el-option
                    v-for="item in batchandles"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class="app_btn_in downloadbtn">确定</div>
                <el-pagination
                    class="pagingpage"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total="1400">
                </el-pagination>
            </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'

export default {
    name: 'handlelog',
    props : [],
    data () {
        return {
            handleperson:'',//操作人员
            handlepersons:[
                {value: '0',label: '张三'},
                {value: '1',label: '李四'},
                {value: '2',label: '王五'}
            ],
            clearlog:'',//清除日期
            clearlogs:[
                {value: '0',label: '昨天'},
                {value: '1',label: '今天'},
                {value: '2',label: '明天'}
            ],
            batchandle:'',//批量操作
            batchandles:[
                {value: '0',label: '删除'},
                {value: '1',label: '下载'},
                {value: '2',label: '不知道'}
            ],
            comtime:'',//操作日期
            checkedall:false,//全选
            currentPage:1,//当前页面
            tablelist:[
                {no:'1000001',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'},
                {no:'1000002',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'},
                {no:'1000003',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'},
                {no:'1000004',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'},
                {no:'1000005',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'},
                {no:'1000006',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'},
                {no:'1000007',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'},
                {no:'1000008',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'},
                {no:'1000009',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'},
                {no:'1000010',handlep:'adming',handled:'2017-11-13 14:48:39',ipaddress:'220.231.210.22',handlercord:'编辑会员账号: windir'}
            ]
        }
    },
    watch:{
        checkedall(val){
            this.toggleSelection();
        }
    },
    components: {

    },
    methods : {
        //选中的值
        handleSelectionChange(val){
            //console.log(val)
        },
        //全选
        toggleSelection(){
            if (this.checkedall) {
                this.tablelist.forEach(i => {
                    this.$refs.multipleTable.toggleRowSelection(i);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        //分页改变时候
        handleCurrentChange(val){
            console.log(val)
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
    .handlelog{
        .searchead{
            padding: 0.5rem 1rem;
            font-size:0.7rem;
            .input_div{
                display:inline-block;
                margin:0 0.9rem 0 0.45rem;
                .wd{
                    width:11.6rem;
                }
            }
            .resultbtn{
                width:5rem;
                margin-right:0.45rem;
            }
        }
        .searchcon{
            margin-top:1rem;
            position: relative;
            .clearlog{
                position: relative;
                top: -0.3rem;
                font-size:0.7rem;
                float:right;
                margin: 0.3rem 1.2rem 0 0;
                .sure{
                    width:4.5rem;
                }
            }
        }
        .downloadbtn{
            width:4.5rem;
        }
        .piliang{
            width:7.5rem;
        }
    }
</style>
