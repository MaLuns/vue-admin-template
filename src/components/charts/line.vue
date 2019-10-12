<template>
    <div :id='id'></div>
</template>
<script>
    export default {
        data() {
            return {
                chart: null
            };
        },
        props: {
            charData: {
                type: Array,
                default: function() {
                    return [
                        {
                            date: "2012-09",
                            buyin: 7228
                        },
                        {
                            date: "2014-01",
                            buyin: 7425
                        },
                        {
                            date: "2014-09",
                            buyin: 7214
                        },
                        {
                            date: "2015-05",
                            buyin: 7003
                        }
                    ];
                }
            },
            height: Number,
            id: String
        },
        mounted: function() {
            this.initChart();
        },
        methods: {
            initChart() {
                var TICKS = ["2012-09", "2014-01", "2014-09", "2015-05"];
                this.chart = new G2.Chart({
                    container: this.id,
                    forceFit: true,
                    height: this.height,
                    padding: [50, 20, 50, 20]
                });

                this.chart.source(this.charData, {
                    date: {
                        ticks: TICKS
                    }
                });
                this.chart.legend(false);
                this.chart.axis("buyin", false);
                this.chart.axis("date", {
                    label: {
                        textStyle: {
                            fill: "#aaaaaa"
                        }
                    }
                });
                this.chart.line().position("date*buyin");
                this.chart
                    .point()
                    .position("date*buyin")
                    .size("date", function(val) {
                        if (TICKS.indexOf(val) >= 0) {
                            return 3;
                        }
                        return 0;
                    })
                    .label(
                        "date*buyin",
                        function(date, buyin) {
                            if (TICKS.indexOf(date) >= 0) {
                                return buyin + "万";
                            }
                            return "";
                        },
                        {
                            textStyle: {
                                fill: "#7a7a7a",
                                fontSize: 12,
                                stroke: "white",
                                lineWidth: 2,
                                fontWeight: 300
                            }
                        }
                    )
                    .style({
                        lineWidth: 2
                    });

                this.chart.guide().line({
                    top: true,
                    start: ["2012-09", 5396],
                    end: ["2018-02", 5396],
                    lineStyle: {
                        stroke: "#595959",
                        lineWidth: 1,
                        lineDash: [3, 3]
                    },
                    text: {
                        position: "start",
                        style: {
                            fill: "#8c8c8c",
                            fontSize: 12,
                            fontWeight: 300
                        },
                        content: "均值线 5,396万",
                        offsetY: -5
                    }
                });
                this.chart.render();
            }
        }
    };
</script>