import React from 'react';
// import format from '@date-io/date-fns';

export class Todo extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.text}</td>
                <td>{this.props.priority}</td>
                {console.log(new Date(this.props.dueDate))}
                {/*<td>{format(new Date(this.props.dueDate), 'MM/DD/YYYY')}</td>*/}
                <td>{this.props.dueDate.format('DD-MM-YYYY')}</td>
            </tr>
        );
    }

}