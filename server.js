const express = require('express');
const fs = require('fs');
const Vue = require('vue');

const app = express();

const { createBundleRenderer } = require('vue-server-renderer');
// 读取生成的 server bundle 文件
const serverBundle = require('./dist/server/vue-ssr-server-bundle.json');

// 读取生成的 client manifest 文件
const clientManifest = require('./dist/client/vue-ssr-client-manifest.json');

// 创建一个 bundle renderer 实例
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync('./src/index.template.html', 'utf-8'),
  clientManifest,
});

// 为静态资源配置静态文件服务器
app.use(express.static('./dist/client',{index:false}));

app.get('*', async(req, res) => {
  try{
    const context = {
      url: req.url,
    };
    const html = await renderer.renderToString(context);
    // console.log(html);
    res.send(html);
  }catch(err) {
    console.log(err);
    res.send(err);
// res.status(500).send(err)
  }
});

app.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});
