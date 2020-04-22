<template>
    <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
            <el-card shadow="never" style="margin-bottom: 24px;">
                <div class="user-header">
                    <el-avatar :size="100" :src="user.avatar"></el-avatar>
                    <div class="user-name">{{user.name}}</div>
                    <div class="user-desc">{{user.desc}}</div>
                </div>
                <div class="user-detail">
                    <p>
                        <i class="el-icon-bank-card"></i> 前端工程师
                    </p>
                    <p>
                        <i class="el-icon-wind-power"></i> 某某某事业群－某某平台部－某某技术部
                    </p>
                    <p>
                        <i class="el-icon-location-outline"></i> 浙江省杭州市
                    </p>
                </div>
                <div class="user-tags">
                    <p>标签</p>
                    <el-tag :disable-transitions="false" :key="tag" v-for="tag in user.tags" type="info">{{tag}}</el-tag>
                    <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
                    <el-tag :disable-transitions="false" v-else type="info" @click="inputVisible=true" style="cursor: pointer;">+</el-tag>
                </div>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
            <el-card shadow="never">
                <el-tabs v-model="activeName">
                    <el-tab-pane :label="`文章（${articleData.length}）`" name="article">
                        <com-list :data="articleData">
                            <template #default="{data}">
                                <div class="article-item">
                                    <div class="title">{{data.title}}</div>
                                    <div class="tags">
                                        <el-tag type="info" size="mini" v-for="item in data.tags" :key="item">{{item}}</el-tag>
                                    </div>
                                    <div class="desc">{{data.desc}}</div>
                                    <div class="extra">
                                        <el-avatar size="small" :src="data.user.url"></el-avatar>
                                        <el-button type="text" style="margin-right: 5px;">{{data.user.name}}</el-button>发表于
                                        <span class="time">{{data.time}}</span>
                                    </div>
                                    <div class="action-item">
                                        <span>
                                            <i class="el-icon-star-off"></i>
                                            {{data.star}}
                                        </span>
                                        <span>
                                            <i class="el-icon-thumb"></i>
                                            {{data.like}}
                                        </span>
                                        <span>
                                            <i class="el-icon-chat-dot-square"></i>
                                            {{data.message}}
                                        </span>
                                    </div>
                                </div>
                            </template>
                        </com-list>
                    </el-tab-pane>
                    <el-tab-pane :label="`项目（${projectData.length}）`" name="project">
                        <el-row :gutter="20">
                            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" v-for="(item,index) in projectData" :key="index" style="margin:10px 0">
                                <el-card :body-style="{ padding: '0px' }" shadow="hover" class="project-card">
                                    <img :src="item.img" class="image" />
                                    <div class="project-content">
                                        <h4 class="name">{{item.name}}</h4>
                                        <div class="desc">{{item.desc}}</div>
                                    </div>
                                    <div class="project-footer">
                                        <div class="time">{{item.time}}</div>
                                        <avatar-list size="small" :list="avatarList"></avatar-list>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import avatar from "@/assets/avatar.jpg";
    import ComList from "@/components/com-list";
    import AvatarList from "@/components/avatar-list";
    import { GetDrticleData, GetProjectData } from "@/api/account";

    export default {
        name: "center",
        data() {
            return {
                inputVisible: false,
                inputValue: "",
                activeName: "article",
                user: {
                    avatar,
                    name: "白云苍狗",
                    desc: "醒，亦在人间；梦，亦在人间",
                    tags: [
                        "很有想法的",
                        "专注设计",
                        "海纳百川",
                        "最强王者",
                        "落地成盒",
                        "大神"
                    ]
                },
                articleData: [],
                projectData: [],
                avatarList: [
                    { text: "白", name: "白云苍狗" },
                    { icon: "el-icon-user-solid" },
                    { src: avatar, name: "白云苍狗" }
                ]
            };
        },
        components: {
            ComList,
            AvatarList
        },
        created() {
            GetDrticleData().then(({ data: { data } }) => {
                this.articleData = data;
            });
            GetProjectData().then(({ data: { data } }) => {
                this.projectData = data;
            });
        },
        methods: {
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.user.tags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = "";
            }
        }
    };
</script>

<style lang="less" scoped>
    .user-header {
        margin-bottom: 24px;
        text-align: center;

        .user-name {
            margin: 4px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
        }

        .user-desc {
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
        }
    }

    .user-detail {
        border-bottom: 1px dashed #f0f0f0;
        padding-bottom: 24px;
        margin-bottom: 24px;

        p {
            position: relative;
            margin-bottom: 8px;
            padding-left: 26px;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
        }
    }
    .user-tags {
        border-bottom: 1px dashed #f0f0f0;
        padding-bottom: 24px;
        margin-bottom: 24px;

        > p {
            margin-bottom: 10px;
        }
        .el-tag {
            margin-right: 10px;
            margin-bottom: 10px;
        }

        .input-new-tag {
            width: 90px;
            vertical-align: top;
        }
    }

    .article-item {
        .title {
            color: rgba(0, 0, 0, 0.85);
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 12px;
        }
        .tags {
            margin-bottom: 12px;
            .el-tag {
                margin-right: 5px;
            }
        }
        .desc {
            margin-bottom: 12px;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            max-width: 720px;
            line-height: 22px;
        }
        .extra {
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.45);
            .time {
                margin-left: 5px;
            }
        }
        .action-item {
            > span {
                cursor: pointer;
                color: rgba(0, 0, 0, 0.45);
                font-size: 14px;
                line-height: 22px;
                text-align: center;

                + span {
                    margin-left: 10px;
                    padding-left: 10px;
                    border-left: 1px solid #f1f1f1;
                }
            }
        }
        + .article-item {
            border-top: 1px solid #f1f1f1;
        }
    }

    .project-card {
        .image {
            vertical-align: middle;
            border-style: none;
            width: 100%;
        }

        .project-content {
            margin: 16px 20px 10px 20px;
            .desc {
                height: 44px;
                overflow: hidden;
                line-height: 22px;
                font-size: 14px;
                color: rgba(0, 0, 0, 0.45);
            }
        }

        .project-footer {
            display: flex;
            height: 20px;
            margin: 16px 20px 10px 20px;
            line-height: 20px;
            align-items: center;
            justify-content: space-between;

            .time {
                color: rgba(0, 0, 0, 0.45);
                font-size: 12px;
            }
        }
    }
</style>