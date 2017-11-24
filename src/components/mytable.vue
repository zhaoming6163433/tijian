<template>
  <div class="mytable">
      <table :style="{ 'text-align': textp ? textp : 'left' }">
            <thead>
                <tr><th v-show="checkbox"></th><th v-for="(name,index) in theadlist" :key="index" v-html="name"></th></tr>
            </thead>

            <tbody>
                <tr v-for="(arr,index) in tbodylist" :key="index">
                    <td v-show="checkbox"><el-checkbox></el-checkbox></td>
                    <td v-for="(name,index1) in arr" :key="index1" v-html="name"></td>
                </tr>
            </tbody>

      </table>
  </div>
</template>

<script>
/*
*   textp 文字向哪边对齐left\right\center 默认left
*   theadlist 头列表   [name]
*   tbodylist 内容列表 [[name],[]]
*   checkbox 是否展示多选
*/
export default {
    name: 'mytable',
    props : ['theadlist','tbodylist','textp','checkbox'],
    data () {
        return {
            checkboxlist:[]//选中的列表
        }
    },
    watch:{
        checkboxlist(val){
            this.$emit('checkboxfn',val);
        }
    },
    computed:{

    },
    methods : {
        handleCheckedCitiesChange(){
            alert(1)
        }
    },
    mounted(){

    }
}

</script>

<style lang="scss" scoped>
  .mytable{
      table{
            border-collapse: collapse;
            width:100%;
            @include font(0.7rem,0.7rem);
            color:$gray;
            thead{
                width:100%;
                >tr>th{
                    padding: .7rem .8rem .55rem .8rem;
                    background-color:$pageback;
                    border: 1px solid $bordercolor;
                }
            }
            tr{
                td{
                    border: 1px solid $bordercolor;
                    background-color:$wihte_c;
                    padding: .7rem .8rem .55rem .8rem;
                }
            }
      }
  }
</style>
