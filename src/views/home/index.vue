<template>
    <el-calendar>
        <template slot="dateCell" slot-scope="{date, data}">
            <p :class="data.isSelected ? 'is-selected' : ''">{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}</p>
        </template>
    </el-calendar>
</template>

<script>
    export default {
        name: "home"
    };
</script>

<style lang="less">
</style>