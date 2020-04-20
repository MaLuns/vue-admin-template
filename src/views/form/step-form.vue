<template>
    <div>
        <page-header title="分步表单" desc="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。">
        </page-header>
        <el-card shadow="never">
            <el-steps :active="active" align-center simple process-status='finish' finish-status='finish'>
                <el-step title="填写转账信息"></el-step>
                <el-step title="确认转账信息"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
            <div>
                <div v-show="active===0">
                    <div class="step-index-form" style="width:500px">
                        <el-form :model="form" ref="form" label-width="100px">
                            <el-form-item label="付款账户:">
                                <el-select v-model="form.payAccount" style="width:100%;">
                                    <el-option label="18271858888" :value="0"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="收款账户:">
                                <el-input placeholder="请输入内容" v-model="form.receiverAccount" class="input-with-select">
                                    <el-select v-model="form.payAccountType" slot="prepend" placeholder="请选择">
                                        <el-option label="支付宝" :value="1"></el-option>
                                        <el-option label="微信" :value="2"></el-option>
                                        <el-option label="银行账户" :value="3"></el-option>
                                    </el-select>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="收款人姓名:">
                                <el-input placeholder="请输收款人姓名" v-model="form.receiverName"></el-input>
                            </el-form-item>
                            <el-form-item label="转账金额:">
                                <el-input placeholder="请输转账金额" v-model="form.amount"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="active=1;">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <el-divider></el-divider>
                    <div class="step-index-desc">
                        <h3>说明</h3>
                        <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
                    </div>
                </div>
                <div v-show="active===1">
                    <div class="step-index-form" style="width:500px">
                        <el-alert title="确认转账后，资金将直接打入对方账户，无法退回。" type="primary" show-icon> </el-alert>
                        <div class="account-desc">
                            <p>付款账户:<span>18271858888</span></p>
                            <p>收款账户:<span>{{form.receiverAccount}}</span></p>
                            <p>收款人姓名:<span>{{form.receiverName}}</span></p>
                            <p>转账金额:<span class="content-value-int">{{form.amount}}</span>元</p>
                        </div>
                        <el-divider></el-divider>
                        <div style="text-align: center;">
                            <el-form label-width="100px">
                                <el-form-item label="支付密码:">
                                    <el-input v-model="form.pwd" type='password'></el-input>
                                </el-form-item>
                            </el-form>
                            <el-button :loading="loading" type="primary" @click='onSubmit'>提交</el-button>
                            <el-button @click="active=0;">上一步</el-button>
                        </div>
                    </div>
                </div>
                <div v-show="active===3">
                    <div class="step3-index-result">
                        <div class="result-icon">
                            <i class="el-icon-success"></i>
                            <h2>操作成功</h2>
                            <p>预计两小时内到账</p>
                        </div>
                        <div class="result-content">
                            <p>付款账户:<span>18271858888</span></p>
                            <p>收款账户:<span>{{form.receiverAccount}}</span></p>
                            <p>收款人姓名:<span>{{form.receiverName}}</span></p>
                            <p>转账金额:<span class="content-value-int">{{form.amount}}</span>元</p>
                        </div>
                        <div style=" text-align: center;">
                            <el-button type="primary" @click="active=0;">再转一笔</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    import PageHeader from "@/components/page-header";
    export default {
        name: "step-form",
        data() {
            return {
                active: 0,
                loading: false,
                form: {
                    payAccount: 0,
                    payAccountType: 1,
                    receiverAccount: "test@example.com",
                    receiverName: "张三",
                    amount: 256,
                    pwd: "11111"
                }
            };
        },
        components: {
            PageHeader
        },
        methods: {
            onSubmit() {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.active = 3;
                }, 2000);
            }
        }
    };
</script>

<style lang="less">
    .step-index-form {
        position: relative;
        margin: 0 auto;
        margin-top: 50px;
        left: 0;
        right: 0;
        width: 500px;

        .input-with-select .el-input-group__prepend {
            background-color: #fff;
            .el-select .el-input {
                width: 110px;
            }
        }
    }

    .step-index-desc {
        padding: 0 56px;
        color: #00000073;
        h3 {
            font-weight: 500;
            margin: 0 0 12px;
            color: #00000073;
            font-size: 16px;
            line-height: 32px;
        }
        p {
            font-size: 14px;
            margin-top: 0;
            margin-bottom: 12px;
            line-height: 22px;
        }
    }

    .account-desc {
        margin-top: 20px;
        p {
            color: #000000d9;
            font-weight: 400;
            font-size: 14px;
            line-height: 1.5;
            margin: 15px 0;
            span {
                display: inline-block;
                margin: 0 10px;
                color: #00000091;
                font-size: 14px;
                line-height: 1.5;
                &.content-value-int {
                    color: #000000d9;
                    font-size: 24px;
                }
            }
        }
    }

    .step3-index-result {
        position: relative;
        margin: 0 auto;
        margin-top: 50px;
        left: 0;
        right: 0;
        width: 500px;

        .result-icon {
            text-align: center;
            i {
                font-size: 80px;
                color: #67c23a;
                margin-bottom: 20px;
            }
            h2 {
                color: #000000d9;
                font-size: 24px;
                line-height: 1.8;
                font-weight: 500;
            }
            p {
                color: #00000073;
                font-size: 14px;
                line-height: 1.6;
            }
        }

        .result-content {
            background-color: #fafafa;
            padding: 20px 30px;
            margin: 20px;
            p {
                color: #000000d9;
                font-weight: 400;
                font-size: 14px;
                line-height: 1.5;
                margin: 15px 0;
                span {
                    display: inline-block;
                    margin: 0 10px;
                    color: #00000091;
                    font-size: 14px;
                    line-height: 1.5;
                    &.content-value-int {
                        color: #000000d9;
                        font-size: 24px;
                    }
                }
            }
        }
    }
</style>