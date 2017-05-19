<template>
	<div class="screen-grid">
		<div class="screen" v-for="(screen, index) in screenList" :key="index">
			<Screen :screen="screen"></Screen>
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
import Screen from './ScreenGrid/Screen.vue'
export default {
  components: {
    Screen
  },
  computed: {
    ...mapGetters({
      screenList: 'screen/list',
      url: 'url'
    })
  }
}
</script>
<style lang="scss" scoped>
	.screen-grid{
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
	}
</style>
