<template>
	<div class="container" ref="container">
		<img class="page-404" src="@/assets/img/error-page/404.png" alt="" />
	</div>
</template>

<script>
export default {
	// name: '404',
}
</script>

<style lang="scss" scoped="scoped">
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: white;
	height: 500px;
	.page-404 {
		width: 349px;
		height: 190px;
	}
	.page-logo {
		position: absolute;
		right: 40px;
		bottom: 40px;
		width: 60px;
		height: 98px;
	}
}
</style>
