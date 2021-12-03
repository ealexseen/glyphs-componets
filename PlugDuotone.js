"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M96 0a32 32 0 00-32 32v96h64V32A32 32 0 0096 0zm192 0a32 32 0 00-32 32v96h64V32a32 32 0 00-32-32z",
  opacity: ".4"
})), 'PlugDuotone', '0 0 384 512');

exports["default"] = _default;