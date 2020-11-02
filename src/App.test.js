import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";

import configureStore from "./redux";
import App from "./components/App";
import { getComments } from "./redux/api";

jest.mock("./redux/api");

test("comment add test", async() => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const submitButton = screen.getByText("Submit");
  const textarea = document.querySelector("textarea");

  await screen.findAllByText(/welcome/i);
  expect(textarea).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  await screen.findAllByText(/comment/i);

  fireEvent.change(textarea, { target: { value: "value" } });
  user.click(submitButton);

  expect(getComments).toHaveBeenCalled();
  expect(getComments).toHaveBeenCalledTimes(1);
  expect(screen.getByText("value")).toBeInTheDocument();
});
