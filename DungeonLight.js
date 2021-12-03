"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M240 177.62V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V177.62c-5.23-.89-10.52-1.62-16-1.62s-10.77.73-16 1.62zm-64 41.51V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V189.36c-12.78 7.45-23.84 17.47-32 29.77zM512 296c0-9.08-3.04-17.47-8.16-24.19 5.46-7.31 8.33-16.36 7.98-25.49-1.32-35.19-9.76-69.17-25.09-100.97-4.49-9.32-12.48-16.41-21.94-19.99.86-10.14-2.16-20.28-8.51-28.26-21.34-26.85-47.37-48.83-77.36-65.33a40.004 40.004 0 00-19.19-4.93c-3.45 0-6.83.45-10.09 1.31-5.17-8.82-13.55-15.38-23.4-18.2C303.29 3.35 279.65 0 256 0s-47.29 3.35-70.25 9.95c-9.83 2.82-18.22 9.38-23.39 18.2-3.26-.86-6.64-1.31-10.09-1.31-6.69 0-13.33 1.7-19.19 4.92-30 16.5-56.03 38.48-77.37 65.34-6.34 7.98-9.36 18.11-8.5 28.25-9.47 3.59-17.45 10.67-21.94 19.99C9.95 177.15 1.51 211.12.18 246.33c-.35 9.12 2.52 18.17 7.98 25.48A39.772 39.772 0 000 296v64c0 9 2.99 17.31 8.02 24C2.99 390.69 0 399 0 408v64c0 22.05 17.94 40 40 40h64c22.06 0 40-17.95 40-40v-64c0-9-2.99-17.31-8.02-24 5.03-6.69 8.02-15 8.02-24v-64c0-8.92-2.93-17.16-7.88-23.82a40.01 40.01 0 008.04-21.96c.71-12.54 3.74-25.12 9.02-37.4 2.66-6.19 3.67-12.68 3.2-18.97 6-2.32 11.44-6.08 15.78-11.05 7.3-8.34 15.78-15.54 25.21-21.41 5.7-3.54 10.24-8.31 13.44-13.78 3.14.77 6.42 1.18 9.77 1.18 3.37 0 6.74-.42 10.01-1.26 9.42-2.41 17.48-3.53 25.39-3.53 7.92 0 15.99 1.12 25.41 3.53 3.28.84 6.65 1.26 10.02 1.26 3.36 0 6.63-.4 9.78-1.18 3.2 5.46 7.74 10.23 13.44 13.77 9.44 5.87 17.92 13.07 25.22 21.41 4.35 4.97 9.79 8.74 15.79 11.05-.48 6.29.54 12.78 3.2 18.97 5.28 12.28 8.31 24.86 9.02 37.39.46 8.26 3.39 15.81 8.04 21.96a39.793 39.793 0 00-7.88 23.82v64c0 9 2.99 17.31 8.02 24-5.03 6.69-8.02 15-8.02 24v64c0 22.05 17.94 40 40 40h64c22.06 0 40-17.95 40-40v-64c0-9-2.99-17.31-8.02-24 5.03-6.69 8.02-15 8.02-24V296zM112 472c0 4.42-3.58 8-8 8H40c-4.42 0-8-3.58-8-8v-64c0-4.42 3.58-8 8-8h64c4.42 0 8 3.58 8 8v64zm0-112c0 4.42-3.58 8-8 8H40c-4.42 0-8-3.58-8-8v-64c0-4.42 3.58-8 8-8h64c4.42 0 8 3.58 8 8v64zm11.78-159.82c-6.44 14.99-10.61 31.16-11.57 48.23-.24 4.22-3.51 7.58-7.74 7.58H40.41c-4.57 0-8.42-3.9-8.25-8.47 1.19-31.53 8.97-61.38 21.94-88.3 1.39-2.88 4.32-4.49 7.32-4.49 1.5 0 3.01.4 4.37 1.25l55.04 34.4c3.32 2.08 4.5 6.2 2.95 9.8zm56.7-65.97a143.632 143.632 0 00-32.4 27.51c-1.59 1.82-3.81 2.8-6.05 2.8-1.39 0-2.8-.38-4.08-1.18l-55-34.38c-4.07-2.54-5.16-8.21-2.17-11.97a225.31 225.31 0 0167.73-57.21c1.2-.66 2.49-.96 3.77-.96 3.27 0 6.45 1.99 7.72 5.24l23.79 60.57c1.4 3.6-.04 7.55-3.31 9.58zm118.38-22.33c-1.21 3.08-4.24 4.91-7.45 4.91-.7 0-1.4-.08-2.09-.26-11.83-3.02-22.6-4.52-33.33-4.52-10.79 0-21.54 1.52-33.3 4.52-.7.18-1.4.26-2.09.26-3.21 0-6.23-1.83-7.44-4.92l-23.73-60.41c-1.72-4.39.64-9.47 5.17-10.77C214.11 35.09 234.69 32 256 32s41.89 3.09 61.42 8.7c4.53 1.3 6.9 6.38 5.17 10.77l-23.73 60.41zm75.19 51.47c-1.28.8-2.68 1.18-4.08 1.18-2.25 0-4.46-.98-6.05-2.8a144.07 144.07 0 00-32.4-27.51c-3.27-2.04-4.71-5.99-3.31-9.57L352 64.08c1.27-3.24 4.46-5.24 7.72-5.24 1.28 0 2.57.31 3.77.96a225.31 225.31 0 0167.73 57.21c2.99 3.76 1.9 9.43-2.17 11.97l-55 34.37zm14.17 36.83c-1.55-3.61-.37-7.72 2.96-9.8l55.04-34.4a8.181 8.181 0 014.37-1.25c3 0 5.94 1.61 7.32 4.49 12.97 26.91 20.75 56.77 21.94 88.3.17 4.57-3.68 8.47-8.25 8.47h-64.06c-4.23 0-7.5-3.36-7.74-7.58-.97-17.07-5.14-33.23-11.58-48.23zM480 472c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-64c0-4.42 3.58-8 8-8h64c4.42 0 8 3.58 8 8v64zm0-112c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-64c0-4.42 3.58-8 8-8h64c4.42 0 8 3.58 8 8v64zM304 189.36V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V219.13c-8.16-12.3-19.22-22.32-32-29.77z"
})), 'DungeonLight', '0 0 512 512');

exports["default"] = _default;