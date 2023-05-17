import { defineStore } from 'pinia'

const store = defineStore('main', {

    state: () => {
        return{
            ModelA:{
                NeedUpdate: false,
                user:'张三'
            },
            ModelB:{
                NeedUpdate: false,
                user:'李四'
            },
            ModelC:{
                NeedUpdate: false,
                user:'王二'
            },
            ModelD:{
                NeedUpdate: false,
                user:'麻子'
            },
        }
    },
    getters: {},
    actions: {}
})
export default  store
