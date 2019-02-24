import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import TextField from "@material-ui/core/TextField";
// import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
// import DateFnsUtils from '@date-io/date-fns';
import Button from "@material-ui/core/Button";
import DatePicker from "react-datepicker";

export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    <TextField
                        id="text"
                        label="Text"
                        style={{ margin: 8 }}
                        // placeholder="Placeholder"
                        // helperText="Full width!"
                        // fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleTextChange}
                        value={this.state.text}
                    />
                    <br/>
                    <br/>
                    <TextField
                        id="priority"
                        label="Priority"
                        value={this.state.priority}
                        onChange={this.handlePriorityChange}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <br/>
                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>
                    {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                        {/*<DatePicker*/}
                            {/*id="due-date"*/}
                            {/*margin="normal"*/}
                            {/*label="Date picker"*/}
                            {/*value={this.state.dueDate}*/}
                            {/*onChange={this.handleDateChange}*/}
                        {/*/>*/}
                    {/*</MuiPickersUtilsProvider>*/}
                    <br/>
                    <Button variant="contained" color="primary" type="submit">
                        Add #{this.state.items.length + 1}
                    </Button>
                    {/*<button>*/}
                        {/*Add #{this.state.items.length + 1}*/}
                    {/*</button>*/}
                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }
}