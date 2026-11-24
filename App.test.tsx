import { render, screen } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";

import App from "./App";

describe("App", () => {
  it("renders the welcome text", async () => {
    await render(<App />);

    expect(
      screen.getByText("Open up App.tsx to start working on your app!")
    ).toBeTruthy();
  });
});
