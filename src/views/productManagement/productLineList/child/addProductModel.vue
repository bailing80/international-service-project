<!--  添加产品型号界面 -->
<template>
  <el-dialog  title="添加型号"  :visible.sync="dialogTableVisible"  width="30%"   @close="dialogClose" :modal-append-to-body="false" >
    <el-form status-icon label-width="180px" class="demo-ruleForm">
      <el-form-item label="型号名称：" prop="modelName" v-model="form.modelName">
        <el-input type="text" style="width:50%"></el-input>
      </el-form-item>
      <el-form-item label="型号备注：" prop="modelNote" v-model="form.modelNote">
        <el-input type="text" style="width:50%"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
          modelName: '',
          modelNote: '',
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
    
     dialogClose () {
      this.$emit('dialogClose');
    }
  }
};
</script>

