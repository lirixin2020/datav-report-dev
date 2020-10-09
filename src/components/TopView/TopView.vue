<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales/TotalSales'
import TotalOrders from '../TotalOrders/TotalOrders'
import TodayUsers from '../TodayUsers/TodayUsers'
import TotalUsers from '../TotalUsers/TotalUsers'
export default {
  name: 'TopView',
  components: { TotalUsers, TodayUsers, TotalOrders, TotalSales }
}
</script>

<style lang="scss" scoped>

</style>
