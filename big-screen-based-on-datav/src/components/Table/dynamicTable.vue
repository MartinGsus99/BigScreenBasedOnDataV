<template>
  <el-table :data="tableData" style="width: 100%" :show-header="false">
    <el-table-column prop="name"> </el-table-column>
    <el-table-column prop="nums" :formatter="formatNums"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "Unknown",
          nums: 123456789,
        },
        {
          name: "Apache",
          nums: 123456789,
        },
        {
          name: "Ajax",
          nums: 123456789,
        },
        {
          name: "Spring",
          nums: 123456789,
        },
      ],
    };
  },
  methods: {
    formatNums(row, column, cellValue) {
        console.log(cellValue);
        if (typeof cellValue === 'number') {
                    return cellValue.toLocaleString(); // 使用千位分隔符的格式显示数字
                } else {
                    return cellValue;
                }
    },
  },
};
</script>

<style>
.el-table {
  background-color: transparent;
}

.el-table td,
.el-table th {
  color: #bab9b9;
  /* 将字体颜色设置为黑色 */
}

.el-table__body th {
  background-color: transparent;
}

.el-table__body tr {
  background-color: transparent;
}

.el-table__row:hover {
  background-color: transparent ;
}
</style>
