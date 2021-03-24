import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './index.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.baseUrl = 'https://api.mugglepay.com/api/usdt';
        this.state = {};
    }

    render() {
        const item = '1 USDT is roughly';
        let price = this.state.price;
        return (
            <div className="content">
                <h1>Hello World!</h1>
                <h4 className="index">{item}</h4>
                <h3 >{price}</h3><h3> CNY</h3>
            </div>
        );
    }

    componentDidMount() {
        axios.get(this.baseUrl).then(res=>{
            this.setState({price:res.data.price});//get data from api
        })
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>

            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
