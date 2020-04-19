<template>
    <com-result :text="text">
        <p class="content">已提交申请，等待部门审核。 这个灰色区域可以呈现比较复杂的内容</p>
        <div slot="footer">
            <el-button size="small" type="primary">返回列表</el-button>
            <el-button size="small">查看项目</el-button>
            <el-button size="small">打印</el-button>
        </div>
    </com-result>
</template>

<script>
    import comResult from "@/components/com-result";
    export default {
        name: "success",
        data() {
            return {
                text:
                    "提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，下面这个灰色区域可以呈现比较复杂的内容。"
            };
        },
        components: {
            comResult
        }
    };
</script>

<style lang="less" scoped>
    .content {
        font-weight: 400;
        font-size: 14px;
        line-height: 2;
        color: #1495eb;
    }
</style>