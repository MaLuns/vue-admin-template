<template>
    <div>
        <page-header title="标准列表"></page-header>

        <el-row class="basic-heard">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <span>我的待办</span>
                    <p>8个任务</p>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <span>本周任务平均处理时间</span>
                    <p>32分钟</p>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <span>本周完成任务数</span>
                    <p>24个任务</p>
                </div>
            </el-col>
        </el-row>

        <el-card shadow="never">
            <div slot="header">
                <span>基础列表</span>
                <div style="float: right;margin-top: -5px;">
                    <el-radio-group v-model="type" size="small">
                        <el-radio-button label="全部"></el-radio-button>
                        <el-radio-button label="进行中"></el-radio-button>
                        <el-radio-button label="等待中"></el-radio-button>
                    </el-radio-group>
                    <el-input placeholder="请输入" size="small" v-model="inputStr" suffix-icon="el-icon-search" style="margin-left:10px;width:200px"></el-input>
                </div>
            </div>
            <div class="add-btn" @click="dialogFormVisible=true">
                <i class="el-icon-plus"></i> 新增
            </div>
            <com-list shape="square" :data="listData" class="basic-list">
                <template #content="{data}">
                    <div class="basic-list-item">
                        <span>Owner</span>
                        <p>{{data.user}}</p>
                    </div>
                    <div class="basic-list-item">
                        <span>开始时间</span>
                        <p>{{data.bagentime}}</p>
                    </div>
                    <div style="width: 250px;margin:0 20px">
                        <el-progress :percentage="data.number" :status="data.status"></el-progress>
                    </div>
                </template>
                <template #action>
                    <el-button type="text" style="padding:0">编辑</el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-dropdown>
                        <el-button type="text" style="padding:0">
                            更多
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>编辑</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </template>
            </com-list>
        </el-card>

        <el-dialog title="任务添加" :visible.sync="dialogFormVisible" width="500px">
            <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-form-item label="任务名称" :label-width="formLabelWidth" prop="title">
                    <el-input v-model="form.title" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="开始时间" :label-width="formLabelWidth" prop="bagentime">
                    <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" v-model="form.bagentime" type="datetime" style="width:300px" placeholder="选择日期时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="任务负责人" :label-width="formLabelWidth" prop="user">
                    <el-input v-model="form.user" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="产品描述" :label-width="formLabelWidth">
                    <el-input v-model="form.description" type="textarea" style="width:300px"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="save();dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import ComList from "@/components/com-list";
    import PageHeader from "@/components/page-header";
    import { GetBaseDataList } from "@/api/list";

    export default {
        name: "BasicList",
        components: {
            ComList,
            PageHeader
        },
        data() {
            return {
                type: "全部",
                inputStr: "",
                dialogFormVisible: false,
                listData: [],
                form: {
                    title: "",
                    bagentime: "",
                    user: "",
                    description: ""
                },
                rules: {
                    title: [
                        {
                            required: true,
                            message: "请输入任务名称",
                            trigger: "blur"
                        }
                    ],
                    bagentime: [
                        {
                            required: true,
                            message: "请输入开始时间",
                            trigger: "blur"
                        }
                    ],
                    user: [
                        {
                            required: true,
                            message: "请输入任务负责人",
                            trigger: "blur"
                        }
                    ]
                },
                formLabelWidth: "120px"
            };
        },
        mounted() {
            GetBaseDataList().then(({ data: { data } }) => {
                this.listData = data;
            });
        },
        methods: {
            save() {
                this.$refs.ruleForm.validate(valid => {
                    if (valid) {
                        this.listData.splice(0, 0, {
                            number: 0,
                            icon: "el-icon-s-platform",
                            status: "",
                            ...this.form
                        });
                    } else {
                        return false;
                    }
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .basic-heard {
        background: #fff;
        padding: 36px 20px;
        margin: 0 0 20px;
        .el-col {
            text-align: center;
            + .el-col {
                border-left: 1px solid #f1f1f1;
            }

            span {
                display: inline-block;
                margin-bottom: 4px;
                color: rgba(0, 0, 0, 0.45);
                font-size: 14px;
                line-height: 22px;
            }

            p {
                margin: 0;
                color: rgba(0, 0, 0, 0.85);
                font-size: 24px;
                line-height: 32px;
            }
        }
    }

    .add-btn {
        text-align: center;
        border: 1px dashed #f0f0f0;
        padding: 5px;
        margin-bottom: 10px;
        font-size: 14px;
        transition: all 0.3s;
        cursor: pointer;
        user-select: none;

        &:hover {
            color: #40a9ff;
            border-color: #40a9ff;
        }
    }

    .basic-list {
        /deep/.el-progress__text {
            font-size: 12px !important;
        }
        .basic-list-item {
            margin: 0 10px;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
        }
    }
</style>