<template>
	<div class="home-bg">
		<div class="bg"></div>
		<div class="home">
			<banner></banner>
			<list></list>
		</div>
	</div>
	
</template>

<script>
// @ is an alias to /src

import Banner from './components/banner.vue'
import List from './components/list.vue'
export default {
	name: 'Home',
	components: {
		Banner,
		List
	}
}
</script>

<style lang="scss" scoped>
.home-bg{
	position: relative;
	width: 100%;
	.bg{
		background-color: $theme-color;
		position: absolute;
		width: 100%;
		height: 330px;
		left: 0;
		top: 0;
	}
	.home{
		width: $common-container;
		margin: 0 auto;
		background-color: white;
	}
}

</style>
