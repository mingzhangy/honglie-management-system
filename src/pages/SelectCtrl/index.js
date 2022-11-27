import React from 'react';
import { Card, Form, Button, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

export default () => {
  let rules = [];

  const onFinish = (values) => {
    console.log('表单数据', values);
  };

  const submit = () => {
    if (rules.length === 0) {
      message.warning('请至少选中一条填报规则模板', 5);
      return;
    }
    message.success(`您已提交${rules.length}条填报数据，请耐心等待相关审核人员审批。`, 3);
  };

  return (
    <PageContainer>
      <p>
        平台填报模拟中，可以点击下方
        <code>一键填报</code>功能， 选择对应模板数据后，直接确定即可一键填报
      </p>
      <Card title="一键填报规则模板选择">
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" size="large" onClick={submit}>
            提交至宏茂审核处
          </Button>
        </div>
      </Card>
    </PageContainer>
  );
};
