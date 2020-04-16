<template>
    <div class="text">
        <h1>text组件</h1>
        {{msg}}
        <ul>
             <li v-for="(value,index) in news" :key="index">{{value}}</li> <!--key值的引号可加可不加 -->
        </ul>

    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"wangcai",
            news:[
                "new1","new2","new3"
            ]
        }
    }
}
</script>
 <!--  如果在style上添加scoped，它们的作用就是让这个样式会作用于当前的组件-->
<style  scoped lang="less"> 
 @color: red;
h1{
    color: @color;
    background-color: gold;
}

</style>

