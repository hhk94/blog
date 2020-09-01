<template>
	<div class="home-bg">
		<div class="no_date">暂无数据</div>
	</div>
	
</template>

<script>
// @ is an alias to /src

export default {
	name: 'LifeHome',
	components: {
	},
	data(){
		return {
		}
	},
}
</script>

<style lang="scss" scoped>
.no_date{
	margin-top: 50px;
	@include _no_date()
}
</style>
