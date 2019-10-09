<template>
    <div ref="dddd"></div>
</template>
<script>
    import G2 from "@antv/g2";
    export default {
        name: "line",
        data() {
            return {
                data: [
                    {
                        year: "1991",
                        value: 3
                    },
                    {
                        year: "1992",
                        value: 4
                    },
                    {
                        year: "1993",
                        value: 3.5
                    },
                    {
                        year: "1994",
                        value: 5
                    },
                    {
                        year: "1995",
                        value: 4.9
                    },
                    {
                        year: "1996",
                        value: 6
                    },
                    {
                        year: "1997",
                        value: 7
                    },
                    {
                        year: "1998",
                        value: 9
                    },
                    {
                        year: "1999",
                        value: 13
                    }
                ]
            };
        },
        mounted() {
            var chart = new G2.Chart({
                container: this.$refs.dddd,
                forceFit: true,
                padding: 50,
                background: {
                    fill: "#FFF", // 图表背景色
                    fillOpacity: 1, // 图表背景透明度
                    stroke: "#FFF", // 图表边框颜色
                    strokeOpacity: 1, // 图表边框透明度
                    opacity: 1, // 图表整体透明度
                    lineWidth: 1, // 图表边框粗度
                    radius: 6 // 图表圆角大小
                },
            });
            chart.source(this.data);
            chart.scale("value", {
                min: 0
            });
            chart.scale("year", {
                range: [0, 1]
            });
            chart.tooltip({
                crosshairs: {
                    type: "line"
                }
            });
            chart.line().position("year*value");
            chart
                .point()
                .position("year*value")
                .size(4)
                .shape("circle")
                .style({
                    stroke: "#fff",
                    lineWidth: 1
                });
            chart.render();
        }
    };
</script>

<style>
</style>