<template>
	<div :class="{'Introduction':true}">
		<div class="item">站长：hk</div>
		<div class="item">邮箱：350839123@qq.com</div>
		<div class="item">湘ICP备20010293号</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Introduction',
	components: {
		
	},
	data(){
		return {
			list:[]
		}
	},
	mounted() {
	},
	
	methods:{
		
	
	}
}
</script>

<style scoped="scoped" lang="scss">
.Introduction{
	margin-top: 10px;
	width: 200px;
	&.fixed{
		position: fixed;
		top: 0;
	}
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	font-size: 13px;
	
	.item{
		line-height: 2;
		color: #8590a6;
		&:hover{
			color: #175199;
			cursor: pointer;
		}
	}
}
</style>
