"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M256 0v128l64-32 64 32V0h112a16 16 0 0116 16v224a16 16 0 01-16 16H144a16 16 0 01-16-16V16a16 16 0 0116-16z",
  opacity: ".4"
})), 'PalletDuotone', '0 0 640 512');

exports["default"] = _default;