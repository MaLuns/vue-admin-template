//未完成
<template>
    <div class="TableColumnShow">
        <div class="checkall">
            <el-checkbox :indeterminate="isindeterminate" v-model="checkAll" @change="handleCheckAllChange">展示列</el-checkbox>
        </div>
        <div class="check-item" v-show="leftFixed.arr.length>0">
            <span class="title">固定在左侧</span>
            <el-checkbox-group v-model="leftFixed.check" @change="handleCheckedCitiesChange">
                <div v-for="(item,index) in leftFixed.arr" :key="item.key" class="check-item-content">
                    <el-checkbox :label="item.key">{{item.name}}</el-checkbox>
                    <div>
                        <el-tooltip content="取消固定" placement="top">
                            <el-button type="text" @click="remove(item,index,'not','left')">
                                <i class="el-icon-d-caret"></i>
                            </el-button>
                        </el-tooltip>
                        <el-tooltip content="固定右边" placement="top">
                            <el-button type="text" @click="remove(item,index,'right','left')">
                                <i class="el-icon-caret-right"></i>
                            </el-button>
                        </el-tooltip>
                    </div>
                </div>
            </el-checkbox-group>
        </div>

        <div class="check-item" v-show="notFixed.arr.length>0">
            <span class="title" v-show="leftFixed.arr.length>0 || rightFixed.arr.length>0">不固定</span>
            <el-checkbox-group v-model="notFixed.check" @change="handleCheckedCitiesChange">
                <div v-for="(item,index) in notFixed.arr" :key="item.key" class="check-item-content">
                    <el-checkbox :label="item.key">{{item.name}}</el-checkbox>
                    <div>
                        <el-tooltip content="固定左边" placement="top">
                            <el-button type="text" @click="remove(item,index,'left')">
                                <i class="el-icon-caret-left"></i>
                            </el-button>
                        </el-tooltip>
                        <el-tooltip content="固定右边" placement="top">
                            <el-button type="text" @click="remove(item,index,'right')">
                                <i class="el-icon-caret-right"></i>
                            </el-button>
                        </el-tooltip>
                    </div>
                </div>
            </el-checkbox-group>
        </div>

        <div class="check-item" v-show="rightFixed.arr.length>0">
            <span class="title">固定在右侧</span>
            <el-checkbox-group v-model="rightFixed.check" @change="handleCheckedCitiesChange">
                <div v-for="(item,index) in rightFixed.arr" :key="item.key" class="check-item-content">
                    <el-checkbox :label="item.key">{{item.name}}</el-checkbox>
                    <div>
                        <el-tooltip content="固定左边" placement="top">
                            <el-button type="text" @click="remove(item,index,'left','right')">
                                <i class="el-icon-caret-left"></i>
                            </el-button>
                        </el-tooltip>
                        <el-tooltip content="取消固定" placement="top">
                            <el-button type="text" @click="remove(item,index,'not','right')">
                                <i class="el-icon-d-caret"></i>
                            </el-button>
                        </el-tooltip>
                    </div>
                </div>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ComTableColumnShow",
        props: {
            ColumnData: {
                type: Array,
                default() {
                    return [
                        {
                            key: "aaa",
                            name: "规则名"
                        },
                        {
                            key: "bbb",
                            name: "描述"
                        },
                        {
                            key: "ccc",
                            name: "状态"
                        },
                        {
                            key: "ddd",
                            name: "操作"
                        }
                    ];
                }
            }
        },
        data() {
            return {
                checkAll: true,

                notFixed: {
                    arr: [],
                    check: []
                },
                leftFixed: {
                    arr: [],
                    check: []
                },
                rightFixed: {
                    arr: [],
                    check: []
                }
            };
        },
        created() {
            this.re();
        },
        computed: {
            checkall() {
                return (
                    this.notFixed.arr.length +
                        this.leftFixed.arr.length +
                        this.rightFixed.arr.length ===
                    this.notFixed.check.length +
                        this.leftFixed.check.length +
                        this.rightFixed.check.length
                );
            },
            isindeterminate() {
                return (
                    this.notFixed.check.length +
                        this.leftFixed.check.length +
                        this.rightFixed.check.length >
                        0 && !this.checkall
                );
            }
        },
        watch: {
            checkall(val) {
                this.checkAll = val;
            }
        },
        methods: {
            re() {
                this.notFixed.arr = JSON.parse(JSON.stringify(this.ColumnData));
                this.notFixed.check = this.ColumnData.map(item => item.key);
            },
            handleCheckAllChange(val) {
                if (val) {
                    this.notFixed.check = this.notFixed.arr.map(item => item.key);
                    this.leftFixed.check = this.leftFixed.arr.map(item => item.key);
                    this.rightFixed.check = this.rightFixed.arr.map(
                        item => item.key
                    );
                } else {
                    this.notFixed.check = [];
                    this.leftFixed.check = [];
                    this.rightFixed.check = [];
                }
            },
            handleCheckedCitiesChange() {},
            remove(item, index, type, key = "not") {
                this[`${type}Fixed`].arr.push(item);
                this[`${key}Fixed`].arr.splice(index, 1);

                let idx = this[`${key}Fixed`].check.findIndex(
                    element => element == item.key
                );
                console.log(idx, this[`${key}Fixed`].check[idx]);
                if (idx > -1) {
                    this[`${type}Fixed`].check.push(this[`${key}Fixed`].check[idx]);
                    this[`${key}Fixed`].check.splice(idx, 1);
                }
            },
            change() {
                let arr = [...this.ColumnData.map(item => item.key)];
                this.$emit("change", {});
            }
        }
    };
</script>

<style lang="less" scoped>
    .TableColumnShow {
        background: #fff;
        display: inline-block;
        padding: 0 10px 10px;
        min-width: 150px;

        .checkall {
            border-bottom: 1px solid #f1f1f1;
            padding: 10px 0;
            margin-bottom: 10px;
        }

        .check-item {
            .title {
                display: inline-block;
                color: #8c8c8c;
                font-size: 12px;
            }

            .check-item-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 5px 0;

                /deep/.el-button {
                    padding: 0;
                }
            }
        }
    }
</style>