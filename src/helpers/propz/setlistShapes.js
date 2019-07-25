import PropTypes from 'prop-types';

const setlistShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  songs: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { setlistShape };
