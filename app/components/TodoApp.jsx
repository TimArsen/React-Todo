var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: "Walk the dog"
                },{
                    id: 2,
                    text: "Save the World from tyranny"
                },{
                    id: 3,
                    text: "Nap"
                },{
                    id: 4,
                    text: "Lunch"
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        alert('new Todo: ' + text)
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    <h1>Todo App</h1>
                    <TodoList todos={todos}/>
                    <AddTodo onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;