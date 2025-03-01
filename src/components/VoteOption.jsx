import React from 'react';

const VoteOption = ({ name, votes, totalVotes, onVote}) => {
  const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
  
  const getButtonClass = () => {
    switch (name) {
      case 'Java': return 'btn btn-lenguaje java';
      case 'C++': return 'btn btn-lenguaje cpp';
      case 'Python': return 'btn btn-lenguaje python';
      default: return 'btn';
    }
  };

  const getLangImageUrl = () => {
    switch (name) {
      case 'Java': return 'https://svgl.app/library/java.svg';
      case 'C++': return 'https://svgl.app/library/c-plusplus.svg';
      case 'Python': return 'https://svgl.app/library/python.svg';
      default: return '';
    }
  };

  return (
    <div className="vote-option">
      <div className="vote-option-content">
        <div className="vote-option-info">
          <p className="vote-option-stats">
            <img 
              src={getLangImageUrl()} 
              alt={`${name} logo`} 
              style={{ width: '20px', marginRight: '5px', verticalAlign: 'middle' }} 
            />
            {votes} votos ({percentage}%)
          </p>
        </div>
        <button 
          onClick={() => onVote(name)} 
          className={getButtonClass()}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default VoteOption;