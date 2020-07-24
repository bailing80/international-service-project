<template>
    <div class="page_view">
        <HeaderNav/>
        <div class="page_body">
            <div class="page_body_menu">
                <el-tree :data="treeData" :props="defaultProps"></el-tree>
            </div>
            <div class="page_body_area">
                <div class="search">
                    <el-input v-model="searchData" placeholder="请输入内容"></el-input>
                    <span class="search_btn">搜索sss</span>
                    <el-button type="info" size="small" class="add-cenlit" @click="addClient">添加用户</el-button>
                </div>
                <div class="table">
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="name" label="姓名"></el-table-column>
                        <el-table-column prop="age" label="年龄"></el-table-column>
                        <el-table-column prop="sex" label="性别"></el-table-column>
                        <el-table-column prop="state" label="状态"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <span class="operation-a" @click="openAuthPage">权限设置</span>
                                <span class="operation-a">锁定</span>
                                <span class="operation-a">编辑</span>
                                <span class="operation-a">{{ '删除' || scope.row.id }}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <!-- 功能权限组件 -->
        <!-- <AuthFunctionPoint v-if="isAuthFunctionPoint" @dialogClose="dialogClose('isAuthFunctionPoint')" /> -->
        <!-- 添加用户组件 -->
        <!-- <AddClientPage v-if="isAddClient" @dialogClose="dialogClose('isAddClient')" @addClientData="addClientData" /> -->
    </div>
</template>
<script>
import HeaderNav from '@/components/headerNav'
// import AuthFunctionPoint from './authFunctionPoint'
// import AddClientPage from "./addClientPage"
export default {
    name: 'clientAuth',
    data () {
        return {
            searchData: "", // 搜索字段
            isAddClient: false, // 是否显示添加用户界面
            isAuthFunctionPoint: false, // 功能权限点界面是否显示
            tableData: [
                {
                    name: '王小虎',
                    age: '23',
                    sex: '男',
                    state: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    name: '黑妞',
                    age: '20',
                    sex: '女',
                    state: '北京市'
                }
            ],
            treeData: [
                {
                    label: '集团',
                    children: [
                        {
                            label: '分公司1',
                            children: [
                                {
                                    label: '事业部'
                                }
                            ]
                        },
                        {
                            label: '分公司2',
                            children: [
                                {
                                    label: '呼吸部'
                                },
                                {
                                    label: '麻醉部'
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    components: {
        HeaderNav,
        // AuthFunctionPoint,
        // AddClientPage
    },
    methods: {
        // 添加员工
        addClientData (form) {
            this.tableData.push(form);
        },
        // 打开功能权限点界面
        openAuthPage() {
            this.isAuthFunctionPoint = true;
        },
        // 点击打开添加用户页面
        addClient () {
            this.isAddClient = true;
        },
        dialogClose(val) {
            switch (val) {
                case 'isAuthFunctionPoint':
                    // 关闭权限点页面
                    this.isAuthFunctionPoint = false;
                    break;
                case 'isAddClient':
                    // 关闭添加用户界面
                    this.isAddClient = false;
                    break;
            }
        }
    }

}
</script>
<style lang='less' scoped>
.page_view {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .page_body {
        position: absolute;
        top: 55px;
        width: 100%;
        height: calc(100% - 55px);
        &_menu {
            float: left;
            width: 240px;
            height: 100%;
            .el-tree {
                height: 100%;
                border-right: 1px solid #e6e6e6;
                background: none;
            }
        }
        &_area {
            float: right;
            width: calc(100% - 245px);
            height: 100%;
            overflow: hidden;
            .search {
                width: calc(100% - 40px);
                height: 50px;
                padding: 10px 20px;
                box-sizing: border-box;
                .el-input {
                    width: 400px;
                    float: left;
                }
                &_btn {
                    float: left;
                    display: block;
                    width: 60px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border: 1px solid #eaedf1;
                    border-left: none;
                    box-sizing: border-box;
                    cursor: pointer;
                }
                .add-cenlit {
                    float: right;
                }
            }
            .table {
                height: calc(100% - 50px);
                .operation-a {
                    display: inline-block;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>