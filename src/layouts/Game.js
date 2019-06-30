import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';
import { GAME_START_REQUESTED, TARGET_CLICKED, GAME_STOP } from '../constants'


// FIXME: maybe, do something about this ?
const mapStateToProps = state => ({
  ...state.game,
  ...state.targets
});

const GameLayout = ({ isStarted, lives, score, targets, dispatch }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >
    {isStarted ? (
      <React.Fragment>
        <Info lives={lives} score={score}/>
        {targets.map((target) =>
            <Target key={target.id}
                    x={target.x}
                    y={target.y}
                    value={target.value}
                    bgColor={target.bgColor}
                    onClick={() => dispatch({ type: TARGET_CLICKED, id: target.id })}/>
        )}
        <div style={{
          position: "absolute",
          top: '0px',
          right: '0px',
          left: '0px',
          width: '0',
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          <button onClick={() => dispatch({ type: GAME_STOP })}>Stop</button>
        </div>
      </React.Fragment>
    ) : (
      <ButtonStart onClick={() => dispatch({ type: GAME_START_REQUESTED,
                                             timeInterval: parseInt(document.getElementById('inputTime').value) })}
                   score={score}
      />
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
