// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';

const city = require('./geographic/city.json');
const province = require('./geographic/province.json');

function getProvince(_: Request, res: Response) {
  return res.json({
    data: province,
  });
}

function getCity(req: Request, res: Response) {
  return res.json({
    data: city[req.params.province],
  });
}

function getCurrentUse(req: Request, res: Response) {
  return res.json({
    data: {
      name: 'xxxx',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'hongmao@163.com',
      profile: '过于性感，没有简介',
      signature: '海纳百川，有容乃大',
      title: '销售专家',
      group: '宏茂环保－某某某事业群－某某平台部－某某技术部－销售实施二部',
      tags: [
        {
          key: '0',
          label: '很有想法的',
        },
        {
          key: '1',
          label: '专注设计',
        },
        {
          key: '2',
          label: '辣~',
        },
        {
          key: '3',
          label: '大长腿',
        },
        {
          key: '4',
          label: '川妹子',
        },
        {
          key: '5',
          label: '海纳百川',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: {
          label: '四川省',
          key: '330000',
        },
        city: {
          label: '成都市',
          key: '330100',
        },
      },
      address: '高新区科新路6号1栋4层1号',
      phone: '028-64266044',
    },
  });
}
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET  /api/accountSettingCurrentUser': getCurrentUse,
  'GET  /api/geographic/province': getProvince,
  'GET  /api/geographic/city/:province': getCity,
};
