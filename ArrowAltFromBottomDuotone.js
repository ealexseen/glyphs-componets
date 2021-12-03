"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M360 480H24a24 24 0 01-24-24v-16a24 24 0 0124-24h336a24 24 0 0124 24v16a24 24 0 01-24 24z",
  opacity: ".4"
})), 'ArrowAltFromBottomDuotone', '0 0 384 512');

exports["default"] = _default;