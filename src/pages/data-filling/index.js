import React, { useState } from 'react';
import { Card, Form, Button, message, Table, Space, Tag } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

export default () => {
  let rules = [];
  const columns = [
    {
      title: '填报模板ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '模板名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '描述',
      dataIndex: 'des',
      key: 'des',
    },
    {
      title: '填报人标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>修改</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const data = [];
  const tags = [
    'nice',
    'developer',
    'loser',
    'teacher',
    'cool',
    'porner',
    'faker',
    'cayon',
    'penuat',
    'showmaker',
  ];
  const names = ['建辉', '晋鹏', '天磊', '绍辉', '泽洋', '鹏煊', '靖琪', '明辉', '伟诚', '明轩'];
  let idx = 0;
  for (let i = 0; i < 100; i++, idx++) {
    if (idx > 9) {
      idx = 0;
    }
    const record = {
      id: i + 1,
      name: `${names[idx]}的填报模板`,
      des: `这是大帅哥才能创建出来的模板${i + 1}`,
      tags: [tags[idx], tags[idx + 1 > 9 ? idx - 1 : idx + 1]],
    };
    data.push(record);
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const submit = () => {
    if (selectedRowKeys.length === 0) {
      message.warning('请至少选中一条数据填报模板', 5);
      return;
    }
    message.success(`您已提交${selectedRowKeys.length}条填报数据，请耐心等待相关审核人员审批。`, 3);
  };

  return (
    <PageContainer>
      <p>
        平台填报模拟中，可以使用
        <code>一键填报</code>功能， 选择对应数据模板后，点击下方提交按钮即可
      </p>
      <Card
        title={
          <span>
            <span>一键数据填报模板选择</span>
            {selectedRowKeys.length > 0 ? (
              <b>-&gt;【已选择{selectedRowKeys.length}个数据模板】</b>
            ) : null}
          </span>
        }
      >
        <Table rowKey="id" columns={columns} dataSource={data} rowSelection={rowSelection} />
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" size="large" onClick={submit}>
            提交至宏茂审核处
          </Button>
        </div>
      </Card>
    </PageContainer>
  );
};
