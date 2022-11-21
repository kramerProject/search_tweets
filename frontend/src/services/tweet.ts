import api from './axios'


const SearchTweets = async (user) => {

    let response = {};
    
    try {
      response = await api.get(`/tweets?user=${user}`);
      return response;
    } catch (error) {
      return error.response;
    }
}


module.exports = {
  SearchTweets
}


