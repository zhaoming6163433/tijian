<template>
  <div class="homechild">
    <div>首页内容</div>
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
      infomation:''
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

</style>
