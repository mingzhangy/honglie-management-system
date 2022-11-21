import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import routeConfig from '@/../config/routes';

import { BankOutlined } from '@ant-design/icons';

const findRouteMatch = (routeList, isMatch) => {
  let matchItem = null;
  routeList.some((item) => {
    if (item.routes) {
      matchItem = findRouteMatch(item.routes, isMatch);
    } else if (isMatch(item)) {
      matchItem = item;
    }

    return !!matchItem;
  });

  return matchItem;
};

export default (props) => {
  const [extraContent, setExtraContent] = useState(null);

  const {
    children,
    location: { pathname },
    route: { routes },
  } = props;

  const matchRouteItem = routes.find((item) => item.path === pathname);

  const matchConfigItem = matchRouteItem
    ? findRouteMatch(routeConfig, (item) => {
        return (
          item.name === matchRouteItem.name && matchRouteItem.path.indexOf(`/${item.path}`) > 0
        );
      })
    : null;

  useEffect(() => {
    let timeId;

    const tryLoad = () => {
      timeId = null;

      if (!matchConfigItem) {
        return;
      }

      const containerNode = document.getElementById('page-header-bottom');

      if (containerNode) {
        setExtraContent(
          ReactDOM.createPortal(
            <>
              <a
                href={`https://www.tianyancha.com/company/3221786760`}
                target="_blank"
              >
                <BankOutlined /> 查看企业注册信息
              </a>
            </>,
            containerNode,
          ),
        );
      } else {
        timeId = setTimeout(tryLoad, 10);
      }
    };

    tryLoad();

    return () => clearTimeout(timeId);
  }, [matchConfigItem]);

  return (
    <>
      {React.cloneElement(children, props)}
      {extraContent}
      {matchConfigItem && <style>{`#page-header-bottom{ height: 32px}`}</style>}
    </>
  );
};
