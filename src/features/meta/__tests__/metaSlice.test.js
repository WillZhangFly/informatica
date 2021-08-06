import reducer from '../metaSlice';
import meta from "../../../mockData/meta";

test('should return the initial state', () => {
  expect(reducer({...meta}, {})).toEqual({...meta})
})
