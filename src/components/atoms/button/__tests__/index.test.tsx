import Button from "..";
import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button | Component", () => {
  it("renders without breaking", () => {
    const container = render(<Button />);

    expect(container).toMatchSnapshot();
  });

  it("renders a button element", () => {
    const { getByRole } = render(<Button />);

    const button = getByRole("button");

    expect(button).toBeTruthy();
  });

  it("renders content as expected", () => {
    const { getByText } = render(<Button>foo</Button>);

    const button = getByText("foo");

    expect(button).toBeTruthy();
  });

  it("exposes a listener to click event", () => {
    const mock = jest.fn();
    const { getByRole } = render(<Button onClick={mock} />);

    const button = getByRole("button");

    userEvent.click(button);

    expect(mock).toBeCalled();
  });
});
