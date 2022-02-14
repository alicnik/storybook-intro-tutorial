import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders TaskBox header", () => {
  render(<App />)
  const linkElement = screen.screen.getByText(/taskbox/i)
  expect(linkElement).toBeInTheDocument()
})
