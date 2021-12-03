"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M160 320a80 80 0 1080 80 80 80 0 00-80-80zm320 0a80 80 0 1080 80 80 80 0 00-80-80z",
  opacity: ".4"
})), 'ShuttleVanDuotone', '0 0 640 512');

exports["default"] = _default;