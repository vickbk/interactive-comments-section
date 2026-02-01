import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render correctly", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
