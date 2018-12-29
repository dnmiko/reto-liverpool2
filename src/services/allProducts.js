import axios from 'axios';
import getToken from '../resolvers/getToken';
import constants from '../const';

export default () => {

    return axios({
        url: constants.url + 'graphql',
        method: 'post',
        data: {
            query: `
                query{
                    allProducts{
                        _id,
                        name,
                        price,
                        description,
                        image_url
                    }
                }
            `
        },
        headers: {
            'Authorization': 'JWT ' + getToken()
        }
    })
}