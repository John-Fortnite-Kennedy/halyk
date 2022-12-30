<template>
  <div>
    <transition name="slide-fade">
      <div v-if="show" class="error">
        <div>Пользователь не найден</div>
        <img src="..\assets\maki_cross.svg" @click="show=false" />
      </div>
    </transition>
    <img src="https://www.3sc.kz/upload/userfiles/images/10.png" class="logo" alt="halyk logo" />
    <div class="auth_form">
      <form @submit.prevent="authorize">
        <InputComponent v-bind:state="show" label="Логин" @change="setLogin"/>
        <InputComponent v-bind:state="show" label="Пароль" @change="setPassword"/>
        <button>вход в систему</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '../stores/store'
import InputComponent from './InputComponent.vue'
import axios from 'axios'
import router from '../router'

export default {
  components: {
    InputComponent
  },
  data() {
    return{
      formData:{
        login: "",
        password: ""
      },
      show: false
    }
  },
  setup() {
    const store = useStore();
    return{
      store
    }
  },
  methods: {
    setLogin(param: any){
      this.formData.login=param.target.value
    },
    setPassword(param: any){
      this.formData.password=param.target.value
    },
    authorize(){
      axios.post('https://products.halyklife.kz/api/v1/test/insis/identity/api/Account/login', this.formData)
        .then(response => {console.log(response);
          if(response.status==200){
            this.store.setValue(response.data)
            localStorage.setItem('UserData', JSON.stringify(response.data))
            console.log(localStorage.getItem('UserData')) //Проверка
            router.push({ name: 'Documents' })
          }
        })
          .catch(error => {console.log(error);
            if(error.response.status==400){
              this.show = true
            }
          })
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 5em;
}
.auth_form form{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 225px;
  width: 500px;
}
.error{
  background-color: #F44343;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
}
.error img{
  height: 40%;
}
</style>