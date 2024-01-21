<template>
    <el-container class="eco-products">
        <el-header>
            <h1>区域生态产品</h1>
        </el-header>

        <!-- 产品展示 -->
        <el-main>
            <el-row :gutter="20">
                <el-col :span="8" v-for="product in products" :key="product.id">
                    <el-card>
                        <img :src="product.image" :alt="product.name" class="product-image" />
                        <div style="padding: 14px;">
                            <h2>{{ product.name }}</h2>
                            <p>{{ product.description }}</p>
                            <span class="price">￥{{ product.price }}</span>
                            <div class="bottom-panel">
                                <el-button size="mini" @click="addToCart(product)">加入购物车</el-button>
                                <el-button size="mini" @click="toggleFavorite(product)" icon="el-icon-star-on">收藏</el-button>
                                <el-button size="mini" @click="share(product)" icon="el-icon-share">分享</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-main><!-- 用户评价 -->
        <el-footer>
            <el-collapse>
                <el-collapse-item title="用户评价" name="1">
                    <div v-for="review in reviews" :key="review.id" class="review">
                        <h3>{{ review.user }}</h3>
                        <p>{{ review.comment }}</p>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-footer>
    </el-container>
</template>
<script>
import { ElButton, ElCard, ElCol, ElCollapse, ElCollapseItem, ElContainer, ElFooter, ElHeader, ElMain, ElRow } from 'element-plus';

export default {
    name: 'EcoProducts',
    components: {
        ElButton,
        ElCard,
        ElCol,
        ElCollapse,
        ElCollapseItem,
        ElContainer,
        ElFooter,
        ElHeader,
        ElMain,
        ElRow
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: '生态苹果',
                    description: '来自山区的纯天然生态苹果',
                    price: 20,
                    image: '@/assets/apple.jpeg'
                },
                {
                    id: 2,
                    name: '有机蓝莓',
                    description: '新鲜采摘的有机蓝莓',
                    price: 30,
                    image: '@/assets/Blueberries.jpg'
                },
                {
                    id: 3,
                    name: '有机蓝莓',
                    description: '新鲜采摘的有机蓝莓',
                    price: 40,
                    image: '@/assets/Blueberries.jpg'
                },
                // 更多产品...
            ],
            reviews: [
                {
                    id: 1,
                    user: '张三',
                    comment: '这些苹果真是太好吃了！'
                },
                {
                    id: 2,
                    user: '李四',
                    comment: '蓝莓非常新鲜，很喜欢！'
                },
                // 更多评价...
            ],
            relatedProducts: [
                // 相关产品数据...
            ],
        };
    },
    methods: {
        addToCart(product) {
            alert(`已添加 ${product.name} 到购物车`);
        },
        toggleFavorite(product) {
            alert(`已收藏 ${product.name}`);
        },
        share(product) {
            alert(`分享 ${product.name}`);
        }
    }
};
</script>
<style scoped>
.eco-products {
    text-align: center;
}

.product-image {
    width: 100%;
    display: block;
}

.price {
    color: green;
    font-weight: bold;
}

.bottom-panel {
    margin-top: 10px;
}

.review {
    background-color: #f4f4f4;
    padding: 10px;
    margin-bottom: 10px;
}
</style>
