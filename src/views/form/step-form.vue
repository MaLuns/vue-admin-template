<template>
    <div>
        <Page-Header title="分步表单" desc="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。">
        </Page-Header>
        <el-card shadow="never">
            <el-steps :active="0" align-center simple>
                <el-step title="填写转账信息" status="wait">
                    <i class="el-icon-s-promotion" slot="icon"></i>
                </el-step>
                <el-step title="确认转账信息" status="process"></el-step>
                <el-step title="进行中" status="finish"></el-step>
                <el-step title="错误" status="error"></el-step>
                <el-step title="完成" status="success"></el-step>
            </el-steps>
        </el-card>
    </div>
</template>

<script>
    import PageHeader from "@/components/page-header";
    export default {
        name: "StepForm",
        components: {
            PageHeader
        }
    };
</script>

<style>
</style>