import axios from 'axios';

export default axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  params: {
    // API params go here
  }
});