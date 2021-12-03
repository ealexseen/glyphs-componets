"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M192 64h-64V16a16 16 0 0116-16h32a16 16 0 0116 16zm-64 384v48a16 16 0 0016 16h32a16 16 0 0016-16v-48z",
  opacity: ".4"
})), 'DollarSignDuotone', '0 0 320 512');

exports["default"] = _default;