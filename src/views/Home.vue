<template>
  <div class="home">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'  //引入helloworld组件

export default {  //组件对象        
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
