"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M80 512a48 48 0 01-48-48V176a48 48 0 0148-48h48v208a80.09 80.09 0 0080 80h208v48a48 48 0 01-48 48z",
  opacity: ".4"
})), 'CloneDuotone', '0 0 576 512');

exports["default"] = _default;