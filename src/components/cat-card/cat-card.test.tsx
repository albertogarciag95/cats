import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme';

import { CatCard } from './cat-card';

configure({ adapter: new Adapter() });

const props = {
  description: 'test'
}

test('CatCard match snapshot', () => {
  const component = renderer.create(
    <CatCard {...props}/>
  );
  let cardlink = component.toJSON();
  expect(cardlink).toMatchSnapshot();
});

test('CardContent props verified', () => {
  const component = shallow(<CatCard {...props}/>)
  expect(component.find('CardImage').props().src).toBe('');
  expect(component.find('CardDescription').props().children).toBe('test');
  expect(component.find('CardLink').props().description).toBe('test');
});
