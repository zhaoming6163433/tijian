<template>
    <div class="g2line">
        <div id="c1"></div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import G2 from 'g2'
export default {
    name: 'g2line',
    props : [],
    data () {
        return {
            datalist :[
                {"year": "07-01 周六", "ACME": 165, "Compitor": 29},
                {"year": "07-02 周日", "ACME": 160, "Compitor": 48},
                {"year": "07-03 周一", "ACME": 180, "Compitor": 40},
                {"year": "07-04 周二", "ACME": 180, "Compitor": 20},
                {"year": "07-05 周三", "ACME": 155, "Compitor": 88},
                {"year": "07-06 周四", "ACME": 155, "Compitor": 26},
                {"year": "07-07 周五", "ACME": 140, "Compitor": 90}
            ]
        }
    },
    components: {

    },
    created(){

    },
    methods : {

    },
    mounted(){
        var Stat = G2.Stat;
        var Frame = G2.Frame;
        var frame = new Frame(this.datalist);
        frame = Frame.combinColumns(frame,['ACME','Compitor'],'value','type','year');
        var chart = new G2.Chart({
            id: 'c1',
            forceFit: true,
            height: 328
        });
        chart.legend(false);
        chart.source(frame, {
            'value': {
                alias: ' ',
                formatter: function(val) {
                    return  val;
                }
            },
            year: {
                alias: ' ',
                range: [0, 1]
            }
        });
        chart.axis('year', {
            title: null,
            tickLine: false,
            line: {
            stroke: '#cfcfcf'
            },
            grid: {
            line: {
                stroke: '#E5E5E5'
            }
            }
        });
        chart.axis('value', {
            title: {
                fill: '#000'
            },
            tickLine: false,
            line: {
                stroke: '#cfcfcf'
            },
            grid: {
                line: {
                    stroke: '#E5E5E5',
                    lineDash: [0, 0]
                }
            }
        });
        chart.tooltip({
            crosshairs: true
        });
        chart.area().position('year*value').color('type',['#e5e4e5', '#1CC09F']).shape('smooth');
        chart.line().position('year*value').color('type',['#e5e4e5', '#1CC09F']).size(2).shape('smooth');
        chart.render();
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .g2line{

    }
</style>
