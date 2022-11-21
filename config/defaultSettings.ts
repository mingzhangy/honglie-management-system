import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '宏茂环保科技',
  pwa: false,
  logo: 'https://aimg8.dlssyht.cn/u/2087237/module/simplepicbackground/2087237/3342/6682063_1626922590.png?x-oss-process=image/resize,m_fixed,w_278,h_75,limit_0',
  iconfontUrl: '',
};

export default Settings;
