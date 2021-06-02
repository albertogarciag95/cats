import renderer from 'react-test-renderer';
import { MainContainer } from './main-container';

test('MainContainer match snapshot', () => {
  const component = renderer.create(
    <MainContainer />
  );
  let cardlink = component.toJSON();
  expect(cardlink).toMatchSnapshot();
});
