 <!-- 产品线列表界面 -->
<template>
  <div class="page_view">
    <HeaderNav />
    <div class="page_body_area">
      <div class="tableTitle">
        <span>
          <i class="el-icon-news"></i>
          <span>公司列表</span>
        </span>
          <el-button type="success" icon="el-icon-plus" size="small" @click="addCompany">新增</el-button>
      </div>
      <div class="tableRow">
        <el-table :data="tableData"  stripe >
          <el-table-column prop="logo" label="logo" width="200"></el-table-column>
          <el-table-column prop="companyName" label="公司名称" width="200" ></el-table-column>
          <el-table-column prop="companyIntroduction" label="公司介绍" width="200" ></el-table-column>
          <el-table-column prop="url"   label="网址" width="200" ></el-table-column>
          <el-table-column prop="theme" label="主体风格" width="200"></el-table-column>
          <el-table-column prop="other" label="其他" width="200" ></el-table-column>
          <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button size="small" @click="addProModel">添加型号</el-button>
              <el-button size="small" @click="edit">编辑</el-button>
              <el-button size="small" @click="del">{{ '删除' || scope.row.id }}</el-button>
              <!-- <span class="operation-a">{{ '删除' || scope.row.id }}</span> -->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 添加编辑组件 -->
    <Edit v-if="isEdit" @dialogClose="dialogClose('isEdit')" />
    <!-- 添加产品线组件 -->
    <AddProductLine v-if="isAddProductLine" @dialogClose="dialogClose('isAddProductLine')" />
    <!-- 添加产品型号组件 -->
    <AddProductModel v-if="isAddProductModel" @dialogClose="dialogClose('isAddProductModel')" />
  </div>
</template>

<script>
import HeaderNav from "@/components/headerNav";
export default {
  data() {
    return {
      isEdit: false, // 是否显示编辑界面
      isAddProductLine: false, // 是否显示添加产品线界面
      isAddProductModel: false, // 是否显示添加产品型号界面
      tableData: [
        {
          logo: "",
          companyName: "北京谊安医疗",
          companyIntroduction: "真诚守护生命",
          url:"www.aeonmed.com",
          theme:"紫色",
          other:"谊安"
        },
         {
          logo: "",
          companyName: "北京谊安医疗",
          companyIntroduction: "真诚守护生命",
          url:"www.aeonmed.com",
          theme:"紫色",
          other:"谊安"
        },
         {
          logo: "",
          companyName: "北京谊安医疗",
          companyIntroduction: "真诚守护生命",
          url:"www.aeonmed.com",
          theme:"紫色",
          other:"谊安"
        },
      ],
     
    };
  },
  components: {
    HeaderNav,
  },
  methods: {
    del() {},
   addCompany(){


   },


    dialogClose(val) {
      switch (val) {
        case "isEdit":
          // 关闭编辑页面
          this.isEdit = false;
          break;
        case "isAddProductLine":
          // 关闭添加产品线界面
          this.isAddProductLine = false;
          break;
        // 关闭添加产品型号界面
        case "isAddProductModel":
          this.isAddProductModel = false;
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