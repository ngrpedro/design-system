// src/index.tsx
import { colors } from "@dps-ui/tokens";
import { jsx } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx(
    "h1",
    {
      style: {
        color: colors.primary
      },
      children: "Hello Word"
    }
  );
}
export {
  App
};
