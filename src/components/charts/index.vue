<template>
    <div :id="id" style="height:100%"></div>
</template>

<script>
    import { Chart } from "@antv/g2";

    export default {
        name: "g2-custom",
        props: {
            // DOM 高度
            height: {
                type: Number,
                default: null
            },
            option: {
                Type: Function
            },
            data: {
                type: Array,
                default: () => []
            },
            isdrawChart: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                chart: null
            };
        },
        watch: {
            // 监控data，当发生变化时，重新绘制图表
            data: function(val) {
                if (!this.isdrawChart) this.chart.changeData(val);
                else this.drawChart(val);
            }
        },
        methods: {
            uuid() {
                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 36; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }
                s[14] = "4";
                s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
                s[8] = s[13] = s[18] = s[23] = "-";
                var uuid = s.join("");
                return uuid;
            },
            drawChart: function(data) {
                // 销毁实例
                if (this.chart) {
                    this.chart.destroy();
                }

                // 新建实例
                this.chart = new Chart({
                    container: this.id,
                    autoFit: true,
                    height: this.height
                });

                // 自定义构建
                this.option(this.chart, data);

                // 绘制
                this.chart.render();
                // 销毁实例
                this.$once("hook:beforeDestroy", function() {
                    this.chart.destroy();
                });
            }
        },
        created() {
            this.id = this.uuid();
        },
        mounted() {
            this.drawChart(this.data);
        }
    };
</script>
