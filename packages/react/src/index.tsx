import { styled } from "./styles"

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$primary",
  color: "$white",
  borderRadius: "$px",
  padding: "$4",
  height: "$10",
})

export function App() {
  return <Button>Button</Button>
}
