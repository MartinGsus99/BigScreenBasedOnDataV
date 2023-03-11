<template lang="">
<div>
    <dv-full-screen-container class='container'>
        <dv-border-box-13>
            <dv-loading v-show='loading' style="color:#fff;">Loading...</dv-loading>
            <el-container v-show='!loading'>
                <el-header>
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <div class="grid-content">
                                <Button label="首页"></Button>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content">
                                <Button label="技术中心"></Button>
                            </div>
                        </el-col>

                        <el-col :span="8">
                          
                            <div class="grid-content-title">
                                南京市电网智慧系统
                            </div>
                            <dv-decoration-10 style="width:100%;height:5px;" />

                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content">
                                <Button label="电网控制系统"></Button>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content">
                                <Button label="紧急停止"></Button>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <div class='main-container'>
                        <div class='main-col'></div>
                    </div>
                </el-main>
            </el-container>
        </dv-border-box-13>

    </dv-full-screen-container>
</div>
</template>

<script>
import Button from './components/Button/index.vue';
import EchartsMap from './components/DataContainer/MapComponent';
export default {
    name: 'App',
    components: {
        Button,
        EchartsMap
    },
    data() {
        return {
            loading: true,
        }
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 300)
    },
    methods: {

    }
}
</script>

<style lang="css">
.container {
    margin: 0px;
    background: url(./assets/img/bg2.jpeg) no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;

}

.el-col {
    margin-top: 20px;
    padding: 10px;

}

.grid-content {
    background-color: none;
    height: 60px;
    margin: 5%;
    padding-left: 20%;
}

.grid-content-title {
    text-align: center;
    font: 600;
    font-size: 30px;
    color: #fff;
    text-align: center;
}

.grid-content-body {
    background-color: #fff;
}

.row-item-wrapper {
    background-color: #fff;
    height: 30%;
}


.el-main{
    height: 100%;
}
.main-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.main-col{
    flex-grow: 1;
    background: #fff;
}
</style>
