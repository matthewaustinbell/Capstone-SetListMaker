import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getSongs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/songs.json`)
    .then((res) => {
      const songs = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        songs.push(res.data[fbKey]);
      });
      resolve(songs);
    })
    .catch(err => reject(err));
});

export default { getSongs };
