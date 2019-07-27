import React from 'react';
import PropTypes from 'prop-types';

import songShape from '../../helpers/propz/songShapes';

import './Song.scss';

class Song extends React.Component {
  static propTypes = {
    song: songShape.songShape,
    addSongToSetlist: PropTypes.func.isRequired,
  }

  addClickEvent = (e) => {
    const { song, addSongToSetlist } = this.props;
    e.preventDefault();
    addSongToSetlist(song.id);
  }

  render() {
    const { song } = this.props;
    const isAvailable = song.status === 'available';
    return (
      <li className="Song">
        <h3 className="name">
          {song.name}
        </h3>
          <div>{song.artist}</div>
          <div>{song.decade}</div>
          <div>{song.genre}</div>
          <div>{song.key}</div>
          <div>{song.tempo}</div>
          <button
          disabled={!isAvailable}
          onClick={this.addClickEvent}
        >
          {isAvailable ? '+' : 'Need to Learn!'}
        </button>
      </li>
    );
  }
}

export default Song;
