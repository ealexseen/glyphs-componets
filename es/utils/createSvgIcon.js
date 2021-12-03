import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import SvgIcon from '@arcadia/ui/Icon';

function createSvgIcon(path, displayName, viewBox = '0 0 24 24') {
  let Icon = props => React.createElement(SvgIcon, _extends({
    viewBox: viewBox
  }, props), path);

  Icon.displayName = `${displayName}Icon`;
  Icon = React.memo(Icon);
  return Icon;
}

export default createSvgIcon;