const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    return (
      <button onClick={onClick} className='field' disabled={!!player}>
      	{player}
      </button>
    );
  }
}

module.exports = Field;
