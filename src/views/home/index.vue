<template>
    <el-card shadow="never" class="user-config">
        <el-tabs tab-position="left">
            <el-tab-pane label="系统全局配置">用户管理</el-tab-pane>
            <el-tab-pane label="业务录单">配置管理</el-tab-pane>
            <el-tab-pane label="外勤业务">角色管理</el-tab-pane>
            <el-tab-pane label="配送业务">定时任务补偿</el-tab-pane>
            <el-tab-pane label="价格优先级别">定时任务补偿</el-tab-pane>
            <el-tab-pane label="报表单据">定时任务补偿</el-tab-pane>
            <el-tab-pane label="客户字段">定时任务补偿</el-tab-pane>
            <el-tab-pane label="拍照水印配置">定时任务补偿</el-tab-pane>
            <el-tab-pane label="自定义表头字段">定时任务补偿</el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less">
    .user-config {
        .el-tabs__item {
            text-align: left !important;
            margin: 4px 0;
            font-size: 14px;
            color: #000000a6;
            min-width: 160px;

            &.is-active {
                color: #409eff;
                background: #e6f7ff;
                font-weight: 800;
            }

            &::before {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                border-right: 3px solid #1890ff;
                transform: scaleY(0.0001);
                opacity: 0;
                transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
                    opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
                content: "";
            }

            &.is-active::before {
                transform: scaleY(1);
                opacity: 1;
                transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
                    opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
            }

            &:hover {
                color: #1890ff;
            }
        }
        .el-tabs__active-bar {
            display: none !important;
        }
    }
</style>