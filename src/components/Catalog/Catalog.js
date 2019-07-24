import React from 'react';

import songData from '../../helpers/data/songData';

import './Catalog.scss';

class Catalog extends React.Component {
  state = {
    songs: [],
  }

  componentDidMount() {
    songData.getSongs()
      .then(songs => this.setState({ songs }))
      .catch(err => console.error('could not get songs', err));
  }

  render() {
    return (
      <div className="Catalog">
        <h1>Catalog</h1>
      </div>
    );
  }
}

export default Catalog;
