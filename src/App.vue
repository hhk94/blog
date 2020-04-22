<template>
	<div id="app">
		<h-header></h-header>
		<login v-show="this.$store.state.Home.login_show" ></login>
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		<router-view/>
	</div>
</template>
<script>
import Login from '@/components/Login.vue'
import HHeader from '@/components/Header.vue'
export default {
	name: 'Home',
	components: {
		HHeader,
		Login
	},
	data(){
		return{
		}
	},
	methods:{
	}
}
</script>
<style lang="scss" scoped>
::v-deep .markdown-body img{
		max-width: 100%;
		box-sizing: content-box;
		background-color: transparent;
		width: auto;
		height: auto;
		vertical-align: middle;
		border: 0;
		margin: 5px auto;
		padding-bottom: 20px;
		border-bottom: 1px solid #d9d9d9;
	}
body{
	background-color: $back-color!important;
}
#app {
	
	
}


</style>
