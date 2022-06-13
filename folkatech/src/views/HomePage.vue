<template>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
  <b-container>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <div class="input-group mb-3">
        <input type="text" class="form-control" size="sm" placeholder="Cari Produk" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-sm btn-danger" type="button" id="button-addon2"><b-icon icon="search"></b-icon></button>
        </div>
      </ul>
    </div>
  </b-container>
</nav>
<b-container>
<b-row class="mt-5">
<b-col cols="3">
<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne" header-tag="header" role="tab">
      <button class="accordion-button" type="button" v-b-toggle.accordion-1 >
        Urutkan Berdasarkan
      </button>
    </h2>
    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
      <div class="accordion-body">
        <h6>Harga</h6>
        <b-form-input class="w-100" type="range"></b-form-input>
      </div>
    </b-collapse>
  </div>
</div>
<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne" header-tag="header" role="tab">
      <button class="accordion-button" type="button" v-b-toggle.accordion-2 >
        Origin
      </button>
    </h2>
    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
      <div class="accordion-body">
        <b-form-checkbox>Small</b-form-checkbox>
        <b-form-checkbox>Default</b-form-checkbox>
        <b-form-checkbox>Large</b-form-checkbox>
      </div>
    </b-collapse>
  </div>
</div>
<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne" header-tag="header" role="tab">
      <button class="accordion-button" type="button" v-b-toggle.accordion-3 >
        Speciess
      </button>
    </h2>
    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
      <div class="accordion-body">
        <b-form-checkbox>Small</b-form-checkbox>
        <b-form-checkbox>Default</b-form-checkbox>
        <b-form-checkbox>Large</b-form-checkbox>
      </div>
    </b-collapse>
  </div>
</div>
<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne" header-tag="header" role="tab">
      <button class="accordion-button" type="button" v-b-toggle.accordion-4 >
        Roast Level
      </button>
    </h2>
    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
      <div class="accordion-body">
        <b-form-checkbox>Small</b-form-checkbox>
        <b-form-checkbox>Default</b-form-checkbox>
        <b-form-checkbox>Large</b-form-checkbox>
      </div>
    </b-collapse>
  </div>
</div>
<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne" header-tag="header" role="tab">
      <button class="accordion-button" type="button" v-b-toggle.accordion-5 >
        Tasted
      </button>
    </h2>
    <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
      <div class="accordion-body">
        <b-form-checkbox>Small</b-form-checkbox>
        <b-form-checkbox>Default</b-form-checkbox>
        <b-form-checkbox>Large</b-form-checkbox>
      </div>
    </b-collapse>
  </div>
</div>
<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne" header-tag="header" role="tab">
      <button class="accordion-button" type="button" v-b-toggle.accordion-6 >
        Processing
      </button>
    </h2>
    <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
      <div class="accordion-body">
        <b-form-checkbox>Small</b-form-checkbox>
        <b-form-checkbox>Default</b-form-checkbox>
        <b-form-checkbox>Large</b-form-checkbox>
      </div>
    </b-collapse>
  </div>
</div>
</b-col>
<b-col cols="9">
  <b-row>
    <b-col v-for="(list, index) in list" :key="index">
      <b-card
        :img-src="list.images[0].image_url"
        img-alt="Image"
        img-top
        rounded="top"
        class="mb-2 shadow"
        style="max-width: 257px; max-height: 420px;"
        @click="redirect(list.id)"
        > 
        <div class="judul text-truncate" style="font-size: 14px;"><strong>{{list.name}}</strong></div>
        <div class="subjudul text-truncate mt-n5">{{list.product_type.name}}</div>
        <div class="d-flex justify-content-center mt-n5">
          <b-form-rating
          id="rating-readonly"
          no-border size="sm"
          value="2"
          readonly
          inline
          variant="warning"
          precision="2"
        ></b-form-rating>
        </div>
        <div class="harga">Rp.{{ formatPrice(list.price) }}</div>
      </b-card>
    </b-col>
  </b-row>
</b-col>
</b-row>
</b-container>
</body>
</template>
<script>
import router from '@/router';
import axios from 'axios';
export default {
  name: 'HomePage',
  data(){
    return{
      list:''
    }
  },

  mounted()
  {
    let token= localStorage.getItem('token');
    const config = {
    headers: { Authorization: `Bearer ${token}` }
    };
    console.log(token);
    axios.get("https://techtest.folkatech.com/api/product?keyword=&price=10000,250000&page=1&limit=10&order=product_name,ASC",config)
    .then(response =>{
        console.log(response);
        this.list=response.data.data.list;
    })
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    redirect(id) {
     this.list.forEach(data => {
      if(data.id == id) 
      router.push({
          name:'DetailPage',
          params: {
            items: data
          }
        })
     });
    },
    
}
  
}
</script>
<style>
.judul{
  font-family: 'Gotham';
  font-style: normal;
  line-height: 19px;
  text-align: center;
  color: #696969;
}
.subjudul{
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #696969;
}
.harga{
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 17px;
  text-align: center;

  color: #EB3F36;
}
</style>
