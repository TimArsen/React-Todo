var React = require('react');
var {connect} = require('react-redux');

import TodoAPI from 'TodoAPI'
import Todo from 'Todo'

export var TodoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            if (!todos.length) {
                return (
                    <p className="container__message">Nothing To Do</p>
                )
            };
            return TodoAPI.filterTodos(todos, showCompleted, searchText)
                .map((todo) => {
                    return (
                        <Todo key={todo.id} {...todo}/>
                    );
                }
            );
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

export default connect(
    (state) => {
        return state;
    }
)(TodoList);