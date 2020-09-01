<template>
	<div class="substats">
		<div class="substats-img">
			<img :src="img" alt="">
		</div>
		
		
		
	</div>
</template>

<script>
// @ is an alias to /src
import Article from '@/kun/api/article'
export default {
	name: 'Substats',
	components: {
		
	},
	data(){
		return {
			img:''
		}
	},
	mounted() {
		this.get_visit_count()
	},
	
	methods:{
		async get_visit_count(){
			let result
			try {
				this.loading = true
				result = await Article.get_visit_count()
			} catch (e) {
				this.loading = false
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				// console.log(result)
				this.img =`https://img.shields.io/badge/${result.data.hit}-${result.data.data}-blue`
			}
		},
	}
}
</script>

<style scoped="scoped" lang="scss">
.substats{
	background-color: white;
	margin-bottom: 20px;
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	.substats-img{
		width: 50%;
		img{
			width: fit-content;
			margin: 5px auto;
		}
	}
}
</style>
