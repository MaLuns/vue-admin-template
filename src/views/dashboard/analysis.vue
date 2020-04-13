<template>
    <div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-card shadow="never">
                    <g2-line id="aaa" :height="200"></g2-line>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-card shadow="never">
                    <g2-line id="ddd" :height="200"></g2-line>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-card shadow="never">
                    <g2-line id="ccc" :height="200"></g2-line>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-card shadow="never">
                    <g2-line id="eee" :height="200"></g2-line>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import G2Line from "@/components/charts/line";
    export default {
        name: "analysis",
        components: {
            G2Line
        },
        data() {
            return {
                serverData: []
            };
        }
    };
</script>

<style>
</style>