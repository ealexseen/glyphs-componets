"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("@arcadia/ui/Icon"));

function createSvgIcon(path, displayName) {
  var viewBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0 0 24 24';

  var Icon = function Icon(props) {
    return _react["default"].createElement(_Icon["default"], (0, _extends2["default"])({
      viewBox: viewBox
    }, props), path);
  };

  Icon.displayName = "".concat(displayName, "Icon");
  Icon = _react["default"].memo(Icon);
  return Icon;
}

var _default = createSvgIcon;
exports["default"] = _default;