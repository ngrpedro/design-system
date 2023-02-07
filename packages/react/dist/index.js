"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// src/styles/index.ts
var import_tokens = require("@dps-ui/tokens");
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    width: "space",
    height: "space"
  }),
  theme: {
    colors: import_tokens.colors,
    fonts: import_tokens.fonts,
    fontWeights: import_tokens.fontWeights,
    fontSizes: import_tokens.fontSizes,
    lineHeights: import_tokens.lineHeights,
    radii: import_tokens.radii,
    space: import_tokens.space
  }
});

// src/index.tsx
var Button = styled("button", {
  fontFamily: "$default",
  fontWeight: "$bold",
  backgroundColor: "$primary",
  color: "$white",
  borderRadius: "$md",
  height: "$10",
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4"
      },
      big: {
        fontSize: 16,
        padding: "$3 $6"
      }
    }
  },
  defaultVariants: {
    size: "small"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
