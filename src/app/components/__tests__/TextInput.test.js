import { TextInput } from "../TextInput";
import React from "react";
import { shallow } from "enzyme";

describe("TextInput component ", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <TextInput
        handleChange={() => {}}
        value="test"
        key="test"
        name="testName"
        id="testId"
        dataType="String"
      />
    );
    expect(wrapper.find("input").length).toEqual(1);
  });
});
