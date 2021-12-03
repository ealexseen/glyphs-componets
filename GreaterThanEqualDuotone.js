"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M24 400h400a24 24 0 0124 24v48a24 24 0 01-24 24H24a24 24 0 01-24-24v-48a24 24 0 0124-24z",
  opacity: ".4"
})), 'GreaterThanEqualDuotone', '0 0 448 512');

exports["default"] = _default;