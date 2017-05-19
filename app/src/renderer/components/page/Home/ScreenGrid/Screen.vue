<template>
	<div class="screen">
		<div class="header">
			<div class="name">{{ screen.name }} - {{ this.orientation }}{{ message }}</div>
			<div class="actions">
				<a @click.prevent="toggleOrientation" href="#"><i class="icon-screen_rotation"></i></a>
				<a @click.prevent="openDevTool" href="#"><i class="icon-tools"></i></a>
			</div>
		</div>
		<webview ref="webview" :style="style" :src="url" :useragent="screen.useragent" @did-start-loading="message = ' - Loading...'" @did-stop-loading="message = ''" @load-commit="onLoadNewUrl" @new-window="newWindow" disablewebsecurity allowpopups></webview>
	</div>
</template>
<script>
const {shell} = window.require('electron')
import {mapGetters} from 'vuex'
export default {
  props: {
    screen: {
      type: Object,
      default () {
        return {
          name: 'iPhone 7',
          width: '375px',
          height: '667px',
          useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      url: 'url'
    }),
    style () {
      if (this.orientation === 'portrait') {
        return {
          width: this.screen.width,
          height: '500px'
        }
      } else if (this.orientation === 'landscape') {
        return {
          width: this.screen.height,
          height: '500px'
        }
      }
    }
  },
  data () {
    return {
      orientation: 'portrait', // landscape,
      message: ''
    }
  },
  methods: {
    openDevTool () {
      this.$refs.webview.openDevTools()
    },
    toggleOrientation () {
      this.orientation = this.orientation === 'portrait' ? 'landscape' : 'portrait'
      this.$el.scrollIntoView()
    },
    onLoadNewUrl (event) {
      if (event.url !== this.url) {
        this.$store.commit('setUrl', event.url)
      } else {
        event.prevent
      }
    },
    newWindow (event) {
      let {protocol} = window.require('url').parse(event.url)
      if (protocol === 'http:' || protocol === 'https:') {
        shell.openExternal(event.url)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
	.screen{
		background: #ffffff;
		margin: 30px;
		flex-shrink: 0;
		flex-grow: 0;
		border: 1px solid #c0c7d5;
		box-shadow: 0 10px 20px 0 #DFE6F4;
		.header{
			text-align: center;
			padding: 10px 15px;
			border-bottom: 1px solid #c0c7d5;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.name{
				font-size: 16px;
			}
			.actions{
				display: flex;
				justify-content: center;
				align-items: center;
				a{
					color: #2c3958;
					text-decoration: none;
					display: block;
					background: #fff;
					border-radius: 2px;
					padding: 3px 10px;
					font-size: 14px;
					border: 1px solid #d9e1ef;
					& + a{
						margin-left: 10px;
					}
				}
			}
		}
		webview{}
	}
</style>
