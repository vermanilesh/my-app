import React from 'react';

export const Todo = ({onClick, completed, text}) => (
  <li onClick={onClick}>
    {text}
  </li>
)