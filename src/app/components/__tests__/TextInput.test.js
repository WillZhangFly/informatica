import TextInput from "../TextInput";
import React from "react";
import { shallow } from "enzyme";

describe("TextInput component ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TextInput
        handleChange={() => {}}
        value="test"
        key="test"
        name="testName"
        id="testId"
        dataType="String"
      />
    );
  });
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });
});
