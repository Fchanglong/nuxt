// 挂载、激活app
import createApp from './main'

const {app,router,store} = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
  }
// store.start();
router.onReady(() => {
    app.$mount('#app')
})