import React from 'react';
import PropTypes from 'prop-types';

import songShapes from '../../helpers/propz/songShapes';

import Song from '../Song/Song';
import './Catalog.scss';

class Catalog extends React.Component {
  static propTypes = {
    songs: PropTypes.arrayOf(songShapes.songShape),
    addSongToSetlist: PropTypes.func.isRequired,
  }

  render() {
    const songComponents = this.props.songs.map(song => (
      <Song key={song.id} song={song} addSongToSetlist={this.props.addSongToSetlist}/>
    ));
    return (
      <div className="Catalog">
      <h1>Catalog</h1>
      <ul className="songs">
        {songComponents}
      </ul>
      </div>
    );
  }
}

export default Catalog;
