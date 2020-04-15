<template>
    <div :id="id"></div>
</template>
<script>
    import DataSet from "@antv/data-set";
    import { Chart } from "@antv/g2";

    export default {
        data() {
            return {
                chart: null
            };
        },
        props: {
            height: Number,
            id: String
        },
        mounted: function() {
            this.initChart();
        },
        methods: {
            initChart() {
                const data = [
                    { month: "1", ACME: 162 },
                    { month: "2", ACME: 134 },
                    { month: "3", ACME: 116 },
                    { month: "4", ACME: 122 },
                    { month: "5", ACME: 178 },
                    { month: "6", ACME: 144 },
                    { month: "7", ACME: 125 },
                    { month: "8", ACME: 176 },
                    { month: "9", ACME: 156 },
                    { month: "10", ACME: 195 },
                    { month: "11", ACME: 215 },
                    { month: "12", ACME: 176 }
                ];

                const dv = new DataSet.View().source(data);
                dv.transform({
                    type: "fold",
                    fields: ["ACME"],
                    key: "type",
                    value: "value"
                });

                console.log(dv);
                const chart = new Chart({
                    container: this.id,
                    autoFit: true,
                    height: this.height
                });

                chart.data(dv.rows);
                chart.scale({
                    month: {
                        range: [0, 1],
                        formatter: val => {
                            return `${val}月`;
                        }
                    }
                });

                chart.tooltip({
                    showCrosshairs: true,
                    shared: true
                });

                chart
                    .area()
                    .position("month*value")
                    .color("type")
                    .shape("smooth");
                chart
                    .line()
                    .position("month*value")
                    .color("type")
                    .shape("smooth");
                chart.render();
            }
        }
    };
</script>