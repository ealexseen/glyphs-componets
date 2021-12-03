"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M96 160H64a96 96 0 0196-96h320a96 96 0 0196 96h-32a64.06 64.06 0 00-64 64v64H160v-64a64.06 64.06 0 00-64-64z",
  opacity: ".4"
})), 'CouchDuotone', '0 0 640 512');

exports["default"] = _default;