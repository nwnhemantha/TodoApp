import React from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import TodoItem from '../components/TodoItem';
import TodoLIst from '../components/TodoLIst';
import renderer from 'react-test-renderer';

test('Render the Button component correctly', () => {
  const tree = renderer
    .create(<Button text="Add" onClick={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render the InputField component correctly', () => {
  const tree = renderer
    .create(<InputField value="" onChange={jest.fn}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render the TodoItem component correctly', () => {
  const tree = renderer
    .create(<TodoItem item={{text: '', status: 0}} index={0} onComplete={jest.fn} onDelete={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render the TodoLIst component correctly', () => {
  const tree = renderer
    .create(<TodoLIst list={[{text: '', status: 0}]} onComplete={jest.fn} onDelete={jest.fn}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
