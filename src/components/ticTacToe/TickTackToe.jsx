import React, { Component } from 'react';
import './TickTackToe.css'


class TickTackToe extends Component {

    constructor(props){
        super(props);
        this.state = {
            square: Array(9).fill(null),
            count: 0,
            winnerName:'',
            
        }
        this.winnerLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ]
    }

    isWinner = () => {
        console.log();
        let s = this.state.count % 2 === 0 ? 'X' : 'O';
        for (let i = 0; i < 8; i++) {
            let line = this.winnerLine[i];
            if (this.state.square[line[0]] === s
                && this.state.square[line[1]] === s
                && this.state.square[line[2]] === s
                ) {
                    
                    this.setState({winnerName: s});
                    document.querySelector('dialog').showModal()
                    
                    setTimeout(() => {
                        this.setState({square: Array(9).fill(null)});
                        this.setState({count: 0});
                        document.querySelectorAll('.ttt-grid').forEach(square => {
                            square.classList.remove('red', 'green')
                        });

                        document.querySelector('dialog').close()
                    }, 3000);
                } else {
                    if (this.state.square.indexOf(null)<0){
                         this.setState({winnerName: 'Ничья'});
                            document.querySelector('dialog').showModal()
                    
                        setTimeout(() => {
                            this.setState({square: Array(9).fill(null)});
                            this.setState({count: 0});
                            document.querySelectorAll('.ttt-grid').forEach(square => {
                                square.classList.remove('red', 'green')
                            });

                            document.querySelector('dialog').close()
                        }, 3000);
                    }
                }
                console.log();
        }
    }

    clickHandler = (event) => {
        
        let index = event.target.getAttribute('index');
        let currentSquare = this.state.square;

        if (currentSquare[index] === null){
            currentSquare[index] = this.state.count % 2 === 0 ? 'X' : 'O';
            event.target.classList.add(this.state.count % 2 === 0 ? 'green' : 'red')
            this.setState({ count: this.state.count + 1})
            this.setState({ square: currentSquare})
        }

        this.isWinner()
    }

    render() {
        return (
        <div className='tic-tac-toe'>
            <div className='ttt-grid' onClick={this.clickHandler} index="0">{this.state.square[0]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} index="1">{this.state.square[1]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} index="2">{this.state.square[2]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} index="3">{this.state.square[3]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} index="4">{this.state.square[4]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} index="5">{this.state.square[5]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} index="6">{this.state.square[6]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} index="7">{this.state.square[7]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} index="8">{this.state.square[8]}</div>
            <dialog >
                <p>Победитель - <b>{this.state.winnerName} </b></p>
            </dialog>
        </div>
        );
    }
}

export default TickTackToe;


