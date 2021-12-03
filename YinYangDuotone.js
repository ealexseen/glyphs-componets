"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M256 64C150 64 64 150 64 256s86 192 192 192a96 96 0 010-192 96 96 0 000-192zm0 128a32 32 0 1132-32 32 32 0 01-32 32z",
  opacity: ".4"
})), 'YinYangDuotone', '0 0 512 512');

exports["default"] = _default;