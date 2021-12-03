"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M104 384h208a8 8 0 018 8v16a8 8 0 01-8 8H104a8 8 0 01-8-8v-16a8 8 0 018-8z",
  opacity: ".4"
})), 'MicroscopeDuotone', '0 0 512 512');

exports["default"] = _default;