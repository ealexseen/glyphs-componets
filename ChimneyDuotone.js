"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M160 224H32v128h128zM32 512h288V384H32zm320 0h128V384H352zM192 224v128h288V224z",
  opacity: ".4"
})), 'ChimneyDuotone', '0 0 512 512');

exports["default"] = _default;