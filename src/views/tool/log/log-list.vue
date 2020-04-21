<template>
    <el-card shadow="never">
        <div slot="header">
            <span>前端日志</span>
            <el-button style="float: right; padding: 3px 0" type="text">
                <el-tooltip content="清空日志" placement="top">
                    <i class="el-icon-delete-solid" @click="clear"></i>
                </el-tooltip>
            </el-button>
        </div>
        <el-table :data="errorList" style="width: 100%" size="small">
            <el-table-column label="时间" width="180">
                <template slot-scope="scope">{{scope.row.time}}</template>
            </el-table-column>
            <el-table-column label="信息">
                <template slot-scope="scope">{{scope.row.message}}</template>
            </el-table-column>
            <el-table-column label="组件名/请求地址">
                <template slot-scope="scope">{{scope.row.meta.path}}</template>
            </el-table-column>
            <el-table-column label="类型" width="80" align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.type">{{scope.row.type}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="详细信息" width="100" align="center">
                <template slot-scope="{row}">
                    <el-button size="small" type="primary" @click="handclick(row)">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
    import { mapGetters } from "vuex";
    import { logprint } from "@/libs/util";
    export default {
        name: "log-list",
        computed: {
            ...mapGetters(["errorList"])
        },
        methods: {
            clear() {
                this.$store.commit("app/ClearLogInfo");
            },
            handclick(row) {
                this.$message("请在浏览器控制台查看完整日志");
                this.$log({
                    title: "白云苍狗",
                    type: "primary",
                    text: "完整日志内容"
                });
                logprint(row);
            }
        }
    };
</script>

<style lang="less" scoped>
    .el-tag--error {
        background-color: #fef0f0;
        border-color: #fde2e2;
        color: #f56c6c;
    }
</style>