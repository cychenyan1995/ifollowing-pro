<template>
  <section class="section">
    <el-row>
      <div class="show-section top">
        <span class="show-section-title">提醒信息管理</span>
      </div>
    </el-row>
    <el-row>
      <el-col :span="5">
        <el-button round class="show-section-btn">设备号</el-button>
        <span class="glyphicon glyphicon-search show-section-search" aria-hidden="true"></span>
      </el-col>
      <el-col :span="3">
        
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
.show-section-search{
  font-size: 24px;
  color: #20a0ff;
}
.show-section-btn{
  width: 150px;
}

</style>
