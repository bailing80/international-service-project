<template>
  <div class="page_view">
    <HeaderNav />

    <div class="page_body_area">
      <div class="tableTitle">
        <span>
          <i class="el-icon-news"></i>
          <span>产品类别列表</span>
        </span>
        <span>
          <el-button type="success" icon="el-icon-plus"  size="small" @click="addProLine">新增</el-button>
        </span>
      </div>

      <div class="tableRow">
        <el-table :data="tableData" stripe >
          <el-table-column prop="language" label="语言"></el-table-column>
          <el-table-column label="操作" >
            <template slot-scope="scope">
              <span class="operation-a"  @click="edit">编辑</span>
              <span class="operation-a">{{ '删除' || scope.row.id }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 添加产品线组件 -->
    <AddProductLine v-if="isAddProductLine" @dialogClose="dialogClose('isAddProductLine')" style="position:absolute;top:500px;"/>
  </div>
</template>

<script>
import HeaderNav from "@/components/headerNav";
export default {
  data() {
    return {
      dialogVisible: false,
      isAddProductLine: false, // 是否显示添加用户界面
      tableData: [
        {
          categoryName: "呼吸机",
        },
         {
          categoryName: "麻醉机",
        },
          {
          categoryName: "手术灯",
        },
         {
          categoryName: "吊塔",
        },
        {
          categoryName: "升温毯",
         
        },
        {
          categoryName: "氧气阀",
        },
      ]
    };
  },
  components: {
    HeaderNav,
  },
  methods: {
    openAuthPage () {},
    edit(){},
    addProLine(){
      this.isAddProductLine = true
    },

    // 添加产品线
    addProductLine(form) {
      this.tableData.push(form);
    },
   
    dialogClose(val) {
      switch (val) {
        case "isAuthFunctionPoint":
          // 关闭权限点页面
          this.isAuthFunctionPoint = false;
          break;
        case "isAddClient":
          // 关闭添加用户界面
          this.isAddClient = false;
          break;
        case "isAddProductLine":
           this.isAddProductLine = false  
      }
    },
  },
};
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
  }
    .page_body_area {
      float: right;
      width: calc(100% - 10px);
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
        .el-table-column {
          text-align: center;
        }
      }
      .tableTitle {
        margin: 20px 0px 10px;
        line-height: 20px;
        font-size: 20px;
        font-weight: 700;
        color: #29affb;
        display: flex;
        justify-content: space-between;
      }
      .tableRow {
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        
        .workOrder {
          color: #29c0fc;
          cursor: pointer;
        }

        .el-table th {
          background-color: #f5f7fb;
          border-top: 1px solid #eaedf4;
        }
      }
      
    }
  }
</style>