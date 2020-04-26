<template>
    <div>
        <page-header title="权限测试"></page-header>
        <el-card shadow="never">
            <el-checkbox :value="authority.error" @change="updateAuthority($event,'error')">错误捕获</el-checkbox>
            <el-checkbox :value="authority.console" @change="updateAuthority($event,'console')">控制台日志</el-checkbox>
            <el-checkbox :value="authority.loglist" @change="updateAuthority($event,'loglist')">日志列表</el-checkbox>
            <el-checkbox :value="authority.i18n" @change="updateAuthority($event,'i18n')">多语言</el-checkbox>
        </el-card>
    </div>
</template>

<script>
    import PageHeader from "@/components/page-header";
    import { mapGetters } from "vuex";

    export default {
        name: "authority",
        components: {
            PageHeader
        },
        computed: {
            ...mapGetters(["user"]),
            authority() {
                return this.user.authority;
            }
        },
        methods: {
            updateAuthority(val, key) {
                this.$store.commit("user/update_authority", { key, val });
            }
        }
    };
</script>

<style>
</style>