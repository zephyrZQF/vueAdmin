<template>
    <div  style="">
        <h2>你好！ {{ userInfo.username }}</h2>
    </div>



</template>

<script>
  export default {
    name: "UserCenter",
    data(){
      return {
        userInfo: {
          id: "",
          username:"",
          avatar:""
        }
      }

    },
    created() {
      this.getUserInfo()
    },
    methods: {
      getUserInfo() {
        this.$axios.get("/sys/userInfo").then(res => {
          this.userInfo = res.data.data
        })
      },
    }
  };


</script>

<style scoped>

</style>