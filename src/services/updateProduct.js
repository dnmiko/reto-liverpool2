import axios from 'axios';
import constants from '../const';
import getToken from '../resolvers/getToken';

export default (data) => {
    let {
        id,
        name,
        description,
        price,
        image_url
    } = data;

    return axios({
        url: constants.url + 'graphql',
        method: 'POST',
        data: {
            query: `
                mutation{
                    UpdateProduct(
                        id:"${id}",
                        data: {
                            name: "${name}",
                            description: "${description}",
                            price: ${price},
                            image_url: "${image_url}"
                        }
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