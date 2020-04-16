<template>
    <div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="18" :lg="18">
                <el-card shadow="never">
                    <g2-line id="aaa" :height="500"></g2-line>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <el-card shadow="never">
                            <g2-line id="bbb" :height="200"></g2-line>
                        </el-card>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <el-card shadow="never">
                            <g2-line id="ccc" :height="200"></g2-line>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <br />
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card shadow="never">
                    <g2-line id="ddd" :height="300"></g2-line>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-card shadow="never">
                    <g2-line id="eee" :height="300"></g2-line>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-card shadow="never">
                    <g2-line id="fff" :height="300"></g2-line>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    /* import AreaChart from "@/components/charts/area";
 */
    export default {
        name: "monitor",
        components: {
            
        }
    };
</script>

<style>
</style>