import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import SvgIcon from '@arcadia/ui/Icon';

function createSvgIcon(path, displayName) {
  var viewBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0 0 24 24';

  var Icon = function Icon(props) {
    return React.createElement(SvgIcon, _extends({
      viewBox: viewBox
    }, props), path);
  };

  Icon.displayName = "".concat(displayName, "Icon");
  Icon = React.memo(Icon);
  return Icon;
}

export default createSvgIcon;