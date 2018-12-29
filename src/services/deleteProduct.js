import axios from 'axios';
import constants from '../const';
import getToken from '../resolvers/getToken';

export default (data) => {
    let {
        id
    } = data;

    return axios({
        url: constants.url + 'graphql',
        method: 'POST',
        data: {
            query: `
                mutation{
                    DeleteProduct(
                        id:"${id}"
                    )
                    {
                        _id,
                        name,
                        price,
                    }
                }
            `
        },
        headers: {
            'Authorization': 'JWT ' + getToken()
        }
    })

}