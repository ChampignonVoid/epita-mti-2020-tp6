import React from 'react';
import { TIME_INTERVAL } from '../constants';

const ButtonStart = ({ onClick = () => {}, score = -1 }) => (
  <div style={{
    position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '300px',
        height: '100px',
        margin: 'auto',
    }}
  >
    
    { score >= 0 ? (
      <div>
        Score : {score}
      </div>
      ) : (
        <div/>
      )
    }
    <div
      style={{
        fontSize: '32px',
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: '100px',
        cursor: 'pointer',
        backgroundColor: '#4BE072',
        color: '#21222C'
      }}
      onClick={onClick}
    >
      START !
    </div>
    <div>
      <label htmlFor="inputTime">Temps en ms : </label>
      <input
        id="inputTime"
        type="number"
        placeholder={TIME_INTERVAL}
      />
    </div>
  </div>
);

export default ButtonStart;
