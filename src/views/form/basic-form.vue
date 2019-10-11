<template>
    <div>
        <Page-Header title="基础表单" desc=" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。">
        </Page-Header>
        <el-card shadow="never">
            <div class="basic-form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="标题" prop="title">
                        <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="会议性质" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="需求" name="type"></el-checkbox>
                            <el-checkbox label="业务" name="type"></el-checkbox>
                            <el-checkbox label="进度" name="type"></el-checkbox>
                            <el-checkbox label="讨论" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="会议时间" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align: center;">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="会议内容" prop="content">
                        <el-input type="textarea" v-model="ruleForm.content"></el-input>
                    </el-form-item>

                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="ruleForm.comment"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    import PageHeader from "@/components/page-header";
    export default {
        name: "BasicForm",
        components: {
            PageHeader
        },
        data() {
            return {
                ruleForm: {
                    title: "",
                    date1: "",
                    date2: "",
                    type: [],
                    content: "",
                    comment: ""
                },
                rules: {
                    title: [
                        {
                            required: true,
                            message: "请输入会议名称",
                            trigger: "blur"
                        }
                    ],
                    date1: [
                        {
                            type: "date",
                            required: true,
                            message: "请选择日期",
                            trigger: "change"
                        }
                    ],
                    date2: [
                        {
                            type: "date",
                            required: true,
                            message: "请选择时间",
                            trigger: "change"
                        }
                    ],
                    type: [
                        {
                            type: "array",
                            required: true,
                            message: "请至少选择一个会议性质",
                            trigger: "change"
                        }
                    ],
                    content: [
                        {
                            required: true,
                            message: "请输入会议内容",
                            trigger: "blur"
                        }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        alert("submit!");
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>

<style lang="less" scoped>
    .basic-form {
        position: relative;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 500px;
    }
</style>