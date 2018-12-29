import React, {
    Component
} from 'react';
import './style.css';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            description: "",
            price: "",
            image_url: ""
        }
    }

    checkOnInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="App">
                <div className="containerLogged">
                    <div className="cardLogged">
                        <div className="half-card infoLogged">
                            <p className="descriptionLogged">
                                Ingresa la información del producto que deseas agregar. Si deseas eliminar o actualizar un producto existente es necesario además el ID del producto.
                             </p>
                            <div className="formGroupLogged">
                                <div className="inputGroupLogged">
                                    <label htmlFor="id">
                                        <h4>
                                            ID del producto
                                         </h4>
                                    </label>
                                    <input type="text" name="id" className="telInputLogged" id="id" placeholder="" value={this.state.id} onChange={this.checkOnInput} />
                                    <label htmlFor="name">
                                        <h4>
                                            Nombre del producto
                                         </h4>
                                    </label>
                                    <input type="text" name="name" className="telInputLogged" id="name" placeholder="" value={this.state.name} onChange={this.checkOnInput} />
                                    <label htmlFor="description">
                                        <h4>
                                            Descripción del producto
                                         </h4>
                                    </label>
                                    <input type="text" name="description" className="telInputLogged" id="description" placeholder="" value={this.state.description} onChange={this.checkOnInput} />
                                    <label htmlFor="price">
                                        <h4>
                                            Precio del producto
                                         </h4>
                                    </label>
                                    <input type="text" name="price" className="telInputLogged" id="price" placeholder="" value={this.state.price} onChange={this.checkOnInput} />
                                    <label htmlFor="image_url">
                                        <h4>
                                            URL de la imagen
                                         </h4>
                                    </label>
                                    <input type="text" name="image_url" className="telInputLogged" id="image_url" placeholder="" value={this.state.image_url} onChange={this.checkOnInput} />
                                </div>
                            </div>
                        </div>
                        <div className="half-card info">
                            <button type="button" className="btn" onClick={this.addRequest}>
                                Agregar producto
                                </button>
                            <button type="button" className="btn" onClick={this.deleteRequest}>
                                Eliminar producto
                                </button>
                            <button type="button" className="btn" onClick={this.updateRequest}>
                                Actualizar producto
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }





}

export default AddProduct;
