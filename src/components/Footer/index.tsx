import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const defaultMessage = '四川省宏茂环保技术服务有限公司';
  return (
    <DefaultFooter
      copyright={`2022 ${defaultMessage}`}
      links={[
        {
          key: 'info',
          title: '企业注册信息',
          href: 'https://www.tianyancha.com/company/3221786760',
          blankTarget: true,
        },
        {
          key: 'website',
          title: '官网地址',
          href: 'http://www.schmhb.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};
