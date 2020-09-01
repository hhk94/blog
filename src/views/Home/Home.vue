<template>
	<div class="home-bg">
		<img src="@/assets/img/word-center.png" alt="" class="word-center">
	</div>
	
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	components: {
	},
	data(){
		return {
		}
	},
}
</script>

<style lang="scss" scoped>
.el-aside {

}

::v-deep .el-main {
	padding-top: 0;
}
.home-bg{
	position: relative;
	width: 100%;
	// background-color: black;
	background: black url('~@/assets/img/lol-bg4.jpg') no-repeat center center /cover;
	min-height:  calc(100vh - 60px);
	.word-center{
		width: fit-content;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%,-50%,0);
	}
}

</style>
