import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMySetlists = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/setlists.json?setlistBy="uid"&equaltTo="${uid}"`)
    .then((res) => {
      const setlists = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        setlists.push(res.data[fbKey]);
      });
      resolve(setlists);
    })
    .catch(err => reject(err));
});

const deleteSetlist = setlistId => axios.delete(`${baseUrl}/setlists/${setlistId}.json`);

const postSetlist = newSetlist => axios.post(`${baseUrl}/setlists.json`, newSetlist);

const putSetlist = (setlistId, updateSetlist) => axios.put(`${baseUrl}/setlists/${setlistId}.json`, updateSetlist);

export default {
  getMySetlists,
  deleteSetlist,
  postSetlist,
  putSetlist,
};
