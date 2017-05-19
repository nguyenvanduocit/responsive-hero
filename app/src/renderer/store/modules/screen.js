export default {
  namespaced: true,
  state: {
    list: [
      {
        name: 'iPhone 5',
        width: '320px',
        height: '568px',
        useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
      },
      {
        name: 'iPhone 6',
        width: '375px',
        height: '667px',
        useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
      },
      {
        name: 'Galaxy S5',
        width: '360px',
        height: '640px',
        useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
      },
      {
        name: 'Nexus 5x',
        width: '412px',
        height: '732px',
        useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
      },
      {
        name: 'iPad',
        width: '768px',
        height: '1024px',
        useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
      },
      {
        name: 'iPad Pro',
        width: '1024px',
        height: '1366px',
        useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    list: state => state.list
  }
}
