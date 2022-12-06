<template>
    <div class="row justify-content-between align-items-center custom-container" id="header" style="width: 100%;">
        <!-- searchbar -->
        <form class="col-4 row justify-content-end align-items-center" @submit.prevent="false" >
            <div class="form col-10">
                <i class="fa fa-search"></i>
                <input v-model="searchKey" @keyup.enter.prevent="searchByKey()" type="text" class="form-control form-input" placeholder="Elbise, Ceket ara..." />
            </div>
        </form>
        <!-- logo -->
        <img @click="$router.push('/')" class="mt-2 p-3 col-4 pointer" :src="logo.url" :style="{ width: logo.width }" alt />
        <!-- settings -->
        <div class="col-2 offset-2 d-flex justify-content-start align-items-center">
            <div>
               <div class="d-inline absolute-container">
               
                <img src="../../static/images/cart.png"
                    data-bs-toggle="modal"
                    data-bs-target="#cartModal"
                    class=" mx-2 pointer settings-icon"
                    id="cart-icon"
                    alt=""/>
                    <span id="cart-quantity">{{cartItemsQuantity === 0 ? null : cartItemsQuantity}}</span>
                    </div>
                    <router-link to="/favoriler">
                <img src="../../static/images/heart.png" alt=""
                class=" mx-2 pointer settings-icon"
                />
                </router-link>
                    
                
                    
                <img @click="goToRegisterPage()" src="../../static/images/profile.png" alt=""
                class=" mx-2 pointer settings-icon"

                
                />
               
            </div>
        </div>
    </div>

   
</template>

<script>
export default {

    data() {
        return {
            logo: { id: 0, url: 'https://img-network.mncdn.com/static/network/images/logo-new-year.png', width: '220px' },
            searchKey:""
        }
    },
    methods:{
        searchByKey(){
            
            if(this.searchKey.length<1){
                this.searchKey="*";
            }
            this.$router.push({name:"CategoryItemsPage", query:{searchKey:this.searchKey}});
            this.searchKey="";
        },
        goToRegisterPage(){
            if(localStorage.getItem("user")!==null){
                localStorage.removeItem("user");
                this.$store.state.user = {};
                this.$store.state.cart.items = [];
                this.$store.state.cart.total = 0;
                alert("Çıkış yapıldı");

            }
            else{
                this.$router.push({name:"KayıtSayfası"});
            }
        }
    },
    
}
</script>

<style>
.settings-icon{
    color:#2c3e50;
}
.router-link-active{
    color:#2c3e50;
}
#cart-icon{
    position: absolute;
    left:-50px;
}
#cart-quantity{
    position: absolute;
    color: rgb(255, 0, 0);
    font-size: 14px;
    padding: 2px 5px;
    border-radius: 50%;
    left: -20px;
    top: -10px;
    font-weight: bold;
}
.absolute-container{
    position: relative;
}
</style>