<template>
    <div>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-card shadow="never" class="mb-item">
                    <div slot="header">
                        <span>访问量</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <el-tooltip content="指标说明" placement="top">
                                <i class="el-icon-warning-outline"></i>
                            </el-tooltip>
                        </el-button>
                    </div>
                    <div class="numeral">25,848</div>
                    <div class="card-content">
                        日同比 12.5%
                        <i class="el-icon-caret-top" style="color:#ed4014"></i> 周同比 5%
                        <i class="el-icon-caret-bottom" style="color:#19be6b"></i>
                    </div>
                    <div class="card-footer">
                        <span class="footer-label">总访问量</span>
                        <span class="footer-number">80 万</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-card shadow="never" class="mb-item">
                    <div slot="header">
                        <span>总销售额</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <el-tooltip content="指标说明" placement="top">
                                <i class="el-icon-warning-outline"></i>
                            </el-tooltip>
                        </el-button>
                    </div>
                    <div class="numeral">¥142,000</div>
                    <div class="card-content">
                        <g2-custom :data="yearData" :option="chart1"></g2-custom>
                    </div>
                    <div class="card-footer">
                        <span class="footer-label">月销售额</span>
                        <span class="footer-number">¥23,122</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-card shadow="never" class="mb-item">
                    <div slot="header">
                        <span>订单量</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <el-tooltip content="指标说明" placement="top">
                                <i class="el-icon-warning-outline"></i>
                            </el-tooltip>
                        </el-button>
                    </div>
                    <div class="numeral">25,848</div>
                    <div class="card-content">
                        <g2-custom :data="yearData" :option="chart2"></g2-custom>
                    </div>
                    <div class="card-footer">
                        <span class="footer-label">转化率</span>
                        <span class="footer-number">60%</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-card shadow="never" class="mb-item">
                    <div slot="header">
                        <span>运营活动效果</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <el-tooltip content="指标说明" placement="top">
                                <i class="el-icon-warning-outline"></i>
                            </el-tooltip>
                        </el-button>
                    </div>
                    <div class="numeral">78%</div>
                    <div class="card-content">
                        <el-progress :show-text="false" :stroke-width="10" :percentage="78" status="success"></el-progress>
                    </div>
                    <div class="card-footer">
                        <span>
                            周同比 12%
                            <i class="el-icon-caret-top" style="color:#ed4014"></i>
                            日同比 11%
                            <i class="el-icon-caret-bottom" style="color:#19be6b"></i>
                        </span>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-card shadow="never" class="rank-card">
            <div slot="header">
                <span>访问趋势</span>
                <div style="float: right;margin-top: -5px;">
                    <el-radio-group v-model="type" size="small" style="margin-right: 5px;">
                        <el-radio-button label="1">本周</el-radio-button>
                        <el-radio-button label="2">本月</el-radio-button>
                        <el-radio-button label="3">全年</el-radio-button>
                    </el-radio-group>
                    <el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="small"></el-date-picker>
                </div>
            </div>
            <div class="rank-card-body">
                <el-row :gutter="30">
                    <el-col :xs="24" :sm="12" :md="18" :lg="18">
                        <g2-custom :data="monthData" :option="chart3"></g2-custom>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" class="rank">
                        <span class="ranking-title">门店访问量排名</span>
                        <ul class="ranking-list">
                            <li v-for="(item,index) in 7" :key="index">
                                <span :class="{'ranking-item-index':true,'check':index<3}">{{index+1}}</span>
                                <span class="ranking-item-name">云游路{{index+1}}号</span>
                                <span class="ranking-item-number">315,241</span>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
        </el-card>

        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card shadow="never" style="min-height:580px;">
                    <div slot="header">
                        <span>热门搜索</span>
                    </div>
                    <div>
                        <el-row :gutter="20">
                            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                                <div>
                                    <h5>
                                        搜索用户数
                                        <el-tooltip content="指标说明" placement="top">
                                            <i class="el-icon-warning-outline"></i>
                                        </el-tooltip>
                                    </h5>
                                    <div style="margin-top: 10px;">
                                        <span style="font-size:20px;margin-right: 30px;">32,155</span>
                                        <span>
                                            16.8
                                            <i class="el-icon-caret-top" style="color:#ed4014"></i>
                                        </span>
                                    </div>
                                </div>
                                <g2-custom :data="yearData" :option="chart4" :height="80"></g2-custom>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                                <div>
                                    <h5>
                                        人均搜索次数
                                        <el-tooltip content="指标说明" placement="top">
                                            <i class="el-icon-warning-outline"></i>
                                        </el-tooltip>
                                    </h5>
                                    <div style="margin-top: 10px;">
                                        <span style="font-size:20px;margin-right: 30px;">3.5</span>
                                        <span>
                                            1.8
                                            <i class="el-icon-caret-bottom" style="color:#19be6b"></i>
                                        </span>
                                    </div>
                                </div>
                                <g2-custom :data="yearData" :option="chart4" :height="80"></g2-custom>
                            </el-col>
                        </el-row>
                        <el-table :data="tableData" style="width: 100%" size="mini">
                            <el-table-column prop="index" label="排名" width="50"></el-table-column>
                            <el-table-column prop="keyStr" label="搜索关键词">
                                <template slot-scope="scope">
                                    <el-button style="font-size:12px" type="text">{{ scope.row.keyStr }}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="count" sortable label="用户数">
                                <template slot-scope="scope">
                                    <span style="font-size:12px">{{ scope.row.count }}人</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="bl" sortable label="周涨幅">
                                <template slot-scope="scope">
                                    <span style="font-size:12px">
                                        {{ scope.row.bl }}%
                                        <i class="el-icon-caret-top" style="color:#ed4014" v-if="scope.row.bl >0"></i>
                                        <i class="el-icon-caret-bottom" style="color:#19be6b" v-else></i>
                                    </span>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div style="margin-top: 10px;text-align: right;">
                            <el-pagination layout="prev, pager, next" :page-size="pageSize" :total="tab_data.length" @current-change="(page)=>pageIndex=page"></el-pagination>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card shadow="never" style="min-height:580px;">
                    <div slot="header">
                        <span>用户画像</span>
                        <div style="float: right;margin-top: -5px;">
                            <el-radio-group v-model="userPortrait.type" size="small">
                                <el-radio-button label="age">年龄</el-radio-button>
                                <el-radio-button label="sex">性别</el-radio-button>
                                <el-radio-button label="area">区域</el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                    <g2-custom isdrawChart :height="400" :data="userPortrait[userPortrait.type]" :option="chart5"></g2-custom>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import g2Custom from "@/components/charts";
    export default {
        name: "analysis",
        components: {
            g2Custom
        },
        data() {
            return {
                yearData: this.createData(12),
                monthData: this.createData(30),
                type: 2,
                tab_data: (() => {
                    let arr = [];
                    for (let index = 0; index < 50; index++) {
                        arr.push({
                            index: index + 1,
                            keyStr: `搜索关键词-${index}`,
                            count: parseInt(Math.random() * 1000 + 1),
                            bl: parseInt(Math.random() * 100 - 20)
                        });
                    }
                    return arr;
                })(),
                pageIndex: 1,
                pageSize: 5,
                userPortrait: {
                    type: "age",
                    age: [
                        { item: "年龄段 0~20", count: 2500, percent: 0.25 },
                        { item: "年龄段 20~30", count: 4000, percent: 0.4 },
                        { item: "年龄段 30~40", count: 2000, percent: 0.2 },
                        { item: "年龄段 40~50", count: 1000, percent: 0.1 },
                        { item: "年龄段 50~", count: 500, percent: 0.05 }
                    ],
                    sex: [
                        { item: "男", count: 5000, percent: 0.5 },
                        { item: "女", count: 4000, percent: 0.4 },
                        { item: "其他", count: 1000, percent: 0.1 }
                    ],
                    area: [
                        { item: "华东", count: 2000, percent: 0.2 },
                        { item: "华南", count: 2000, percent: 0.2 },
                        { item: "中南", count: 2000, percent: 0.2 },
                        { item: "华北", count: 1000, percent: 0.1 },
                        { item: "东北", count: 1000, percent: 0.1 },
                        { item: "西南", count: 1000, percent: 0.1 },
                        { item: "西北", count: 1000, percent: 0.1 }
                    ]
                }
            };
        },
        computed: {
            tableData() {
                return this.tab_data.filter(
                    item =>
                        item.index >
                            this.pageIndex * this.pageSize - this.pageSize &&
                        item.index <= this.pageIndex * this.pageSize
                );
            }
        },
        methods: {
            createData(length) {
                let arr = [];
                for (let index = 0; index < length; index++) {
                    arr.push({
                        key: index + 1,
                        value: parseInt(Math.random() * 10 + 1)
                    });
                }
                return arr;
            },
            chart1(chart, data) {
                chart.data(data);
                chart.tooltip({
                    showTitle: false,
                    containerTpl: `<div class="g2-tooltip"><ul class="g2-tooltip-list"></ul></div>`,
                    itemTpl: `<div style='line-height: 30px;'>{key} 销售 {value} </div>`
                });
                chart.scale("value", {
                    ticks: [0, 15]
                });
                chart.axis(false);
                chart
                    .area()
                    .position("key*value")
                    .shape("smooth")
                    .color("#975fe4")
                    .style({
                        fillOpacity: 1
                    })
                    .tooltip("key*value", (key, value) => {
                        return {
                            key: `${key}月`,
                            value: `${value}万`
                        };
                    });
                chart.render();
            },
            chart2(chart, data) {
                chart.data(data);
                chart.scale({
                    value: { min: 0 },
                    key: { min: 0.5, max: 12.5 }
                });
                chart.tooltip({
                    showTitle: false,
                    containerTpl: `<div class="g2-tooltip"><ul class="g2-tooltip-list"></ul></div>`,
                    itemTpl: `<div style='line-height: 30px;'>{key} 销售 {value} </div>`
                });
                chart.scale("value", { nice: true });
                chart.axis(false);
                chart
                    .interval()
                    .position("key*value")
                    .color("#3aa1ff")
                    .style({
                        fillOpacity: 1
                    })
                    .tooltip("key*value", (key, value) => {
                        return {
                            key: `${key}月`,
                            value: `${value}万`
                        };
                    });
                chart.render();
            },
            chart3(chart, data) {
                chart.data(data);
                chart.scale({
                    value: {
                        nice: true
                    },
                    key: {
                        ticks: Array.from(Array(30), (v, k) => k + 1),
                        formatter(value) {
                            return `${value}日`;
                        }
                    }
                });

                chart.tooltip({
                    showTitle: false,
                    containerTpl: `<div class="g2-tooltip"><ul class="g2-tooltip-list"></ul></div>`,
                    itemTpl: `<div style='line-height: 30px;'>{key} 访问 {value} </div>`
                });
                chart
                    .line()
                    .position("key*value")
                    .shape("smooth")
                    .color("#3aa1ff")
                    .style({
                        fillOpacity: 1
                    })
                    .tooltip("key*value", (key, value) => {
                        return {
                            key: `${key}号`,
                            value: `${value}万`
                        };
                    });
                chart.render();
            },
            chart4(chart, data) {
                chart.data(data);
                chart.tooltip({
                    showTitle: false,
                    containerTpl: `<div class="g2-tooltip"><ul class="g2-tooltip-list"></ul></div>`,
                    itemTpl: `<div style='line-height: 30px;'>{key}    {value} </div>`
                });
                chart.scale("value", {
                    ticks: [0, 15]
                });
                chart.axis(false);
                chart
                    .line()
                    .position("key*value")
                    .shape("smooth")
                    .color("#38acfa");
                chart
                    .area()
                    .position("key*value")
                    .shape("smooth")
                    .color("#38acfa58")
                    .style({
                        fillOpacity: 1
                    })
                    .tooltip("key*value", (key, value) => {
                        return {
                            key: `${key}月`,
                            value: `${value}`
                        };
                    });
                chart.render();
            },
            chart5(chart, data) {
                chart.data(data);
                chart.scale("percent", {
                    formatter: val => {
                        val = val * 100 + "%";
                        return val;
                    }
                });
                chart.coordinate("theta", {
                    radius: 0.7,
                    innerRadius: 0.7
                });

                chart.annotation().text({
                    position: ["50%", "50%"],
                    content: `总人数 ${data.reduce(
                        (prev, next) =>
                            (!prev.count ? prev : prev.count) + next.count
                    )}`,
                    style: {
                        fontSize: 14,
                        fill: "#8c8c8c",
                        textAlign: "center"
                    }
                });

                chart.tooltip({
                    showTitle: false,
                    showMarkers: false,
                    itemTpl:
                        '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                });
                chart.legend("item", {
                    custom: true,
                    position: "right",
                    offsetX: -20,
                    items: data.map((obj, index) => {
                        return {
                            name: obj.item,
                            value: obj.percent,
                            marker: {
                                symbol: "square",
                                style: {
                                    r: 5,
                                    fill: chart.getTheme().colors10[index]
                                }
                            }
                        };
                    }),
                    itemValue: {
                        style: {
                            fill: "#999"
                        },
                        formatter: val => `${val * 100}%`
                    }
                });

                const interval = chart
                    .interval()
                    .adjust("stack")
                    .position("percent")
                    .color("item")
                    .tooltip("item*percent", (item, percent) => {
                        percent = percent * 100 + "%";
                        return {
                            name: item,
                            value: percent
                        };
                    })
                    .style({
                        lineWidth: 4,
                        stroke: "#fff"
                    });

                chart.interaction("element-single-selected");
                chart.render();
                // 默认选择
                interval.elements[0].setState("selected", true);
            }
        }
    };
</script>

<style lang="less" scoped>
    .mb-item {
        margin-bottom: 20px;

        /deep/.el-card__body {
            padding: 12px;
        }
        .numeral {
            font-size: 30px;
        }
        .card-content {
            font-size: 14px;
            padding-top: 10px !important;
            height: 40px;
        }
        .card-footer {
            border-top: 1px solid #f0f0f0;
            margin-top: 10px;
            padding-top: 10px;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
        }
    }
    .rank-card {
        margin-bottom: 20px;

        .rank-card-body {
            height: 300px;
            .el-row,
            .el-col {
                height: 100%;
            }
            .rank {
                .ranking-list {
                    list-style: none;
                    li {
                        color: rgba(0, 0, 0, 0.65);
                        font-size: 14px;
                        line-height: 22px;
                        margin-top: 16px;

                        .ranking-item-index {
                            margin-right: 20px;
                            width: 20px;
                            height: 20px;
                            text-align: center;
                            display: inline-block;
                            &.check {
                                border-radius: 50%;
                                background: #314659;
                                color: #fff;
                            }
                        }

                        .ranking-item-number {
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>