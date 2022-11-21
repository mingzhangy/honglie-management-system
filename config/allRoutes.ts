export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/Login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'bar-chart',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
      },
      {
        name: 'analysis',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
      },
      {
        name: 'monitor',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './dashboard/monitor',
      },
      {
        name: 'workplace',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './dashboard/workplace',
      },
    ],
  },
  {
    path: '/list',
    icon: 'appstore',
    name: 'list',
    routes: [
      {
        path: '/list',
        redirect: '/list/table-list',
      },
      {
        name: 'table-list',
        icon: 'smile',
        path: '/list/table-list',
        component: './list/table-list',
      },
      {
        name: 'basic-list',
        icon: 'smile',
        path: '/list/basic-list',
        component: './list/basic-list',
      },
      {
        name: 'card-list',
        icon: 'smile',
        path: '/list/card-list',
        component: './list/card-list',
      },
    ],
  },
  {
    path: '/project',
    icon: 'build',
    name: 'project',
    component: './list/search',
    routes: [
      {
        path: '/project',
        redirect: '/list/search/articles',
      },
      {
        name: 'articles',
        icon: 'smile',
        path: '/project/articles',
        component: './list/search/articles',
      },
      {
        name: 'projects',
        icon: 'smile',
        path: '/project/projects',
        component: './list/search/projects',
      },
      {
        name: 'applications',
        icon: 'smile',
        path: '/project/applications',
        component: './list/search/applications',
      },
    ],
  },
  {
    path: '/purchasing',
    icon: 'pay-circle',
    name: 'purchasing',
    routes: [
      {
        path: '/purchasing',
        redirect: '/purchasing/supplier',
      },
      {
        name: 'supplier',
        icon: 'smile',
        path: '/purchasing/supplier',
        component: './list/table-list',
      },
      {
        name: 'apply',
        icon: 'smile',
        path: '/purchasing/apply',
        component: './list/table-list',
      },
      {
        name: 'instore',
        icon: 'smile',
        path: '/purchasing/instore',
        component: './list/table-list',
      },
      {
        name: 'outstore',
        icon: 'smile',
        path: '/purchasing/outstore',
        component: './list/table-list',
      },
      {
        name: 'stock',
        icon: 'smile',
        path: '/purchasing/stock',
        component: './list/table-list',
      },
      {
        name: 'inventory',
        icon: 'smile',
        path: '/purchasing/inventory',
        component: './list/table-list',
      },
    ],
  },
  {
    path: '/profile',
    name: 'profile',
    icon: 'money-collect',
    routes: [
      {
        path: '/profile',
        redirect: '/profile/basic',
      },
      {
        name: 'basic',
        icon: 'smile',
        path: '/profile/basic',
        component: './profile/basic',
      },
      {
        name: 'advanced',
        icon: 'smile',
        path: '/profile/advanced',
        component: './profile/advanced',
      },
    ],
  },
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        icon: 'smile',
        path: '/account/center',
        component: './list/table-list',
      },
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
      },
    ],
  },
  {
    name: 'editor',
    icon: 'book',
    path: '/editor',
    routes: [
      {
        path: '/editor',
        redirect: '/editor/flow',
      },
      {
        name: 'flow',
        icon: 'smile',
        path: '/editor/flow',
        component: './editor/flow',
      },
      {
        name: 'mind',
        icon: 'smile',
        path: '/editor/mind',
        component: './editor/mind',
      },
      {
        name: 'koni',
        icon: 'smile',
        path: '/editor/koni',
        component: './editor/koni',
      },
    ],
  },
  {
    path: '/form',
    icon: 'lock',
    name: 'form',
    component: './form/advanced-form',
  },
  // user routes
  {
    path: '/enterprise-info',
    name: 'enterprise-info',
    icon: 'home',
    routes: [
      {
        path: '/enterprise-info/basic-info',
        name: 'basic-info',
        component: './enterpriseInfo',
      },
      {
        path: '/enterprise-info/environmental-protection',
        name: 'environmental-protection',
        component: './list/table-list',
      },
    ],
  },
  {
    path: '/static-file-management',
    name: 'static-file-management',
    icon: 'file',
    routes: [
      {
        path: '/static-file-management/base-file',
        name: 'base-file',
        component: './list/table-list',
      },
      {
        path: '/static-file-management/eia-information',
        name: 'eia-information',
        component: './list/table-list',
      },
      {
        path: '/static-file-management/acceptance-data',
        name: 'acceptance-data',
        component: './list/table-list',
      },
      {
        path: '/static-file-management/contingency-plan',
        name: 'contingency-plan',
        component: './list/table-list',
      },
      {
        path: '/static-file-management/pollution-discharge-permits',
        name: 'pollution-discharge-permits',
        component: './list/table-list',
      },
      {
        path: '/static-file-management/cleaner-production',
        name: 'cleaner-production',
        component: './list/table-list',
      },
    ],
  },
  {
    path: '/dynamic-file-anagement',
    name: 'dynamic-file-anagement',
    icon: 'file-text',
    routes: [
      {
        path: '/dynamic-file-anagement/operation-pollution-prevention',
        name: 'operation-pollution-prevention',
        component: './list/table-list',
      },
      {
        path: '/dynamic-file-anagement/auxiliary-materials',
        name: 'auxiliary-materials',
        component: './list/table-list',
      },
      {
        path: '/dynamic-file-anagement/self-monitoring',
        name: 'self-monitoring',
        component: './list/table-list',
      },
      {
        path: '/dynamic-file-anagement/hazardous-waste-management',
        name: 'hazardous-waste-management',
        component: './list/table-list',
      },
      {
        path: '/dynamic-file-anagement/production-facilities',
        name: 'production-facilities',
        component: './list/table-list',
      },
      {
        path: '/dynamic-file-anagement/others',
        name: 'others',
        component: './list/table-list',
      },
    ],
  },
  {
    path: '/platform-filling-simulation',
    name: 'platform-filling-simulation',
    component: './list/table-list',
    icon: 'file-word',
  },

  {
    path: '/corporate-health-diagnostics',
    name: 'corporate-health-diagnostics',
    component: './list/table-list',
    icon: 'audit',
  },
  {
    path: '/environmental-consulting',
    name: 'environmental-consulting',
    component: './list/table-list',
    icon: 'phone',
  },
  {
    path: '/knowledge-base',
    name: 'knowledge-base',
    component: './list/table-list',
    icon: 'book',
  },
  {
    path: '/requirements-release',
    name: 'requirements-release',
    component: './list/table-list',
    icon: 'api',
  },
  {
    path: '/order-center',
    name: 'order-center',
    component: './list/table-list',
    icon: 'container',
  },
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
  {
    component: '404',
  },
];
