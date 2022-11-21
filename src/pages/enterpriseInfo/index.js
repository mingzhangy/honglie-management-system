import React from 'react';
import moment from 'moment';
import { Popconfirm, Typography, Divider, Badge } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const { Title, Paragraph, Text } = Typography;

export default (props) => {
  return (
    <PageContainer>
      <div>
        <div style={{ width: 880, margin: '0 auto' }}>
          <Typography>
            <Title>
              {' '}
              <div
                style={{
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  marginRight: 8,
                  background: 'red',
                  verticalAlign: 'middle',
                }}
              />
              公司简介
            </Title>
            <Divider />
            <Paragraph>
              四川省宏茂环保技术服务有限公司位于成都市高新技术开发区，是一家专业提供环保服务、解决环境综合问题的高新技术企业，通过四川省质量监督局检验检测机构资质认定，获得CMA认证的第三方检验检测服务单位，同时也是四川省环境保护产业协会会员单位。致力于为政府及企事业单位提供环境保护咨询、环境保护检测、环境影响评价、竣工环保设施验收、突发环境事件应急预案、排污许可证申办、清洁生产审核、节能评估、水土保持方案编制、水保验收和环保管家等环保技术咨询服务。
            </Paragraph>
            <Title level={2}>公司概况</Title>
            <Divider />
            <Paragraph>
              公司采用现代企业管理体系，建立了完善的项目技术服务工作制度及质量控制制度，通过了ISO14001、ISO9001、OHSAS18001体系认证，企业信用等级评价为AAA级。
            </Paragraph>
            <Paragraph>
              公司拥有近1000㎡的现代化实验室，配备有气相色谱仪、离子色谱仪、液相色谱仪、原子吸收分光光度计、原子荧光等大型仪器在内的各类检测设备200余台，拥有8项实用新型专利，10项发明专利。
            </Paragraph>
            <Paragraph>
              公司现有员工44人，其中本科学历27人，专科学历17人，高级工程师3人，工程师5人，由四川大学、西南交通大学、四川师范大学等各大高校优秀毕业生组成，85%以上具有化学、环境工程、医药卫生、环境监测与治理技术、食品生物技术等大学本科学历。
            </Paragraph>
            <Paragraph>
              公司成立至今，与各大公司建立了良好的战略合作关系，营业额以200%的速度增长，专业的服务质量以及友好的服务态度得到了客户的青睐与认可。未来，公司将继续深耕检测市场，以专业的团队、规范化的管理、先进的设备，打造科学、公正、诚信、高效的企业品牌，竭尽所能为企业以及广大社会公众的生命健康与财产安全保驾护航。
            </Paragraph>
          </Typography>
        </div>
      </div>
    </PageContainer>
  );
};
