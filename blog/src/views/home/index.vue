<template>
    <div class="main">
        <h2><span></span>愿所有的美好如约而至，愿所有的黑暗都能看到希望。</h2>
        <p class="time">
            <span></span>
            <span></span>
        </p>
        <section class="info">
            <h4>Hello，你好，我是谁！</h4>
            <div>
                <p>重新认识、审视、定义一下自己吧。</p>
                <ul>
                    <li v-for="(item, index) in textList" :key="index">
                        <span :class="item.icon">{{ item.text }}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section v-for="(val, key, index) in list" :key="index">
            <h3>{{ key }}</h3>
            <div class="box" v-if="1">
                <p>
                    <span class="total">{{  }}</span>
                    <span>{{ val.unit }}</span>
                </p>
                <p>{{ val.textNull }}</p>
            </div>
            <div class="box" v-else>

            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },
    mounted() {
        //派发action，获取list和textList的组件
        this.$store.dispatch("getList");
        this.$store.dispatch("getTextList");
    },
    computed: {
        ...mapGetters({
            list: (state) => state.list,
            textList: (state) => state.textList
        })
    }
}
</script>

<style scoped lang="less">
.main {
    // margin:;
    color: #3b4b5a;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    h2 {
        width: 100%;
        font-size: 16px;
        font-weight: 400;
        margin: 10px 0 30px;
        letter-spacing: 1px;
        color: #0e8dff;

        span {
            color: #0e8dff;
            font-size: 20px;
        }
    }
}
</style>