import React, { PureComponent } from 'react'

import { Row } from './Row'
import Square from './Square'
import { bingoArr } from './defaultBingoSquares'
import { shuffle } from './shuffle'
import { insertAtIndex, removeByIndex } from './arrayHelpers'

const INITIAL_ARRAY = shuffle(bingoArr)

export default class BingoCard extends PureComponent {
  state = { squares: [] }

  componentDidMount() {
    const shouldLoadFromLocalStorage = !!localStorage.getItem('squares')
    const squares = shouldLoadFromLocalStorage 
      ? JSON.parse(localStorage.getItem('squares')) 
      : INITIAL_ARRAY
    this.setState({ squares: this.insertBlankSquare(squares) })
  }

  onEditSquare = ({ index, item }) => {
    const squares = this.state.squares.slice()
    squares[index] = item
    this.setState({ squares })
    this.saveToLocalStorage(squares)
  }

  insertBlankSquare = (list) => insertAtIndex(list, 'BLANK SQUARE', 12)
  
  saveToLocalStorage = (list) => 
    localStorage.setItem('squares', JSON.stringify(removeByIndex(list, 12)))
  
  onShuffle = () => {
    const shuffledSquares = shuffle(removeByIndex(this.state.squares, 12))
    const withBlankSquare = this.insertBlankSquare(shuffledSquares)
    this.setState(
      { squares: withBlankSquare },
      () => this.saveToLocalStorage(withBlankSquare)
    )
  }

  onClearCard = () => {
    const emptyStringsArray = Array(24).fill('')
    this.setState(
      { squares: this.insertBlankSquare(emptyStringsArray) },
      () => this.saveToLocalStorage(emptyStringsArray)
    )
  }

  onLoadFromDefault = () => {
    this.setState(
      { squares: this.insertBlankSquare(INITIAL_ARRAY) },
      () => this.saveToLocalStorage(INITIAL_ARRAY)
    )
  }

  render() {
    const { squares } = this.state
    return (
      <div className="App">
        <h1>IT'S DEMOCRATIC DEBATE BINGO</h1>
        <button onClick={this.onShuffle}>Shuffle</button>
        <button onClick={this.onClearCard}>Clear Card</button>
        <button onClick={this.onLoadFromDefault}>Load Default Card</button>
        <div style={{border: '1px solid black', width: '800px', margin: '20px auto 0'}}>
          <Row>
            {squares.map((item, index) => {
              if (index > 4) return
              return <Square index={index} key={index} text={item} onEdit={this.onEditSquare} />
            })}
          </Row>
          <Row>
            {squares.map((item, index) => {
              if (index > 9 || index < 5) return
              return <Square index={index} key={index} text={item} onEdit={this.onEditSquare} />
            })}
          </Row>
          <Row>
            {squares.map((item, index) => {
              if (index > 14 || index < 10) return
              return <Square isEditable={index !== 12} index={index} key={index} text={item} onEdit={this.onEditSquare} />
            })}
          </Row>
          <Row>
            {squares.map((item, index) => {
              if (index > 19 || index < 15) return
              return <Square index={index} key={index} text={item} onEdit={this.onEditSquare} />
            })}
          </Row>
          <Row>
            {squares.map((item, index) => {
              if (index > 24 || index < 20) return
              return <Square index={index} key={index} text={item} onEdit={this.onEditSquare} />
            })}
          </Row>
        </div> 
      </div>
    )
  }
}
