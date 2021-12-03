"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M320 384H128V224H64v256a32 32 0 0032 32h256a32 32 0 0032-32V224h-64zm192-160v272a16 16 0 0016 16h32a16 16 0 0016-16V224z",
  opacity: ".4"
})), 'StoreAltDuotone', '0 0 640 512');

exports["default"] = _default;