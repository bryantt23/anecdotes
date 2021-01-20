import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const getRandom = () => {
    var randomItem = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomItem);
  };

  const checkMostVoted = () => {
    let max = -1000,
      maxIndex = -1;
    console.log(votes);
    for (let prop in votes) {
      console.log(prop + ' ' + votes[prop]);
      if (votes[prop] > max) {
        maxIndex = prop;
        max = votes[prop];
      }
    }
    return maxIndex;
  };

  const voteUp = () => {
    const copy = { ...votes };
    copy[selected]++;
    setVotes(copy, () => {});
    setMostVoted(checkMostVoted());
  };

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);
  const [mostVoted, setMostVoted] = useState(checkMostVoted());

  useEffect(() => {
    setMostVoted(checkMostVoted());
    console.log('votes', votes);
    console.log('votes', props.anecdotes);
  }, [votes]);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => voteUp()}>vote</button>
      <button onClick={() => getRandom()}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[mostVoted]}</p>
    </div>
  );
};

const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

const anecdotes = [
  '0 If it hurts, do it more often',
  '1 Adding manpower to a late software project makes it later!',
  '2 The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  '3 Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  '4 Premature optimization is the root of all evil.',
  '5 Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
