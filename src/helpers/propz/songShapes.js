import PropTypes from 'prop-types';

const songShape = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  decade: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
});

export default { songShape };
