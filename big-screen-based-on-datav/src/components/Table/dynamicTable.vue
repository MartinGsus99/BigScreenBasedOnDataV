<template>
<div class="mx-panel-table">
    <el-table v-loading="isLoading" :data="listData" ref="multipleTable" stripe row-key="id" :row-class-name="tableRowClassName">
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="number" label="数量"></el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    directives: {},

    props: {

        index: {
            default: false,
            type: Boolean
        },
        isLoading: {
            default: false,
            type: Boolean
        },
        listData: {
            default: null,
            type: Array
        },

    },
    beforeUpdate() {

    },
    methods: {
        tableRowClassName({
            row,
            rowIndex
        }) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        }
    },
}
</script>

<style lang="css">
.mx-panel-table {
    margin-bottom: 20px;
    border-bottom: 0;
    background-color: #131124;
}

.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #57a12f;
}
</style>
