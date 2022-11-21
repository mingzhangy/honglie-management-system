import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import NoticeIconView from '../NoticeIcon';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="知识库"
        options={[
          {
            label: <a href="http://www.schmhb.cn/">知识库</a>,
            value: '知识库',
          },
          {
            label: <a href="http://www.schmhb.cn/">订单中心</a>,
            value: '订单中心',
          },
          {
            label: <a href="http://www.schmhb.cn/">应急预案</a>,
            value: '应急预案',
          },
          {
            label: <a href="http://www.schmhb.cn/">生产设备运行</a>,
            value: '生产设备运行',
          },
        ]} // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      <a
        target="_blank"
        href="http://www.schmhb.cn/"
        rel="noopener noreferrer"
        className={styles.action}
      >
        Docs
      </a>

      <a
        target="_blank"
        href="http://www.schmhb.cn/"
        rel="noopener noreferrer"
        className={styles.action}
      >
        Source
      </a>

      <a
        target="_blank"
        href="http://www.schmhb.cn/"
        rel="noopener noreferrer"
        className={styles.action}
      >
        Technology
      </a>
      <span
        className={styles.action}
        onClick={() => {
          window.open('http://www.schmhb.cn/');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <NoticeIconView />
      <Avatar menu />
      <SelectLang className={styles.action} />
    </Space>
  );
};

export default GlobalHeaderRight;
