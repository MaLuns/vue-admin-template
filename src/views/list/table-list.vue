<template>
    <div>
        <page-header title="查询表格"></page-header>
        <div class="search-content">
            <p>
                <span>规则名称:</span>
                <el-input v-model="searh.name" placeholder="请输入内容" style="width:300px"></el-input>
            </p>
            <p>
                <span>描述:</span>
                <el-input v-model="searh.description" placeholder="请输入内容" style="width:300px"></el-input>
            </p>
            <p>
                <span>状态:</span>
                <el-input v-model="searh.name" placeholder="请输入内容" style="width:300px"></el-input>
            </p>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
        </div>
        <el-card shadow="never">
            <div class="table-headr">
                <el-button type="primary" icon="el-icon-plus" style="margin-right: 10px;">新增</el-button>
                <el-dropdown trigger="click" v-show="selection.length>0" style="margin-right: 10px;">
                    <el-button>批量操作</el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>批量删除</el-dropdown-item>
                        <el-dropdown-item>批量审批</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-divider direction="vertical"></el-divider>
                <el-tooltip content="密度" placement="top">
                    <el-dropdown trigger="click" placement="bottom">
                        <i class="el-icon-s-operation" style="font-size:20px;margin: 0 10px;"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="tableSize=''">默认</el-dropdown-item>
                            <el-dropdown-item @click.native="tableSize='medium'">中等</el-dropdown-item>
                            <el-dropdown-item @click.native="tableSize='small'">紧凑</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-tooltip>
                <el-tooltip content="刷新" placement="top">
                    <i @click="GetTableDataList()" class="el-icon-refresh-right" style="font-size:20px;margin: 0 10px;color:#606266"></i>
                </el-tooltip>
            </div>
            <el-alert type="primary" :closable="false" class="table-alert">
                <p>
                    <i class="el-icon-warning"></i>
                    已选择 {{selection.length}} 项 服务调用次数总计 {{sumCount}} 万
                </p>
                <el-button type="text" style="padding:0" @click="selection=[];$refs.table.clearSelection()">清空</el-button>
            </el-alert>
            <div>
                <el-table :size="tableSize" :data="tableData" style="width: 100%" @selection-change="SelectionChange" ref="table">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop="name" label="规则名称"></el-table-column>
                    <el-table-column prop="description" label="描述"></el-table-column>
                    <el-table-column prop="count" label="服务调用次数(万)"></el-table-column>
                    <el-table-column prop="state" label="状态">
                        <template slot-scope="{row}">
                            <span :class="['run-state',row.state]"></span>
                            {{ row.state=='close'?'关闭':'运行中' }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="time" label="上次调度时间"></el-table-column>
                    <el-table-column label="操作">
                        <template>
                            <el-button type="text">编辑</el-button>
                            <el-divider direction="vertical"></el-divider>
                            <el-button type="text">订阅警报</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
    import PageHeader from "@/components/page-header";
    import { GetTableDataList } from "@/api/list";

    export default {
        name: "TableList",
        components: {
            PageHeader
        },
        data() {
            return {
                tableData: [],
                tableSize: "",
                selection: [],
                searh: {}
            };
        },
        created() {
            this.GetTableDataList();
        },
        computed: {
            sumCount() {
                return this.selection.reduce(
                    (sum, current) => sum + current.count,
                    0
                );
            }
        },
        methods: {
            SelectionChange(selection) {
                this.selection = selection;
            },
            GetTableDataList() {
                GetTableDataList().then(({ data: { data } }) => {
                    this.tableData = data;
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .search-content {
        background: #fff;
        padding: 20px;
        margin-bottom: 20px;
        display: flex;
        > p {
            margin-right: 15px;
            > span {
                font-size: 14px;
                margin-right: 10px;
            }
        }
    }

    .table-headr {
        display: flex;
        align-items: center;
    }

    .table-alert {
        margin: 20px 0;
        /deep/ .el-alert__content {
            width: 100%;
            .el-alert__description {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0;
                font-size: 14px;
            }
        }
    }

    .run-state {
        position: relative;
        background: #d9d9d9;
        display: inline-block;
        width: 6px;
        height: 6px;
        vertical-align: middle;
        border-radius: 50%;
        margin-right: 5px;

        &.runing {
            background: #1890ff;
        }
        &.runing::before {
            background: #1890ff;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            content: "";
            animation: anStatusProcessing 1.2s ease-in-out infinite;
        }

        @keyframes anStatusProcessing {
            0% {
                transform: scale(0.8);
                opacity: 0.5;
            }
            to {
                transform: scale(2.4);
                opacity: 0;
            }
        }
    }
</style>