<template>
    <com-result type="error" :text="text">
        <div class="content">
            <p>您提交的内容有如下错误：</p>
            <ul>
                <li>
                    您的账户已被冻结
                    <el-button type="text" size="small" style=" margin-left: 20px;">
                        立即解冻
                        <i class="el-icon-arrow-right"></i>
                    </el-button>
                </li>
                <li>
                    您的账户还不具备申请资格
                    <el-button type="text" size="small" style=" margin-left: 20px;">
                        立即升级
                        <i class="el-icon-arrow-right"></i>
                    </el-button>
                </li>
            </ul>
        </div>
        <div slot="footer">
            <el-button size="small" type="primary">返回修改</el-button>
        </div>
    </com-result>
</template>

<script>
    import comResult from "@/components/result";
    export default {
        name: "fail",
        components: {
            comResult
        },
        data() {
            return {
                text: "请核对并修改以下信息后，再重新提交。"
            };
        }
    };
</script>
<style lang="less" scoped>
    .content {
        font-size: 14px;
        line-height: 1;
        color: #1495eb;
        p {
            font-weight: 400;
            line-height: 2;
        }
        ul {
            li {
                margin-left: 20px;
            }
        }
    }
</style>
