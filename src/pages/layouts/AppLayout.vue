<template>
    <div class="bg-white">
    	<header class="bg-light shadow">
    		<Navigation />
    		<div class="header-1">
    			<slot name="header" />
    		</div>
    	</header>

    	<main>
    		<slot />	
    	</main>

        <footer>
            <Footer />
        </footer>
    </div>
</template>

<script>

import Navigation from "./NavigationLayout"
import Footer from "./FooterLayout"

export default {
	components: {
		Navigation,
        Footer
	},
	data(){
	  return {

	  }
	}
}
</script>

<style scoped>
footer{
    margin-top: 20px;
}
</style>