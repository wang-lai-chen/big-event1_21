<template>
    <div class="common-layout">
        <el-container>
            <el-container>
                <el-main>
                    <div class="top">
                        <div class="button">

                            <div class="h-6"/>
                            <el-menu
                                :default-active="activeIndex"
                                class="el-menu-demo"
                                mode="horizontal"
                                background-color="#545c64"
                                text-color="#fff"
                                active-text-color="#ffd04b"
                                @select="handleSelect"
                            >
                                <el-menu-item index="1" @click="activeMenu = 'tradeable'">交易资源</el-menu-item>
                                <el-menu-item index="2" @click="activeMenu = 'register'">注册资源</el-menu-item>
                                <el-menu-item index="3" @click="activeMenu = 'processing'">办理状态</el-menu-item>
                                <el-menu-item index="4" @click="activeMenu = 'ecological'">生态产品</el-menu-item>
                            </el-menu>
                        </div>
                    </div>

                    <!-- 条件性渲染内容 -->
                    <div class="trade" v-if="activeMenu === 'tradeable'">
                        <!-- 可交易资源的内容 -->
                        <div class="tradetitle">可交易资源</div>
                        <div class="box">
                            <img src="src/assets/eco1.png">
                            <div class="content">
                                <p>拥抱绿色未来，投资生态资源，共创可持续发展的辉煌.</p>
                                <p>每一分投入生态资源，都是对地球未来的投资。一起助力绿色经济的崛起</p>
                            </div>

                        </div>
                        <div class="box">
                            <img src="src/assets/eco6.png">
                            <div class="content">
                                <p>选择我们的生态资源，为你的子孙后代留下一片繁荣的绿洲.</p>
                                <p>联手创造清新空气，清澈水源，和丰饶土地。我们的生态资源，你的明智选择.</p>
                            </div>

                        </div>
                        <div class="box">
                            <img src="src/assets/eco3.png">
                            <div class="content">
                                <p>投资于自然，回报远超你的想象。加入我们，共同守护这颗蓝色星球.</p>
                                <p>加入生态资源的行列，成为改变世界的一份子。你的选择，有力量.</p>
                            </div>
                        </div>
                        <div class="tradetitle">已交易资源</div>
                        <div class="box">
                            <img src="src/assets/eco4.png">
                            <div class="content">
                                <p>选择我们的生态资源，意味着选择一个更加可持续的生活方式。每一分投资，
                                    都是对自然的珍视和对生态平衡的维护，一起努力，为地球带来持久的变革.</p>
                            </div>
                        </div>
                        <div class="box">
                            <img src="src/assets/eco2.png">
                            <div class="content">
                                <p>我们的生态资源，不仅仅是一项投资，它是一份责任，一种承诺，
                                    向世界证明我们对未来的承诺和对环境的尊重。让我们携手，共创美好的明天.</p>
                            </div>
                        </div>
                        <div class="box">
                            <img src="src/assets/eco5.png">
                            <div class="content">
                                <p>我们提供的不仅是生态资源，更是一个实现绿色梦想的平台。
                                    每一项投资都代表着对清洁能源和可持续发展的支持，让我们一起为地球的未来贡献力量.</p>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeMenu === 'register'">
                        <el-card class="box-card">
                            <template #header>
                                <div class="card-header">
                                    <span>注册表单填写</span>
                                </div>
                            </template>
                            <div class="text item">
                                <el-form
                                    ref="ruleFormRef"
                                    :model="ruleForm"
                                    :rules="rules"
                                    label-width="120px"
                                    class="demo-ruleForm"
                                    :size="formSize"
                                    status-icon
                                >
                                    <el-form-item label="注册名称" prop="name">
                                        <el-input v-model="ruleForm.name" />
                                    </el-form-item>

                                    <el-form-item label="注册地区" prop="region">
                                        <el-select v-model="ruleForm.region" placeholder="请选地区">
                                            <el-option label="地区一" value="shanghai" />
                                            <el-option label="地区二" value="beijing" />
                                        </el-select>
                                    </el-form-item>

                                    <el-form-item label="注册数量" prop="count">
                                        <el-select-v2
                                            v-model="ruleForm.count"
                                            placeholder="Activity count"
                                            :options="options"
                                        />
                                    </el-form-item>

                                    <el-form-item label="注册时间选定" required>
                                        <el-col :span="11">
                                            <el-form-item prop="date1">
                                                <el-date-picker
                                                    v-model="ruleForm.date1"
                                                    type="date"
                                                    label="Pick a date"
                                                    placeholder="Pick a date"
                                                    style="width: 100%"
                                                />
                                            </el-form-item>
                                        </el-col>
                                        <el-col class="text-center" :span="2">
                                            <span class="text-gray-500">-</span>
                                        </el-col>
                                        <el-col :span="11">
                                            <el-form-item prop="date2">
                                                <el-time-picker
                                                    v-model="ruleForm.date2"
                                                    label="Pick a time"
                                                    placeholder="Pick a time"
                                                    style="width: 100%"
                                                />
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>

                                    <el-form-item label="立即发布" prop="delivery">
                                        <el-switch v-model="ruleForm.delivery" />
                                    </el-form-item>

                                    <el-form-item label="类型" prop="type">
                                        <el-checkbox-group v-model="ruleForm.type">
                                            <el-checkbox label="生态资源1" name="type" />
                                            <el-checkbox label="生态资源2" name="type" />
                                            <el-checkbox label="生态资源3" name="type" />
                                            <el-checkbox label="生态资源4" name="type" />
                                        </el-checkbox-group>
                                    </el-form-item>

                                    <el-form-item label="资源" prop="resource">
                                        <el-radio-group v-model="ruleForm.resource">
                                            <el-radio label="赞助" />
                                            <el-radio label="机构" />
                                            <el-radio label="其他" />
                                        </el-radio-group>
                                    </el-form-item>

                                    <el-form-item label="特殊备注" prop="desc">
                                        <el-input v-model="ruleForm.desc" type="textarea" />
                                    </el-form-item>

                                    <el-form-item>
                                        <el-button type="primary" @click="submitForm(ruleFormRef)">
                                            Create
                                        </el-button>
                                        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                                    </el-form-item>

                                </el-form>
                            </div>
                            <template #footer>Footer content</template>
                        </el-card>
                        <!-- 注册内容 -->

                    </div>
                    <div v-if="activeMenu === 'processing'">
                        <div class="bottom">
                            <div class="map">
                                <img src="@/assets/map_center.png" width="1000" height="600">
                                <BMap :zoom="10" enableScrollWheelZoom mapStyleId="ee66c61531e8df3c2fd0374e96e58e81" />

                                <div class="info">
                                    <img src="@/assets/map_right2.jpeg" alt="" width="340">
                                    <span class="special">地区编号 @XXXX</span>
                                    <ul>
                                        <li>面积：111.3亩</li>
                                        <li>报价：6800元/年</li>
                                        <li>联系人：老王</li>
                                    </ul>

                                    <el-steps
                                        :active="2" finish-status="success" style="margin-top: 20px"
                                        simple space="50%"
                                    >
                                        <el-step title="填报完成"/>
                                        <el-step title="管理员审核中"/>
                                        <el-step title="管理员审核完毕"/>
                                        <el-step title="等待用户选择交易方式"/>
                                        <el-step title="进入资源市场"/>
                                        <el-step title="..."/>

                                    </el-steps>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div v-if="activeMenu === 'ecological'" class="ecological">
                        <!-- 已交易资源的内容 -->
                        <div class="title">生态产品</div>
                        <div class="context">
                            <el-col :span="8">
                                <p>概念</p>
                                <div class="concept">
                                    <el-card shadow="hover">
                                        定义：生态产品是由生态系统以可持续的方式为人类提供的各类物质和服务。它的特点是节约能源、无公害、可再生，并且能够维护生态安全和调节功能，同时也提供良好的居住环境。1定义：生态产品是由生态系统以可持续的方式为人类提供的各类物质和服务。它的特点是节约能源、无公害、可再生，并且能够维护生态安全和调节功能，同时也提供良好的居住环境。
                                    </el-card>
                                    <el-card shadow="hover">
                                        生产者和特点：生态产品的生产者是生态系统，包括森林、草原、湿地、水域、农田、荒漠、海洋等多种自然和人工-自然复合系统。生态产品的提供不应损害生态系统的健康和功能。生态产品可以分为有形的物质产品和无形的服务，如食物、纤维、木材、燃料、淡水、药材等物质产品，以及气候调节、空气净化、水土保持等服务
                                    </el-card>
                                    <el-card shadow="hover">
                                        生命周期的影响：生态产品在其全生命周期中对环境造成的负面影响最小。它们具有可持续性、环保、资源节约和循环利用的特点，旨在减少环境污染和破坏。在设计和销售过程中，生态产品考虑了环境因素，采用了可再生、可降解和无毒的原材料，并且在生产过程中注重节能、减排和资源的高效利用
                                    </el-card>
                                </div>

                                <p>产品</p>
                                <div class="product">
                                    <el-card shadow="always">
                                        <img src="src/assets/product1.jpeg" alt="">
                                        <img src="src/assets/product2.jpeg" alt="">
                                    </el-card>
                                </div>

                            </el-col>
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
import {reactive, ref} from 'vue';

import {ElButton, ElCarousel, ElCarouselItem, ElDialog} from 'element-plus';
import {Edit, Picture, UploadFilled} from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus'
import { BMap, BZoom } from 'vue3-baidu-map-gl'



interface RuleForm {
    name: string
    region: string
    count: string
    date1: string
    date2: string
    delivery: boolean
    type: string[]
    resource: string
    desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: 'Hello',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
        {
            required: true,
            message: '请选一个地区',
            trigger: 'change',
        },
    ],
    count: [
        {
            required: true,
            message: '请选择数量',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: '请填入日期',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: '请填入时间',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: '请选择生态类型',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: '请选择资源',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: '请填写特殊备注', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))

// 定义响应式引用
const activeIndex = ref('1');
const activeMenu = ref('tradeable');
const isTradeableDialogVisible = ref(false);
const isTradedDialogVisible = ref(false);

// 方法
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};

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

.el-menu {
    width: 700px;
    border-radius: 30px;

    .el-menu-item {
        margin-left: 60px;
    }
}

.ecological {
    .title {
        margin-top: 20px;
        margin-left: 20px;
        font-size: 30px;
        font-weight: 700;
        font-stretch: expanded;
        letter-spacing: 10px;
    }

    .context {
        p {
            margin-left: 30px;
            font-size: 20px;
            font-weight: 600;
        }

        .concept {
            margin: 20px;
            display: flex;
            width: 1200px;

            .el-card {
                margin-left: 20px;
                border-radius: 20px;
                border: 2px royalblue solid;
            }
        }

        .product {
            .el-card {
                margin-top: 20px;
                margin-left: 30px;
                width: 1000px;
                //height: 1500px;
                border-radius: 20px;

                img {
                    width: 960px;
                    border-radius: 20px;
                    margin-bottom: 20px;
                }
            }
        }
    }

}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-top: 10px;
    margin-bottom: 18px;
}

.box-card {
    margin-top: 20px;
    width: 1000px;

    border-radius: 20px;
}


.custom-button {
    width: 200px;
    height: 80px;
    margin: 10px;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    color: black;
    //box-shadow: 3px 3px 2px 3px gainsboro;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }


}

.el-main {
    background-color: white;
    position: relative; // 添加相对定位以便放置轮播图
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); //渐变背景

    .trade {
        background: url(src/assets/bg.png)  ;

        width: 1100px;
        margin-top: 20px;
        border-radius: 20px;
        padding: 20px;



        .tradetitle {
            margin: 10px;
            font-weight: 700;
            font-size: 30px;
        }

        .box {
            display: flex;
            width: 1000px;
            height: 250px;
            box-shadow: 2px 2px 1px 1px #8c939d;

            margin: 30px;
            border-radius: 20px;
            background-color: navajowhite;

            opacity: 0.9;

            img {
                width: 500px;
                height: 250px;


            }
        }

        .content {
            box-sizing: border-box;
            width: 500px;
            padding: 20px;
            p {
                color: black;
                font-weight: 700;
                font-size: 20px;
            }
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
        margin-left: 50px;
        border: 1px blue dotted;
        border-radius: 20px;
        padding: 20px;
        width: 500px;
        height: 200px;
        font-size: 20px;

        .info {
            display: flex;
            justify-content: space-between;
        }

    }

    .bottom {
        box-sizing: border-box;
        margin-top: 60px;
        height: 700px;

        .map {
            //background-color: #fff;
            width: 600px;

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
