import MainTheme from "..";
import React from "react";
import { render } from "@testing-library/react";

describe("Main Theme | Theme", () => {
  it("renders without breaking", () => {
    const Theme = render(<MainTheme />);

    expect(Theme).toMatchSnapshot();
  });

  it("renders given children", () => {
    const { getByText } = render(
      <MainTheme>
        <p>foo</p>
      </MainTheme>
    );

    const content = getByText("foo");

    expect(content).toBeTruthy();
  });
});
