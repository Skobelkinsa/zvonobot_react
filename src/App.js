import React from 'react';
import Info from './componets/info';
import Form from './componets/form';
import Zvonobot from './componets/zvonobot';
import './App.css';

const API_KEY = "PJDJ6bpsT1g1SCsiQiwxHWrylMPoxXMmP9xZiFtFqzIbTYCvNw6gowsVkt8U";

class App extends React.Component{
    state = {
        status: undefined,
        createDate: undefined,
        ids: undefined,
        phone: undefined,
        errorMessage: undefined,
    };
    crateCall = async (e) => {
        e.preventDefault();
        let phone = e.target.elements.phone.value, message = e.target.elements.message.value;
        if(phone && message){
            const api_url = await fetch('https://lk.zvonobot.ru/apiCalls/create',
                {
                    method: 'POST',
                    body:JSON.stringify({
                        apiKey: API_KEY,
                        phone: phone,
                        outgoingPhone:'79223617752',
                        record:{
                            "text": message,
                            "gender": 0,
                        },
                    }),
                    headers:{'content-type': 'application/json'}
                });
            const result = await api_url.json();
            this.setState({
                status: (result.status)? result.status: "error",
                createdAt: (result.status === 'success')? result.data[0].createdAt : "",
                ids: (result.status === 'success')? result.data[0].id : "",
                phone: (result.status === 'success')? result.data[0].phone: "",
                errorMessage: (result.status === 'error')? result.data[0].message : "",
            });
        }
    };
    render() {
        return(
            <div>
                <Info />
                <Form crateCallMethod={this.crateCall} />
                <Zvonobot
                    status={this.state.status}
                    createdAt={this.state.createdAt}
                    ids={this.state.id}
                    phone={this.state.phone}
                    errorMessage={this.state.errorMessage}
                />
            </div>
        );
    }
}

export default App;