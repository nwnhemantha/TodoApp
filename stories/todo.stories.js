import React from 'react';
import '!style-loader!css-loader!sass-loader!../src/styles/index.scss'; 
import InputField from '../src/components/InputField';
import Button from '../src/components/Button';
import TodoItem from '../src/components/TodoItem';

export default {
  title: 'Todo',
};

export const InputComponent =() => (<InputField placeholder="add your task here ..." classNames="m-16 w-6/12" />);
export const ButtonComponent = () => (<Button text="Add" type="primary" classNames="m-16 w-2/12" />);

export const ItemComponent = () => (<div className="bg-gray-300 w-6/12 m-16"><TodoItem classNames="m-16" item={{ text: "My Todo", status: 0 }} /></div>)
