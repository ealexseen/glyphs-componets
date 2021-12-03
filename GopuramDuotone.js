"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M224 224h32v-96h-32zm-32 128h32V224h-32zm-32 160h32V352h-32zm256-288v128h32V224zm-32-96v96h32v-96zm64 224v160h32V352z",
  opacity: ".4"
})), 'GopuramDuotone', '0 0 640 512');

exports["default"] = _default;