import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Here's what you've got going on this week/i);
  expect(linkElement).toBeInTheDocument();
});
