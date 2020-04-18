<template>
    <div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="18" :lg="18">
                <el-card shadow="never">
                    <div slot="header">
                        <span>最近1小时访问情况</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <el-tooltip content="指标说明" placement="top">
                                <i class="el-icon-warning-outline"></i>
                            </el-tooltip>
                        </el-button>
                    </div>
                    <g2-custom :height="500" :data="pvData" :option="chart1"></g2-custom>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <el-card shadow="never">
                            <div slot="header">
                                <span>当前在线</span>
                            </div>
                            <g2-custom :height="200" :option="chart1"></g2-custom>
                        </el-card>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <el-card shadow="never">
                            <div slot="header">
                                <span>当前活跃度</span>
                            </div>
                            <g2-custom :height="200" :option="chart1"></g2-custom>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <br />
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card shadow="never">
                    <div slot="header">
                        <span>平均评价</span>
                    </div>
                    <div>
                        <el-rate :value="4.3" disabled></el-rate>
                        <el-progress :percentage="70" type="dashboard" color="#67C23A" :format="()=>'5：368'"></el-progress>
                        <el-progress :percentage="10" color="#409EFF" :format="()=>'4：256'"></el-progress>
                        <el-progress :percentage="15" color="#E6A23C" :format="()=>'3：49'"></el-progress>
                        <el-progress :percentage="5" color="#F56C6C" :format="()=>'2：14'"></el-progress>
                        <el-progress :percentage="0" color="#909399" :format="()=>'0：0'"></el-progress>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-card shadow="never">
                    <div slot="header">
                        <span>客户满意度</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-card shadow="never">
                    <div slot="header">
                        <span>本月目标</span>
                    </div>
                    <div></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import g2Custom from "@/components/charts";
    export default {
        name: "monitor",
        data() {
            return {
                pvData: (() => {
                    let arr = [];
                    for (let index = 0; index < 15; index++) {
                        arr.push({
                            key: "10:" + index * 4,
                            value: parseInt(Math.random() * 10 + 10),
                            type: "UV"
                        });
                        arr.push({
                            key: "10:" + index * 4,
                            value: parseInt(Math.random() * 30 + 20),
                            type: "PV"
                        });
                    }
                    return arr;
                })()
            };
        },
        components: {
            g2Custom
        },
        methods: {
            format() {
                return `<div>124245</div>`;
            },
            createData(length, min = 200, type) {
                let arr = [];
                for (let index = 0; index < length; index++) {
                    arr.push({
                        key: index + 1,
                        value: parseInt(Math.random() * 100 + min),
                        type
                    });
                }
                return arr;
            },
            chart1(chart, data) {
                chart.data(data);

                chart.scale("value", {
                    ticks: [0, 20, 40, 60]
                });

                chart.legend({
                    position: "top-right",
                    offsetX: -50
                });

                chart.tooltip({
                    showTitle: false,
                    containerTpl: `<div class="g2-tooltip"><ul class="g2-tooltip-list"></ul></div>`,
                    itemTpl: `<div style='line-height: 30px;'><p>{key}</p> {name}  {value}</div>`
                });

                chart
                    .interval()
                    .position("key*value")
                    .shape("smooth")
                    .color("type")
                    .tooltip("key*value*type", (key, value, type) => {
                        return {
                            key,
                            name: type == "PV" ? "浏览量(PV)" : "访问量(UV)",
                            value
                        };
                    })
                    .adjust([
                        {
                            type: "dodge",
                            marginRatio: 0
                        }
                    ])
                    .color({
                        fields: ["type"],
                        values: ["#67C23Ab5", "#409EFFc5"]
                    });
                chart.render();
            }
        }
    };
</script>

<style>
</style>