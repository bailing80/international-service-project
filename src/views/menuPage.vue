<template>
    <div class="accessManage">
        <div class="NavMenu">
            <NavMenu :menus="menusData" @changeMainLeft="changeMainLeft"/>
        </div>
        <div class="main" :style="{left: mainLeft}">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import NavMenu from '@/components/NavMenu';
export default {
    name: 'accessManage',
    components: {
        NavMenu
    },
    data () {
        return {
            menusData: [],
            mainLeft: '257px'
        };
    },
    created () {},
    computed: {},
    watch: {},
    mounted () {},
    methods: {
        changeMainLeft (isCollapse) {
            this.mainLeft = isCollapse ? '67px' : '257px';
        }
    }
};
</script>
<style lang="less">
    .accessManage{
        overflow: hidden;
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        >div{
            position: absolute;
            top: 0px;
            bottom: 9px;
            background: #FAFBFC;
        }
        background: #E3E3E3;
        .NavMenu{
            left: 9px;
            right: auto;
        }
        .main{
            // left: 257px;
            right: 9px;
            >div{
                width: 100%;
                height: 100%;
            }
            transition: all .5s;
            -webkit-transition: all .5s;
            .el-button{
                font-size: 14px;
            }
        }
    }
</style>
