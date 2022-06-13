<template>
<body>
  <div class="home">
    <b-container>
      <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <b-card class="shadow w-50" style="  font-family: 'Gotham'; width: 568px; border-radius: 10px;">
          <b-container>
          <b-form class="mt-2"  @submit.prevent="submit"> 
              <p class="header"><strong>Masuk</strong></p>
              <b-form-input
                id="input-1"
                type="name"
                v-model="register.name"
                placeholder="Nama Lengkap"
                class="mt-4 input form"
                required
              ></b-form-input>
              <b-form-input
                id="input-1"
                type="email"
                v-model="register.email"
                placeholder="Email"
                class="mt-4 input form"
                required
              ></b-form-input>
              <b-form-input
                id="input-1"
                type="number"
                v-model="register.phone"
                placeholder="Nomor Telepon"
                class="mt-4 input form"
                required
              ></b-form-input>

              <b-form-input
                id="input-2"
                placeholder="Password"
                required
                class="mt-3 input form"
                v-model="register.password"
                type="password"
              ></b-form-input>
              <p class="text-end mt-3 forgot">Lupa Password?</p>
            <b-button class="button shadow w-100 mt-4 text-white" type="submit" variant="light" style="background: #EB3F36; box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.17);
            border-radius: 7px;">MASUK</b-button>
            <div v-if="showError" id="error">
              <b-alert variant="danger" show>
              Username or Password is incorrect
              </b-alert>
            </div>
          </b-form>
          <div class="d-flex justify-content-center">
          <hr class="mt-4 line">
          </div>
          <div class="d-flex mt-2 justify-content-center regist"><p>Belum punya akun? <a href="" class="text-decoration-none" style="color: #730C07;"><strong>Daftar Sekarang</strong></a></p></div>
          </b-container>
        </b-card>
      </div>
    </b-container>
  </div>
</body>
</template>

<script>
import axios from 'axios';
export default {
  name: "LoginPage",
  data(){
    return{
      register:{
        name:"",
        email:"",
        phone:"",
        password:""
      }
    }
  },
  methods:{
    submit(){
       axios.post('https://techtest.folkatech.com/api/register',this.register)
       .then(response=>{
        console.log(response);
       });
    }
  },
  mounted(){
   
    
  }
};
</script>
<style>
@import url('http://fonts.cdnfonts.com/css/gotham');
.line{
  width: 420px;
  height: 1px;
  left: 544px;
  top: 565px;
}
body{
  font-family: 'Gotham';
}
.header{
  font-family: 'Gotham';
  font-style: normal;
  font-size: 26px;
  line-height: 25px;
  color: #730C07;
}
.input{
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;

  color: #868686;
}

.button{
  width: 500px;
  height: 59px;
  left: 507px;
  top: 467px;
  border-radius: 7px;
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  text-align: center;
}
.form{
  width: 500px;
  height: 59px;
  left: 507px;
  top: 260px;

  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
}
.forgot{
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #730C07;
  }
.regist{
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;

  color: #7C7C7C;
}

</style>