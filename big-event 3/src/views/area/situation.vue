<template>
    <div class="common-layout">
        <el-container>
            <el-container>
                <el-main>
                    <div class="top-mes">
                        <!-- 轮播图部分 -->
                        <div class="carousel-container">
                            <el-carousel indicator-position="outside">
                                <el-carousel-item>
                                    <img src="@/assets/map_right1.jpeg" alt="">
                                </el-carousel-item>
                                <el-carousel-item>
                                    <img src="@/assets/map_right2.jpeg" alt="">
                                </el-carousel-item>
                                <el-carousel-item>
                                    <img src="@/assets/map_right3.jpeg" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </div>

                        <div class="right">
                            <div class="title">基础信息统计</div>
                            <hr>
                            <div class="info">
                                <div class="inner-left">
                                    生态资源
                                    <ul>
                                        <li>水资源</li>
                                        <li>土壤资源</li>
                                        <li>森林资源</li>
                                    </ul>
                                </div>
                                <div class="inner-right">
                                    生态产品
                                    <ul>
                                        <li>太阳能电池板和水力发电设备</li>
                                        <li>LED灯、高效空调</li>
                                        <li>电动汽车、混合动力汽车、自行车、公共交通工具</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="map-show">
                        <div class="map-left">
                            <img src="@/assets/map_left1.jpeg">
                            <img src="@/assets/map_left2.webp">
                            <img src="@/assets/map_left3.webp">
                        </div>
                        <div class="map-center">
                            <img src="@/assets/map_center.png" width="800" height="450">

<!--                            <BMap :zoom="10" enableScrollWheelZoom mapStyleId="ee66c61531e8df3c2fd0374e96e58e81" />-->

                        </div>
                        <div class="map-right">
                            <img src="@/assets/map_right1.jpeg">
                            <img src="@/assets/map_right2.jpeg">
                            <img src="@/assets/map_right3.jpeg">

                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-container>

        <!-- 弹窗组件 -->
        <el-dialog :visible.sync="isTradeableDialogVisible" title="可交易资源">
            <!-- 这里放置可交易资源的图片和介绍 -->

        </el-dialog>
        <el-dialog :visible.sync="isTradedDialogVisible" title="已交易资源">
            <!-- 这里放置已交易资源的图片和介绍 -->
        </el-dialog>
    </div>
</template>


<script lang="ts" setup>
import {ref} from 'vue';
import {ElCarousel, ElCarouselItem, ElDialog} from 'element-plus';
import { BMap, BZoom } from 'vue3-baidu-map-gl'


// 定义响应式引用
const isTradeableDialogVisible = ref(false);
const isTradedDialogVisible = ref(false);

// 方法

const showTradeableResources = () => {
    isTradeableDialogVisible.value = true;
};

const showTradedDialogVisible = () => {
    isTradedDialogVisible.value = true;
};

// 使用 Vue Router 的示例（如果需要）
// const router = useRouter();
// const goToProducts = () => {
//   router.push('/Products');
// };
</script>


<style scoped lang="scss">



.el-main {
    background-color: white;
    position: relative; // 添加相对定位以便放置轮播图
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); //渐变背景


    .top-mes {
        display: flex;

        .carousel-container {
            width: 800px;
            //height: 600px;
            //position: absolute; // 使用绝对定位
            top: 0;
            left: 0;
            z-index: 10; // 确保轮播图在其他内容之上

            .el-carousel {
                width: 700px;
            }


            .el-carousel-item img {
                width: 700px;
                object-fit: cover; // 图片覆盖整个区域

            }
        }

        .right {
            width: 400px;
            min-width: 350px;
        }
    }


    .map-show {
        display: flex; /* 使用flex布局使子元素横向排列 */
        align-items: stretch; /* 确保所有子元素填满容器的高度 */
        margin-top: 30px;
        margin-bottom: 60px;

        padding: 5px;

        .map-left, .map-right {
            display: flex; /* 使用flex布局 */
            flex-direction: column; /* 确保子元素竖向排列 */
            justify-content: space-between; /* 分布子元素 */

            width: 220px;
        }

        .map-center {
            //display: flex; /* 使用flex布局 */
            justify-content: center; /* 居中子元素 */
            align-items: center; /* 居中子元素 */

            width: 800px;
            height: 400px;

        }
    }


    .top {
        display: flex;


        .button {
            width: 700px;

        }

    }

    .right {
        box-sizing: border-box;
        margin-left: 20px;
        border: 1px blue dotted;
        border-radius: 20px;
        padding: 20px;
        width: 500px;
        height: 300px;
        font-size: 20px;

        .info {
            display: flex;
            justify-content: space-between;

            .inner-left {
                width: 200px;
            }

            .inner-right {
                width: 300px;
            }

        }

    }

    .bottom {
        box-sizing: border-box;
        margin-top: 60px;
        height: 700px;

        .map {
            //background-color: #fff;

            display: flex;

            .info {
                margin-left: 20px;
                padding: 10px;
                background-color: #8e9aaf;
                width: 400px;
                border: 1px lightyellow solid;
                box-shadow: 2px 2px 4px 2px navajowhite;
                border-radius: 20px;

                img {
                    border-radius: 30px;
                    margin-bottom: 30px;
                }


                .special {
                    background-color: orange;
                    padding: 10px;
                    border-radius: 20px;
                    margin-left: 10px;
                    font-size: 24px;
                    font-weight: 700;
                }

                li {
                    list-style: none;
                    font-size: 20px;
                }

            }
        }
    }
}

</style>
