import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const getRandom = () => {
    var randomItem = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomItem);
  };

  const voteUp = () => {
    const copy = { ...votes };
    copy[selected]++;
    setVotes(copy);
  };

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => voteUp()}>vote</button>
      <button onClick={() => getRandom()}>next anecdote</button>
    </div>
  );
};

const points = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };

const anecdotes = [
  '0 If it hurts, do it more often',
  '1 Adding manpower to a late software project makes it later!',
  '2 The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  '3 Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  '4 Premature optimization is the root of all evil.',
  '5 Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
