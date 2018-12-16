<template>
  <section class="section">
    <el-row>
      <div class="show-section top">
        <span class="show-section-title">提醒信息管理</span>
      </div>
    </el-row>
    <el-row>
      <el-col :span="3" :offset="1">
        <!--  <el-button round class=" show-section-btn">设备号</el-button> -->
        <!-- <el-input class="show-section-input" v-model="input" placeholder="设备号"></el-input> -->
        <div class="show-section-input el-input" clearable>
          <input type="text" autocomplete="off" v-model="input" placeholder="设备号" class="el-input__inner show-section-input">
        </div>
        <!-- <input class="show-section-input" v-model="input" placeholder="设备号"></input> -->
      </el-col>
      <el-col :span="2">
        <span class="glyphicon glyphicon-search show-section-search" aria-hidden="true"></span>
      </el-col>
      <el-col :span="1">
        <a class="show-section show-section-a" href="javascript:;" @click="clearSearch">清空</a>
      </el-col>
      <el-col :span="2">
        <a class="show-section show-section-a" href="javascript:;">导出列表</a>
      </el-col>
      <el-col :span="2" :offset="10">
        <el-popover placement="left" width="300" trigger="click" style="top: 290px;">
          <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="(item,index) in ckeckboxList" :class="index === 0 ? 'show-section-checkbox' : ''" :label="item"></el-checkbox>
          </el-checkbox-group>
          <div slot="reference">
            <span class="show-section show-section-select">筛选</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </el-popover>
      </el-col>
    </el-row>
    <div class="show-section-table">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="tel" label="手机号" width="120">
        </el-table-column>
        <el-table-column prop="deviceNo" label="设备号" width="120">
        </el-table-column>
        <el-table-column prop="date" label="时间" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="remindType" label="提醒类型" width="120">
        </el-table-column>
        <el-table-column prop="remindContent" label="提醒内容" width="300" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <!--  fixed="right" -->
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template slot-scope="scope"><span :class="[scope.row.status === 0 ? 'read-status' : '']">{{ scope.row.status === 1 ? '已读' : '未读' }}</span></template>
        </el-table-column>
      </el-table>
      <div class="block" style="float:right;">
        <el-pagination @size-change="handleSizeChange"
         @current-change="handleCurrentChange" 
         :current-page="currentPage" 
         :page-sizes="pageSizes" 
         :page-size="pageSize" 
         layout="total, sizes, prev, pager, next, jumper" 
         :total="400">
        </el-pagination>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      input: '',
      checkList: ['手机号'],
      ckeckboxList: ['手机号', '设备号', '时间类型', '提醒类型', '操作', '状态'],
      // tableData: [],
      pageSizes: [100, 200, 300, 400],
      pageSize: 100,
      currentPage: 1,
      // tableData: [{
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   status: 0
      // }, {
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   status: 0
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   status: 0
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   status: 1
      // }, {
      //   date: '2016-05-08',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   status: 0
      // }, {
      //   date: '2016-05-06',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   status: 0
      // }, {
      //   date: '2016-05-07',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   status: 1
      // }],
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange () {

    },
    clearSearch () {
      this.input = ''
    },
    getTableList (currPage) {
      this.currPage = currPage === 'undefined' ? 1 : currPage
      let params = {
        /*currPage: this.currPage,
        pageSize: this.pageSize*/
      }
      console.log(params)
      console.log(this.$store)
      /*this.$axios.get('/remindMessage/getTableList').then(res => {
        console.log(res)
      })*/
       this.$store.dispatch('fetchTableList', { param: params, ref: this })
    },
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
    },
    handleCurrentChange (currPage) {
      this.currPage = currPage
    }
  },
  mounted () {
    this.getTableList()
  },
  computed: mapState({
    tableData: state => {
      console.log(state)
      return state.remindMessage.tableData
    }
  })
}

</script>
<style>
.section {
  background-color: #fff;
  /*  height: 100px;*/
}

.show-section {
  border-radius: 4px;
  height: 60px;
}

.show-section-title {
  font-size: 24px;
  margin-top: 10px;

}

.show-section.top {
  font-weight: bold;

}

.show-section-search {
  font-size: 24px;
  color: #20a0ff;
  margin-left: 25px;
  margin-top: 65px;
}

.show-section-input {
  width: 150px;
  height: 40px;
  border-radius: 30px;
  text-align: center;
}

.show-section-a {
  text-decoration: underline;
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.show-section-table {
  margin: 0 30px;
  line-height: 30px;
}

.show-section-select {
  font-size: 20px;
}

.read-status {
  color: red;

}

.show-section-checkbox {
  margin-left: 30px;
}

</style>
