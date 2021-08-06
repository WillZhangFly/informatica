import React from "react";
import { render, screen, fireEvent } from "../../utils/test-utils";
import BusinessEntityForm from "../BusinessEntityForm";
import { Provider } from "react-redux";
import store from "../../store";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<BusinessEntityForm />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <BusinessEntityForm />
      </Provider>
    );
  });

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    fireEvent.click(screen.getByRole("button"), {});
    expect(screen.queryByText(/WINTON/)).toBeInTheDocument();
  });
});
