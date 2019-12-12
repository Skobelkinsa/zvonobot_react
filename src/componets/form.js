import React from 'react';

class Form extends React.Component{
    render() {
        return(
            <form onSubmit={this.props.crateCallMethod}>
                <h2>Form</h2>
                <input type={"text"} name={"phone"} placeholder={"79999999999"} />
                <input type={"text"} name={"message"} placeholder={"message..."}/>
                <button>Send /></button>
            </form>
        );
    }
}

export default Form;