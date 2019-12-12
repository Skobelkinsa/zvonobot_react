import React from 'react';

class Form extends React.Component{
    render() {
        return(
            <form onSubmit={this.props.crateCallMethod}>
                <h2>Form</h2>
                <input type={"Text"} name={"phone"} placeholder={"phone"} />
                <button>Send /></button>
            </form>
        );
    }
}

export default Form;