import reducer from "../entitySlice";
import entity from "../../../mockData/entity";

test("should return the initial state", () => {
  expect(reducer({ ...entity }, {})).toEqual({ ...entity });
});
