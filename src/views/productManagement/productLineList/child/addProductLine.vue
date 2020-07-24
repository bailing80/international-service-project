<!--  添加产品线界面  -->
<template>
  <el-dialog title="添加产品线"  :visible.sync="dialogTableVisible" width="30%" @close="dialogClose" :modal-append-to-body="false">
    <el-form status-icon label-width="180px" class="demo-ruleForm">
      <el-form-item label="产品线名称："  prop="productLineName" v-model="form.productLineName">
        <el-input type="text" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item label="产品线备注：" prop="note" v-model="form.note">
        <el-input type="text" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button type="primary" @click="dialogClose">返回</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import HeaderNav from "@/components/headerNav";
export default {
  data() {
    return {
      form: {
          productLineName: '',
          note: '',
        },
      dialogTableVisible: true,
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  components: {
    HeaderNav,
  },
  methods: {
    submitForm() {},
    dialogClose () {
      this.$emit('dialogClose');
    }
  },
};
</script>
<style lang='less' scoped>
</style>

