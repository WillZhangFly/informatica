import React from "react";
import App from "../App";
import BusinessEntityForm from "../app/components/BusinessEntityForm";
import { shallow } from "enzyme";

describe("App component ", () => {
  it("includes ConnectedNavigation", () => {
    const mainWrapper = shallow(<App />);
    const businessEntityFormComponent = mainWrapper.find(BusinessEntityForm);
    expect(businessEntityFormComponent.length).toEqual(1);
  });
});
