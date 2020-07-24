<!--     员工管理     -->
<template>
   <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import HeaderNav from '@/components/headerNav'
export default {
name: 'popup',
    data () {
        return {
              form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
            searchData: "", // 搜索字段
            isAddStaff: false, // 是否显示添加部门
            isAuthFunctionPoint: false, // 功能权限点界面是否显示
            tableData: [
                {
                    name: '财务部',
                    age: '23',
                    state: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    name: '事业部',
                    age: '20',
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
       
    },
    methods: {
          onSubmit() {
        console.log('submit!');
      }
    },
         close (){
      this.$emit('close')
    },
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
            this.isAddStaff = true;
        },
        dialogClose(val) {
            switch (val) {
                case 'isAuthFunctionPoint':
                    // 关闭权限点页面
                    this.isAuthFunctionPoint = false;
                    break;
                case 'isAddStaff':
                    // 关闭添加用户界面
                    this.isAddStaff = false;
                    break;
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
                height: calc(100% - 50%);
                .operation-a {
                    display: inline-block;
                    cursor: pointer;
                }
            }
        }
    }
}
 .container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  .popup-header, .popup-footer{
    padding: 15px;
    display: flex;
  }
  .popup-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }
  .popup-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }
  .popup-body {
    position: relative;
    padding: 20px 10px;
  }
  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>

