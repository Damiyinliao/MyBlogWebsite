import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

// 引入api
import { reqGetList, reqGetTextList } from "@/api";

const store = new Vuex.Store({
    state:{
        list:{},
        textList:[]
    },
    mutations: {
        GETLIST(state, data){
            state.list = data;
        },
        GETTEXTLIST(state, data){
            state.textList = data;
        }
    },
    actions: {
        async getList({commit}){
            let result = await reqGetList();
            if(result.code == 200){
                commit("GETLIST", result.data);
            }
        },
        async getTextList({commit}){
            let result = await reqGetTextList();
            if(result.code == 200){
                commit("GETTEXTLIST", result.data)
            }
        }
    },
    getters: {
        
    }
})


export default store