import React from 'react';

export default class Animal extends React.Component {

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.type === "cat") {
            console.log('meow!');
            nextProps.greet();
        }
    }


    render() {
        return `${this.props.name} is a ${this.props.type}`;
    }
}
