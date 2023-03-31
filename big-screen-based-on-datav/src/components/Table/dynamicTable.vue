<template>
<el-table :data="tableData" style="width: 100%"  :show-header="false">
    <el-table-column prop="date" label="日期">
    </el-table-column>
    <el-table-column prop="name" label="姓名">
    </el-table-column>
</el-table>
</template>

  
<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    }
}
</script>

  
<style>
.el-table {
    background-color: transparent;
}

.el-table td, .el-table th {
  color: #bab9b9; /* 将字体颜色设置为黑色 */
}

.el-table__body th {
  background-color: transparent;
}

.el-table__body tr {
  background-color: transparent;
}
</style>
