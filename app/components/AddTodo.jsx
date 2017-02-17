var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    handleSubmit: function (e) {
        var {dispatch} = this.props;
        e.preventDefault();

        var todoText = this.refs.todoText.value;

        if (todoText.length > 0 ){
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div className='container__footer'>
                <form className='add-todo-form' onSubmit={this.handleSubmit} ref='form'>
                    <input type="text" ref='todoText' placeholder="Add Todo"/>
                    <button className='button expanded'>Add Todo</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddTodo);