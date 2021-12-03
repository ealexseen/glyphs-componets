"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M288 160v96h160v-96zm0 256h160v-96H288zM64 256h160v-96H64zm0 160h160v-96H64z",
  opacity: ".4"
})), 'TableDuotone', '0 0 512 512');

exports["default"] = _default;