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
            tijiano:'',//编号
            comtime:''//提交时间
        }
    },
    components: {

    },
    methods : {

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
        }
    }
</style>
