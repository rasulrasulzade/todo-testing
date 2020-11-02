import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "./redux";

import App from "./components/App";
import { getComments } from "./redux/api";

it("comment added test", async () => {
  const store = configureStore();

  getComments()

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const submitButton = screen.getByText("Submit");
  const textarea = document.querySelector("textarea");

  expect(textarea).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(textarea, { target: { value: "value" } });
  user.click(submitButton);

  expect(getComments).toHaveBeenCalled;
  // expect(getComments).toHaveBeenCalledTimes(1);
  expect(screen.getByText("value")).toBeInTheDocument();
});
