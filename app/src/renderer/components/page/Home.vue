<template>
	<main class="main-view">
		<tool-bar></tool-bar>
		<screen-grid></screen-grid>
	</main>
</template>
<script>
import ToolBar from './Home/ToolBar.vue'
import ScreenGrid from './Home/ScreenGrid.vue'
export default {
  components: {
    ToolBar,
    ScreenGrid
  }
}
</script>
