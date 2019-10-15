import React from 'react';
import './App.css';

const bingoArr = [
  "Awkward moderator cutoff",
  "Andrew Yang makes “I know a lot of Asians” joke",
  "Impeachment",
  "Someone claims Biden picks and chooses what he wants from Obama legacy",
  "Taylor makes an appearance",
  "Health care for all",
  "I have a plan for that",
  "A Clinton is mentioned",
  "Candidates talk over each other",
  "Fox News",
  "Protesters",
  "Russia",
  "Let me tell you a story about a person met on the campaign trail or in the district",
  "Biden corrects himself after calling another candidate by first name",
  "Bernie’s health",
  "Facebook",
  "Syria/Turkey",
  "Booker says 'Newark'",
  "Supreme Court",
  "Free college or debt forgiveness",
  "Three pantsuits in a single frame",
  "Giuliani",
  "Hunter Biden",
  "Climate change"
]

const shuffle = (array) => {
	let currentIndex = array.length
	let temporaryValue, randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

}

const Square = ({text}) => <div style={{ border: '1px solid black', flexGrow: '1',
flexBasis: '100px', display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center', padding: '10px', boxSizing: 'border-box'}}>{text}</div>
const Row = ({ children }) => <div style={{display: 'flex', flexDirection: 'row', border: '1px solid', height: '150px'}}>{children}</div>

function App() {
  const randomizedList = shuffle(bingoArr)
  randomizedList.splice(12, 0, 'BLANK SQUARE')
  return (
    <div className="App">
      IT'S DEMOCRATIC DEBATE BINGO
      <div style={{border: '1px solid black', width: '800px', margin: '20px auto 0'}}>
        <Row>
          {randomizedList.map((item, index) => {
            if (index > 4) return
            return <Square key={index} text={item} />
          })}
        </Row>
        <Row>
          {randomizedList.map((item, index) => {
            if (index > 9 || index < 5) return
            return <Square key={index} text={item} />
          })}
        </Row>
        <Row>
          {randomizedList.map((item, index) => {
            if (index > 14 || index < 10) return
            return <Square key={index} text={item} />
          })}
        </Row>
        <Row>
          {randomizedList.map((item, index) => {
            if (index > 19 || index < 15) return
            return <Square key={index} text={item} />
          })}
        </Row>
        <Row>
          {randomizedList.map((item, index) => {
            if (index > 24 || index < 20) return
            return <Square key={index} text={item} />
          })}
        </Row>
      </div> 
    </div>
  );
}

export default App;
