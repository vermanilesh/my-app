import React from 'react';
import FilterLink from '../containers/FilterLink.jsx';
import { VisibilityFilters } from '../actions/TodoAction.jsx';

export const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)
