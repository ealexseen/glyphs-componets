"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M440 256l-34.68 32H288v117.34L256 440l-32-34.68V288H106.66L72 256l34.68-32H224V106.66L256 72l32 34.67V224h117.34z",
  opacity: ".4"
})), 'ArrowsDuotone', '0 0 512 512');

exports["default"] = _default;