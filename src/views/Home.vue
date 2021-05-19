<template>
    <el-container>
        <el-aside width="200px">
            <SideMenu></SideMenu>
        </el-aside>

        <el-container>
            <el-header>
                <strong>VueAdmin后台管理系统</strong>
                <div class="header-avatar">
                    <el-avatar :src="userInfo.avatar"></el-avatar>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        {{ userInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link :to="{ name: 'userCenter'}">个人中心</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item  @click.native="logout">
                                退出
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <el-link href="https://www.baidu.com" target="_blank">网站</el-link>
                    <el-link href="" target="_blank">B站</el-link>

                </div>

            </el-header>

            <el-main>
                <Tabs></Tabs>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import SideMenu from "./inc/SideMenu"
    import Tabs from "./inc/Tabs"

    export default {
      name: "Home",

      data() {
        return {
            userInfo: {
                id: "",
                username:"",
                avatar:""
            }
        }
        },
      components:{
            SideMenu,Tabs
          },
        created() {
            this.getUserInfo()
        },
        methods: {
            getUserInfo(){
                this.$axios.get("/sys/userInfo").then( res => {
                    this.userInfo = res.data.data
                })
            },
          logout(){
              this.$axios.post("/logout").then( () => {
                localStorage.clear()
                sessionStorage.clear()

                this.$store.commit("resetState")
                this.$router.push("/login")
              })
          }
        }
    }
</script>

<style scoped>
    .el-container{
        padding: 0;
        margin: 0;
        height: 100%;
    }
    .el-header {
        background-color: #17b3a3;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
        padding: 0;
    }

    .header-avatar{
        float: right;
        width: 210px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .el-dropdown-link {
        cursor: pointer;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .el-menu-vertical {
        height: 100%;
    }
    a {
        text-decoration: none;
    }
</style>