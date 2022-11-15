import React, {useState} from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(null));
    const winner = checkWinner(cells);

    const Cell = ({num}) => {
        return <td onClick = {() => actionHandler(num)}>{cells[num]}</td>
    }

    function checkWinner(squares) {
        const winStates = [
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
        ];

        for (let i = 0; i < winStates.length; i++) {
            const[x,y,z] = winStates[i];
            if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x];
            }
        }
        if(squares.includes(null) === false) {
            return "Draw";
        }
        return null;
    };

    const actionHandler = (num) => {
        let squares = [...cells];
        if(winner || squares[num]) return;
        if(turn === 'X') {
            squares[num] = 'X';
            setTurn("O");
        }
        else{
            squares[num] = 'O';
            setTurn("X");
        }
	    setCells(squares);
    };

    const restartFunction = () => {
        setCells(Array(9).fill(null));
        setTurn("X");
    }

    return (
        <>
        <div className = 'cell'>
            <table>

                <body>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </body>
            </table>

            <div className = "winner">
                <p>
                    {winner === "Draw" ? winner :
                    winner === null ? 
                    "Next player: " + turn :
                    "Winner: " + winner}
                </p>
                <button onClick = {() => restartFunction()}>Play Again</button>
            </div>
        </div>
        </>
    )
}

export default TicTacToe