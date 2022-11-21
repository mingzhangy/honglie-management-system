export default [
  {
    path: '/enterprise-info',
    name: 'enterprise-info',
    icon: 'bar-chart',
    routes: [
      {
        path: '/enterprise-info/basic-info',
        name: 'basic-info',
        icon: 'home',
        component: './pages/dashboard/analysis',
      },
      {
        path: '/enterprise-info/environmental-protection',
        name: 'environmental-protection',
        icon: 'home',
        component: 'Demos/BaseDemo',
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
        icon: 'file',
        component: 'Demos/DataConvertNewEdit',
      },
      {
        path: '/static-file-management/eia-information',
        name: 'eia-information',
        icon: 'file',
        component: 'Demos/DataConvertSearch',
      },
      {
        path: '/static-file-management/acceptance-data',
        name: 'acceptance-data',
        icon: 'file',
        component: 'Demos/MultiEdit',
      },
      {
        path: '/static-file-management/contingency-plan',
        name: 'contingency-plan',
        icon: 'file',
        component: 'Demos/ProTable',
      },
      {
        path: '/static-file-management/pollution-discharge-permits',
        name: 'pollution-discharge-permits',
        icon: 'file',
        component: 'Demos/RecordCopy',
      },
      {
        path: '/static-file-management/cleaner-production',
        name: 'cleaner-production',
        icon: 'file',
        component: 'Demos/RecordDetails',
      },
    ],
  },
  {
    path: '/dynamic-file-anagement',
    name: 'dynamic-file-anagement',
    component: 'Demos/ContextAPI',
    icon: 'file-text',
    routes: [
      {
        path: '/dynamic-file-anagement/operation-pollution-prevention',
        name: 'operation-pollution-prevention',
        icon: 'file-text',
        component: 'Demos/SelectCtrl',
      },
      {
        path: '/dynamic-file-anagement/auxiliary-materials',
        name: 'auxiliary-materials',
        icon: 'file-text',
        component: 'Demos/SelectCtrl',
      },
      {
        path: '/dynamic-file-anagement/self-monitoring',
        name: 'self-monitoring',
        icon: 'file-text',
        component: 'Demos/SelectCtrl',
      },
      {
        path: '/dynamic-file-anagement/hazardous-waste-management',
        name: 'hazardous-waste-management',
        icon: 'file-text',
        component: 'Demos/SelectCtrl',
      },
      {
        path: '/dynamic-file-anagement/production-facilities',
        name: 'production-facilities',
        icon: 'file-text',
        component: 'Demos/SelectCtrl',
      },
      {
        path: '/dynamic-file-anagement/others',
        name: 'others',
        icon: 'file-text',
        component: 'Demos/SelectCtrl',
      },
    ],
  },
  {
    path: '/platform-filling-simulation',
    name: 'platform-filling-simulation',
    component: 'Demos/SelectCtrl',
    icon: 'file-word',
  },

  {
    path: '/corporate-health-diagnostics',
    name: 'corporate-health-diagnostics',
    component: 'Demos/BatchAct',
    icon: 'monitor',
  },
  {
    path: '/environmental-consulting',
    name: 'environmental-consulting',
    component: 'Demos/WeirdList',
    icon: 'phone',
  },
  {
    path: '/knowledge-base',
    name: 'knowledge-base',
    component: 'Demos/DataConvertSearch',
    icon: 'book',
  },
  {
    path: '/requirements-release',
    name: 'requirements-release',
    component: 'Demos/WeirdQuery',
    icon: 'api',
  },
  {
    path: '/order-center',
    name: 'order-center',
    component: 'Demos/Charts',
    icon: 'container',
  },
  {
    component: '404',
  },
];
