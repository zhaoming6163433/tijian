<template>
  <div class="home">
        <toplogo></toplogo>
        <menusys></menusys>
        <refreshpage></refreshpage>
        <div class="content content1">
            <div class="contentin">
                <router-view class="child-view"></router-view>
            </div>
        </div>
        <bottomlogo></bottomlogo>
  </div>
</template>

<script>
import util from 'src/util/util.js'
import toplogo from 'components/toplogo';
import menusys from 'components/menu';
import refreshpage from 'components/refreshpage';
import bottomlogo from 'components/bottomlogo';
import { get_healthInformationCategoryList } from 'src/model/api.js'

export default {
    name: 'home',
    props : [],
    data () {
        return {

        }
    },
    components: {
        menusys,
        refreshpage,
        toplogo,
        bottomlogo
    },
    computed:{

    },
    created(){
    },
    methods : {

    },
    mounted(){

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .child-view{
        @include minw(55rem);
        @include font(0.8rem,0.8rem);
    }
    .content1{
        left:12.9rem;
        top:5.6rem;
        bottom: 2.75rem;
        overflow-x: auto;
        padding:1.5rem 0 1.5rem 1.5rem;
        background-color:$pageback;
        color:$gray;
        .contentin{
            padding-right:1.5rem;
            min-width: 55rem;
        }
    }
</style>
