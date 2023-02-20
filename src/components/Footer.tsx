import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { Filter } from '../types/Filter';
import { Todo } from '../types/Todo';

type Props = {
  activeTodos: Todo[];
  completedTodos: Todo[];
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};

export const Footer: React.FC<Props> = ({
  activeTodos,
  completedTodos,
  filter,
  setFilter,
}) => {
  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${activeTodos.length} items left`}
      </span>

      <nav className="filter">
        <a
          href="#/"
          className={classNames(
            'filter__link', { selected: filter === Filter.All },
          )}
          onClick={() => setFilter(Filter.All)}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames(
            'filter__link', { selected: filter === Filter.Active },
          )}
          onClick={() => setFilter(Filter.Active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames(
            'filter__link', { selected: filter === Filter.Completed },
          )}
          onClick={() => setFilter(Filter.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        style={{ opacity: +Boolean(completedTodos.length) }}
      >
        Clear completed
      </button>
    </footer>
  );
};