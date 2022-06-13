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
<b-col cols="6">
   <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
       :img-src="dataProduct.images[0].image_url"
    ></b-carousel-slide>
    <b-carousel-slide
      :img-src="dataProduct.images[1].image_url"
    ></b-carousel-slide>
  </b-carousel>
</div>
</b-col>
<b-col cols="6">
    <div class="p-5">
        <div class="judulproduk">{{dataProduct.name}}</div>
        <div class="sub-judul">{{dataProduct.product_type.name}}</div>
        <div>
            <b-form-rating
            id="rating-readonly"
            no-border
            value="2"
            readonly
            inline
            variant="warning"
            precision="2"
            ></b-form-rating>
        </div>
        <div class="harga-produk">Rp.{{ formatPrice(dataProduct.price) }}</div>
        <b-row>
            <b-col>
                <div>
                    <b-form-spinbutton size="lg" id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
                </div>
            </b-col>
            <b-col> <b-button  size="lg" class="w-100" variant="danger">Button</b-button></b-col>
            <b-col><b-button variant="light"><b-icon icon="heart" class="rounded-circle bg-light p-2" variant="danger" font-scale="2"></b-icon></b-button></b-col>
        </b-row>
        <p class="desc mt-2 lh-base lh-base">{{dataProduct.description}}</p>
    </div>
</b-col>
</b-row>
</b-container>
</body>
</template>
<script>
export default {
  name: 'DetailPage',
  data() {
      return {
        value: 50
      }
    },
  props: ['items'],
  computed:{
    dataProduct(){
        return this.items;
    },
  },

  mounted()
{
    let data = this.items;
    console.log(`pesan ${data}`);
    
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    redirect(id) {
      this.$router.push(`/DetailPage/${id}`);
    },
}
  
}
</script>
<style>
.judulproduk{
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */
    color: #696969;

}
.sub-judul{
font-family: 'Gotham';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #696969;
}
.harga-produk{
font-family: 'Gotham';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #EB3F36;
}
.desc{
font-family: 'Gotham';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #696969;
}
</style>
