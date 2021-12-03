"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M368 352a48 48 0 010 96H112a48 48 0 010-96h256m0-64H112a112 112 0 000 224h256a112 112 0 000-224z",
  opacity: ".4"
})), 'SnowplowDuotone', '0 0 640 512');

exports["default"] = _default;