import {
  colors,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  radii,
  space,
} from "@dps-ui/tokens"
import { createStitches, defaultThemeMap } from "@stitches/react"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
  },
  theme: {
    colors,
    fonts,
    fontWeights,
    fontSizes,
    lineHeights,
    radii,
    space,
  },
})
