<template>
    <div>
        <!--    <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="11"> -->
        <line-chart></line-chart>
        <br>
        <!--  </el-col>
            <el-col :span="11"> -->
        <line-chart></line-chart>
        <!--  </el-col>
        </el-row> -->
    </div>
</template>

<script>
    import lineChart from "@/components/charts/line";

    export default {
        name: "dasdasd",
        components: {
            lineChart
        }
    };
</script>

<style>
</style>