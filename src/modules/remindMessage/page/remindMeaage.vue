<template>
  <section class="section">
    <el-row>
      <div class="show-section top">
        <span class="show-section-title">提醒信息管理</span>
      </div>
    </el-row>
    <el-row>
      <el-col :span="3">
        <el-button round>设备号</el-button>
      </el-col>
      <el-col :span="3">
        <el-button round>设备号</el-button>
      </el-col>
    </el-row>
  </section>
</template>
<style>
.section {
  background-color: #fff;
  /*  height: 100px;*/
}

.show-section {
  border-radius: 4px;
  height: 30px;
}

.show-section-title {
  margin-top: 10px;

}

.show-section.top {
  font-size: 24px;
  font-weight: bold;

}

</style>
