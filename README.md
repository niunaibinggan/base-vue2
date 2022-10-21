# base vite

- scss 变量注入
- alias
- cdn 引入，配置 resolve externals
- html 模板语法

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
# vite启动
npm run dev
```

### Compiles and minifies for production

```
npm dist
```

### Lints and fixes files

```
npm lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 工程结构

```
./
├── dist                       # 打包后路径
├── public                     # 静态资源
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── assets                 # 静态资源
│   ├── buz-components         # 公用业务组件
│   ├── components             # 公用木偶组件
│   ├── http                   # 请求
│   │  │── request             # 全局请求拦截器
│   │  └── common              # 全局共用api
│   ├── layouts                # 全局layouts
│   │  └── default
│   ├── modules                # 路由相关
│   │  │── router-guards       # 全局路由拦截器
│   │  │── router              # 全局路由表
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局方法
│   │  │── common              # 全局公共方法
│   │  │── filters             # 全局过滤器
│   ├── style                  # 全局样式
│   ├── views                  # 应用首页
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .browserslistrc            # 浏览器兼容清单，用于css前缀和js特性的编译时查询
├── .env.xxx                   # 环境变量配置
├── .eslintignore              # eslint 检查忽略文件列表
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # git忽略配置
├── .prettierrc                # prettier 配置
├──  babel.config.js           # babel 配置
├── vue.config.js              # vue-cli 配置
├── vite.config.js             # vite 配置
├── README                     # 工程介绍及指南
└── package.json               # package.json
```
