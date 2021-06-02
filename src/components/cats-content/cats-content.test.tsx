import renderer, { act } from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme';

import { CatsContent } from './cats-content';

configure({ adapter: new Adapter() });


test('CatsContent match snapshot', () => {
  const component = renderer.create(
    <CatsContent />
  );
  let cardlink = component.toJSON();
  expect(cardlink).toMatchSnapshot();
});

test('Shuffle button fires fetch data', async () => {
  const component = shallow(<CatsContent />)
  await act(async () => {
    await component.find('ShuffleButton').props().onClick();
  })
  expect(component.find('CatCard')).toHaveLength(4);
});
