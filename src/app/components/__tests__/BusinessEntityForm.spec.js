import React from "react";
import { shallow } from "enzyme";
import BusinessEntityForm from "../BusinessEntityForm";
import { Provider } from "react-redux";
import store from "../../../app/store";

describe("<BusinessEntityForm />", () => {
  it("should render", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <BusinessEntityForm />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
