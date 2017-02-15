var React = require('react');
var TodoList = require('TodoList');


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
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                TodoApp!!
                <TodoList todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;