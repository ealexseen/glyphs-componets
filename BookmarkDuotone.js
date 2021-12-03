"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M384 48v464L192 400 0 512V48A48 48 0 0148 0h16v400.57l95.75-55.85L192 325.91l32.25 18.81L320 400.57V0h16a48 48 0 0148 48z",
  opacity: ".4"
})), 'BookmarkDuotone', '0 0 384 512');

exports["default"] = _default;