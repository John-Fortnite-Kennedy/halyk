import { defineStore } from 'pinia';

export const useStore = defineStore('store',{
    state: () => ({
        accessToken: "", 
        refreshToken: ""
    }),
    actions: {
        setValue(data: any){
            this.accessToken=data.accessToken;
            this.refreshToken=data.refreshToken;
        }
    }
})