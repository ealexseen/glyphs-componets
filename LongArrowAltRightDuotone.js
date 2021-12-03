"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M12.1 216H314v80H12.1a12 12 0 01-12-12v-56a12 12 0 0112-12z",
  opacity: ".4"
})), 'LongArrowAltRightDuotone', '0 0 448 512');

exports["default"] = _default;