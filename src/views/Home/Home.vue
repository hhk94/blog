<template>
	<div class="home-bg">
		<div class="bg"></div>
		<div class="home">
			<banner></banner>
			<div class="body-center clear">
				<ranking></ranking>
				<hot-article></hot-article>
				<list></list>
				
			</div>
			
		</div>
		<login></login>
	</div>
	
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Banner from './components/banner.vue'
import List from './components/list.vue'
import Ranking from './components/ranking.vue'
import HotArticle from './components/hot_article.vue'
export default {
	name: 'Home',
	components: {
		Banner,
		List,
		Ranking,
		HotArticle,
		Login
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
		// background-color: white;
		.body-center{
			margin-top: 20px;
		}
	}
}

</style>
