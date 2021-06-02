import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme';

import { CardLink } from './card-link';

configure({ adapter: new Adapter() });

const props = {
  description: 'test',
  maxDescriptionLength: 100
}

test('CardLink match snapshot', () => {
  const component = renderer.create(
    <CardLink {...props}/>
  );
  let cardlink = component.toJSON();
  expect(cardlink).toMatchSnapshot();
});

test('Show popup with description onMouseEnter', () => {
  const component = shallow(<CardLink {...props}/>)
  component.find('LinkText').props().onMouseEnter({} as any);
  expect(component.find('CardPopup').exists()).toBe(true);
  expect(component.find('span').text()).toBe('test');
});

test('Hide popup with description onMouseLeave', () => {
  const component = shallow(<CardLink {...props}/>)
  component.find('LinkText').props().onMouseEnter({} as any);
  component.find('CardPopupButton').props().onClick()
  expect(component.find('CardPopup').exists()).toBe(false);
});

test('Link text is not shown', () => {
  const component = shallow(<CardLink {...props}/>)
  expect(component.find('LinkText').props().isShown).toBe(false);
});

test('Link text shows', () => {
  const component = shallow(<CardLink {...props} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas atque vel fuga illo cumque voluptatibus reprehenderit reiciendis commodi praesentium aperiam! In officiis architecto facere quas inventore illum laborum unde ratione!'} />)
  expect(component.find('LinkText').props().isShown).toBe(true);
});

