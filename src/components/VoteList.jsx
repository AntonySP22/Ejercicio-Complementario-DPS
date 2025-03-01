import React, { useState } from 'react';
import VoteOption from './VoteOption';

const VoteList = () => {
  const [voteState, setVoteState] = useState({
    'Java': 0,
    'C++': 0,
    'Python': 0
  });
  
  const totalVotes = Object.values(voteState).reduce((sum, current) => sum + current, 0);
  
  const handleVote = (option) => {
    setVoteState({
      ...voteState,
      [option]: voteState[option] + 1
    });
  };
  
  const resetVotes = () => {
    setVoteState({
      'Java': 0,
      'C++': 0,
      'Python': 0
    });
  };
  
  const getSegmentClass = (option) => {
    switch (option) {
      case 'Java': return 'progress-segment progress-java';
      case 'C++': return 'progress-segment progress-cpp';
      case 'Python': return 'progress-segment progress-python';
      default: return 'progress-segment';
    }
  };
  
  //porcentajes
  const percentages = Object.keys(voteState).reduce((acc, key) => {
    acc[key] = totalVotes > 0 ? Math.round((voteState[key] / totalVotes) * 100) : 0;
    return acc;
  }, {});  
  return (
    <div className="container">
      <h1 className="title">¿Que lenguaje de programación prefieres?</h1>
      
      {}
      <div className="results-container">
        <h2 className="subtitle">Resultados</h2>
        <div className="progress-bar">
          {Object.keys(voteState).map(option => (
            <div 
              key={option}
              className={getSegmentClass(option)} 
              style={{ width: `${percentages[option]}%` }}
              title={`${option}: ${percentages[option]}%`}
            ></div>
          ))}
        </div>
        
        <div className="total-votes">
          <p>Total de votos: {totalVotes}</p>
        </div>
      </div>
      
      {}
      <div className="vote-options">
        {Object.keys(voteState).map(option => (
          <VoteOption 
            key={option}
            name={option}
            votes={voteState[option]}
            totalVotes={totalVotes}
            onVote={handleVote}
          />
        ))}
      </div>
      
      {}
      <div className="reset-container">
        <button 
          onClick={resetVotes} 
          className="btn btn-reset"
        >
          Reiniciar votos
        </button>
      </div>
    </div>
  );
};

export default VoteList;