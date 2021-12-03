"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M160 480h192v-64H160zM32 352h64V160H32zM160 96h192V32H160zm256 64v192h64V160z",
  opacity: ".4"
})), 'VectorSquareDuotone', '0 0 512 512');

exports["default"] = _default;