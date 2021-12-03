"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M640 112v224a48 48 0 01-48 48H176a48 48 0 01-48-48V48a48 48 0 0148-48h160l64 64h192a48 48 0 0148 48z",
  opacity: ".4"
})), 'FoldersDuotone', '0 0 640 512');

exports["default"] = _default;