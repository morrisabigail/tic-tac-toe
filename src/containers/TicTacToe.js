import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board} from '../styled/TicTacToe'


class TicTacToe extends Component {

    state ={
        rows:3

    }

    componentWillMount(){
        let height = window.innerHeight //size of browser
        let width = window.innerWidth
        let size = (height<width) ? height * .8 : width*.8
        let rows = this.state.rows
        let unit = size / rows
        //when component mounts add these to states
        //object initializer short hand equal to "size: size"
        this.setState({
            size,
            rows,
            unit
        })
    }

    move =() => {

    }

    makeAiMove = () => {

    }
    turingTest = () =>{

    }
    recordGame = () =>{

    }

    render () {
        let{
            size,
            unit,
            rows
        } = this.state


        return (
            <div>
                <Stage
                width={size}
                height={size}
                >
                 <Board
                   unit={unit}
                   rows={rows}
                   size={size}
               />
                {/*{Square}*/}
                </Stage>
            </div>
        )
    }
}

export default TicTacToe