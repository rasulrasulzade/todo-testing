import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "./redux";

import App from "./components/App";

it("comment added test", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const submitButton = screen.getByText("Submit");
  const textarea = document.querySelector("textarea");

  expect(textarea).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(textarea, { target: { value: 'value' } });
  user.click(submitButton);

  expect(screen.getByText("value")).toBeInTheDocument();
});
