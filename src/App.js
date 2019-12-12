import React from 'react';
import Info from './componets/info';
import Form from './componets/form';
import Zvonobot from './componets/zvonobot';
import './App.css';

const API_KEY = "lvBqvJjHGM3xEpXYIgKyy33vCZS2uUjgGsMBZZG0hpYEeKqmASSJPDYMhqBZ";

class App extends React.Component{
    state = {
        status: undefined,
        createdAt: undefined,
        id: undefined,
        phone: undefined,
        errorMessage: undefined,
    };
    crateCall = async (e) => {
        e.preventDefault();
        var phone = e.target.elements.phone.value;
        if(phone){
            const api_url = await fetch('https://lk.zvonobot.ru/apiCalls/create',
                {
                    method: 'POST',
                    body:JSON.stringify({
                        apiKey: API_KEY,
                        phone:'79125803294',
                        outgoingPhone:'79125803294',
                        record:{
                            "text": "Example Text message",
                            "gender": 0,
                        },
                    }),
                    headers:{'content-type': 'application/json'}
                });
            const result = await api_url.json();
            this.setState({
                status: result.status,
                createdAt: result.data.createdAt,
                id: result.data.id,
                phone: result.data.phone,
                errorMessage: (result.status === 'error')? result.data.message : "",
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
                    id={this.state.id}
                    phone={this.state.phone}
                    errorMessage={this.state.errorMessage}
                />
            </div>
        );
    }
}

export default App;