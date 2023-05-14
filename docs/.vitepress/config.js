export default {
    title: '3D博客',
    description: 'Just playing around.',
    head:[
        ['link', { rel: 'icon', href: '/icon-3d_blog.webp' }]
    ],
    lastUpdated: true,
    themeConfig: {
        siteTitle: "3D博客",  //左上角的
        logo: "/icon-3d_blog.webp",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
        nav: [                  //右上角的导航栏
          {
            text: "Three.js",             //导航标签的名字
            items: [                  //这种格式是有下拉菜单的版本
                { text: "暂无", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
                { text: "暂无", link: "/articles/vue/index" },
            ],
          },
          { text: "欢迎投稿", link: "https://github.com/ShineYull/3D_Blog-Docs" },   //这种是没有下拉菜单的版本
        ],
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/ShineYull/ai-docs" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
        sidebar: {
            "/Folio-2019/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "认识 Folio-2019", link: "/Folio-2019/getting-started" },
                    ],
                },
                // {
                //     text: "安装",    //标签名字
                //     collapsible: true,    //是不是可以动态展开
                //     collapsed: false,      //默认是不是展开
                //     items: [              //孩子
                //         { text: "本地部署", link: "/Folio-2019/install" },
                //     ],
                // },
                // {
                //     text: "使用",    //标签名字
                //     collapsible: true,    //是不是可以动态展开
                //     collapsed: false,      //默认是不是展开
                //     items: [              //孩子
                //         { text: "文字生成图片", link: "/Folio-2019/txt2img" },
                //         { text: "lora模型使用", link: "/Folio-2019/lora" },
                //         { text: "图片生成图片", link: "/Folio-2019/img2img" },
                //     ],
                // },
                // {
                //     text: "解决问题",    //标签名字
                //     collapsible: true,    //是不是可以动态展开
                //     collapsed: false,      //默认是不是展开
                //     items: [              //孩子
                //         { text: "生成的图片模糊灰暗", link: "/Folio-2019/image-generation-problem" },
                //     ],
                // },
                // {
                //     text: "扩展",    //标签名字
                //     collapsible: true,    //是不是可以动态展开
                //     collapsed: false,      //默认是不是展开
                //     items: [              //孩子
                //         { text: "ControlNet", link: "/Folio-2019/controlnet" },
                //         { text: "Mov2mov", link: "/Folio-2019/mov2mov" },
                //     ],
                // },
            ],
            "/3d_blog_editor/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "介绍", link: "/3d_blog_editor/getting-started" },
                    ],
                },
                // {
                //     text: "安装",    //标签名字
                //     collapsible: true,    //是不是可以动态展开
                //     collapsed: false,      //默认是不是展开
                //     items: [              //孩子
                //         { text: "拉取项目", link: "/3d_blog_editor/install" },
                //     ],
                // },
            ],
            "/about-3d_blog/": [
                {
                    text: "关于3D博客",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "企鹅群", link: "/about-3d_blog/about-3d_blog.md" },
                    ],
                },
            ],
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright ©2023 By <a href="https://github.com/shineyull">Shine</a>'
        },
        editLink: {
            pattern: 'https://github.com/ShineYull/3D_Blog-Docs/issues',
            text: '欢迎提issues'
        },
        lastUpdatedText: "最近一次更新",
    },
}
