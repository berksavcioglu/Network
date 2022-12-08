<template>
    <div>
    <app-header/>
    <not-login-favorisayfa/>
</div>
    
</template>

<script>  
import NotLoginFavorisayfa from '../components/FavoriSayfası/NotLoginFavorisayfa.vue';
import AppHeader from '../components/Header/AppHeader.vue';

export default {
    components: { NotLoginFavorisayfa, AppHeader }
}
</script>