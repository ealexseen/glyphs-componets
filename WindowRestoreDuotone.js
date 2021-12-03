"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M512 48v288a48 48 0 01-48 48h-48V176a80.11 80.11 0 00-80-80H128V48a48 48 0 0148-48h288a48 48 0 0148 48z",
  opacity: ".4"
})), 'WindowRestoreDuotone', '0 0 512 512');

exports["default"] = _default;