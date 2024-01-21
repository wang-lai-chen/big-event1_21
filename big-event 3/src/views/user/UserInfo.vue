<script setup>
import { ref } from 'vue'
import useUserInfoStore from '@/stores/userInfo.js'
const userInfoStore = useUserInfoStore();

const userInfo = ref({ ...userInfoStore.info, address: '', idCardNumber: '', phoneNumber: '' });
const rules = {
    nickname: [
        { required: true, message: '请输入用户昵称', trigger: 'blur' },
        {
            pattern: /^\S{2,10}$/,
            message: '昵称必须是2-10位的非空字符串',
            trigger: 'blur'
        }
    ],
    email: [
        { required: true, message: '请输入用户邮箱', trigger: 'blur' },
        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
    ],
    address: [
        { required: true, message: '请输入地址', trigger: 'blur' },
        { min: 3, max: 100, message: '地址长度应在3到100个字符之间', trigger: 'blur' }
    ],
    idCardNumber: [
        { required: true, message: '请输入身份证号码', trigger: 'blur' },
        { pattern: /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/, message: '请输入有效的身份证号码', trigger: 'blur' }
    ],
    phoneNumber: [
        { required: true, message: '请输入手机号码', trigger: 'blur' },
        { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号码', trigger: 'blur' }
    ]
}

//修改个人信息
import {userInfoUpdateService} from '@/api/user/info.js'
import {ElMessage} from 'element-plus'

const formRef = ref(null); // 创建一个对表单的引用

const updateUserInfo = async () => {
    // 使用 validate 方法进行表单校验
    formRef.value.validate(async (valid) => {
        if (valid) {
            // 校验通过，执行更新操作
            //调用接口
            let result = await userInfoUpdateService(userInfo.value);
            ElMessage.success(result.msg ? result.msg : '修改成功');

            //修改pinia中的个人信息
            userInfoStore.setInfo(userInfo.value);
        } else {
            ElMessage.error('表单有错误，请修正后提交');
            return false;
        }
    });
}


</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>基本资料</span>
            </div>
        </template>
        <el-row>
            <el-col :span="12">
                <el-form ref="formRef" :model="userInfo" :rules="rules" label-width="100px" size="large">
                    <el-form-item label="登录名称">
                        <el-input v-model="userInfo.username" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="用户昵称" prop="nickname">
                        <el-input v-model="userInfo.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="用户邮箱" prop="email">
                        <el-input v-model="userInfo.email"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="address">
                        <el-input v-model="userInfo.address"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号" prop="idCardNumber">
                        <el-input v-model="userInfo.idCardNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="phoneNumber">
                        <el-input v-model="userInfo.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updateUserInfo">提交修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-card>
</template>
