<template lang="">
<div>
    <el-row>
        <el-col v-for="item in StaticData" :key="item.key" :span="item.span||6">
            <el-statistic  :style="{ 'font-size': '20px' }" v-if='item.type=="value"' group-separator="," :precision="item.precision" :value="item.value" :title="item.title">
                <template v-if="item.preIcon" slot='prefix'>
                    <i v-if="item.preIcon" :class="item.preIcon" :style="item.style"></i>
                </template>
                <template v-if="item.sufIcon" slot='suffix'>
                    <i v-if="item.sufIcon" :class="item.sufIcon" :style="item.style"></i>
                </template>
            </el-statistic>

        </el-col>

        <el-col v-if='timeShow' :span='3'>
            <div class='time-container'>
                <span class='time-title'>当前日期</span>
                <br>
                <span class='time-detail'>
                    {{this.time}}
                </span>
            </div>
        </el-col>
    </el-row>

</div>
</template>

    
<script>
export default {
    name: 'staticBar',
    props: {
        StaticData: {
            type: Array,
            default: null,
        },
        timeShow: {
            type: Boolean,
            dafault: false,
        }
    },
    data() {
        return {
            time: "",

        }
    },
    mounted() {
        this.currentTime();
    },
    methods: {
        //   时间
        currentTime() {
            setInterval(this.getTime, 500);
        },
        getTime() {
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            this.time =
                yy + "年 " + mm + "月" + dd + "日 ";
        }
    }
}
</script>

    
<style lang="css">
.time-container {
    text-align: center;

}

.time-title {
    font-size: 13px;
    font-weight: 10;
    margin-bottom: 3px;
}

.time-detail {
    font-size: 20px;
    font-weight: 30;
}

.el-statistic .head{
    font-size: 20px;
    color: white;
    opacity: 1;
    font-weight: 800;
}

.el-statistic .con .number{
    font-size: 23px;
    color: white;
    opacity: 0.70;
}

</style>
