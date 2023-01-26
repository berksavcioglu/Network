<template>
    
<button @click="$emit('deleteItem',item)" type="button" >Sil
    <img src="../static/images/trash2.png">
  </button>

</template>

<script>
export default {


  props:['item']
}
</script>
