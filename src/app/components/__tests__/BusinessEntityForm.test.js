import React from "react";
import { mount } from "enzyme";
import BusinessEntityForm from "../BusinessEntityForm";
import { Provider } from "react-redux";
import store from "../../store";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<BusinessEntityForm />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BusinessEntityForm />
      </Provider>
    );
  });

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    expect(wrapper.find("button").length).toEqual(0);
  });
});
