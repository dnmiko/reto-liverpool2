import axios from 'axios';
import constants from '../const';

export default (data) => {

    return axios({
        url: constants.urlPt1 + data + constants.urlPt2,
        method: 'post'
    })
}