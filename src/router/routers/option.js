export default [
    {
        // 功能权限管理
        path: 'functionalAuthority',
        name: 'functionalAuthority',
        meta: {
            title: '功能权限管理'
        },
        component: () => import('@/views/functionalAuthority/functionalAuthority')
    },
    {
        // 产品线列表
        path: 'productLineList',
        name: 'productLineList',
        meta: {
            title: '产品线列表'
        },
        component: () => import('@/views/productManagement/productLineList')
    },
    {
        // 公司列表
        path: 'companyList',
        name: 'companyList',
        meta: {
            title: '公司列表'
        },
        component: () => import('@/views/productManagement/companyList')
    },
    {
        // 产品类别列表
        path: 'productCategoryList',
        name: 'productCategoryList',
        meta: {
            title: '产品类别列表'
        },
        component: () => import('@/views/productManagement/productCategoryList/productCategoryList')
    },
    {
        // 语言列表
        path: 'languageManagement',
        name: 'languageManagement',
        meta: {
            title: '语言列表'
        },
        component: () => import('@/views/productManagement/languageManagement/languageManagement')
    },
    {
        // 产品列表
        path: 'productList',
        name: 'productList',
        meta: {
            title: '产品列表'
        },
        component: () => import('@/views/productManagement/productList/productList')
    },
    {
        // 彩页列表
        path: 'colorPageList',
        name: 'colorPageList',
        meta: {
            title: '彩页列表'
        },
        component: () => import('@/views/productManagement/colorPageList/colorPageList')
    },
    {
        // 视频列表
        path: 'videoList',
        name: 'videoList',
        meta: {
            title: '视频列表'
        },
        component: () => import('@/views/productManagement/videoList/videoList')
    },
    
]