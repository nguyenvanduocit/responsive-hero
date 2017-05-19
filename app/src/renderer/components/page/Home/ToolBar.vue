<template>
	<div class="tool-bar">
		<div class="inner">
			<input v-model="address" class="address" type="text" @keydown.enter.prevent="go">
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      address: ''
    }
  },
  mounted () {
    this.address = this.$store.getters.url
  },
  methods: {
    go () {
      this.$store.commit('setUrl', this.address)
    }
  }
}
</script>
<style lang="scss" scoped>
	.tool-bar{
		width: 100%;
		margin-top: 20px;
		margin-bottom: 20px;
		padding: 30px;
		text-align: center;
		display: flex;
		justify-content: center;
		.inner{
			box-shadow: 0 10px 20px 0 rgba(26, 37, 54, 0.27);
			background-image:linear-gradient(to right, #868f96 0%, #596164 100%);
			padding: 2px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 30px;
			width: 100%;
			max-width: 500px;
			.address{
				border-radius: 30px;
				width: 100%;
				border: none;
				outline: none;
				padding: 10px 15px;
			}
		}
	}
</style>
