<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': show }">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click.prevent="homePage()">Home</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click.prevent="profilePage()">Profile</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav" v-if="isLogin === true">
                        <li class="nav-item">
                            <a class="nav-link" v-if="this.$store.state.isLogin" @click="logout()">Logout</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav" v-else>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="loginPage()">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

  import { mapState } from "vuex"

	export default {
		data(){
		   return{
		   	  show: true
		   }
		},
        methods: {
          toggleNavbar(){
            this.show = !this.show
          },
          logout(){
            this.$store.dispatch('logout', false)
          },
          loginPage(){
            this.$router.push('/login');
          },
          homePage(){
            this.$router.push('/');
          },
          profilePage() {
            if (this.$store.isLogin === false) {
                alert('Upss Anda Belum Login !')
            }else{
                // alert('login')
                this.$router.push('/profile');
            }
          }
        },
        computed: mapState(['isLogin'])    
	}
</script>

<style scoped>

.header{
    width:100%;
    height:50px;
    text-align: center;
}

</style>