<template>
    <div>
        <el-input type="textarea" v-model="comment"></el-input>
        <el-calendar>
            <template slot="dateCell" slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}</p>
            </template>
        </el-calendar>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                comment: ""
            };
        }
    };
</script>

<style lang="less">
</style>