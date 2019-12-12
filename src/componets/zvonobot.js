import React from 'react';

class Zvonobot extends React.Component{
    render() {
        return(
            <div>
                { this.props.status &&
                    <div>
                        <h2>Zvonobot result:</h2>
                        <p>Status: {this.props.status}</p>
                    </div>
                }
                { this.props.createdAt && this.props.status === 'success' &&
                    <div>
                        <p>Date Create: {this.props.createdAt}</p>
                    </div>
                }
                { this.props.id && this.props.status === 'success' &&
                    <div>
                        <p>ID: {this.props.id}</p>
                    </div>
                }
                { this.props.phone && this.props.status === 'success' &&
                    <div>
                        <p>Phone: {this.props.phone}</p>
                    </div>
                }
                { this.props.errorMessage && this.props.status === 'error' &&
                    <div>
                        <p>errorMessage: {this.props.errorMessage}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Zvonobot;