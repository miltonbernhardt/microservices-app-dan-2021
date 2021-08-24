import axios from 'axios';

const RAIZ_URL = 'http://localhost';
const PORT = 8181; //TODO arreglar esto pordio
const API_PRODUCTO = 'producto'
const API_PEDIDO = 'pedido'
const API_OBRA = 'obra'
const API_DETALLE_PEDIDO = 'detallepedido'
const API_LIQUIDACION = 'liquidacion'
const API_CLIENTE = 'cliente'
const API_EMPLEADO = 'empleado'

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYW4yMDIxIiwiaWF0IjoxNjI5Njc5MzE4fQ.S0vnGCmthN6yHcVK2t2ldbeJbYhQsqufpmc4CFxLUONwYUY1sgRuIrc0lBrKm9cyDQ0T6Mi4bZ8zJQZRxoCWxg'
}

// --- OBRA METHODS ---
export const getObras = async () => GET(`${API_OBRA}`);
export const postObra = async (obra) => POST(`${API_OBRA}`, obra);
export const putObra = async (obra) => PUT(`${API_OBRA}/${obra.id}`, obra);

// --- PEDIDO METHODS ---
export const getPedidos = async () => GET(`${API_PEDIDO}`);
export const postPedido = async (pedido) => POST(`${API_PEDIDO}`, pedido);
export const putPedido = async (pedido) => PUT(`${API_PEDIDO}/${pedido.id}`, pedido);

// --- DETALLE PEDIDO METHODS ---
export const postDetalle = async (detallePedido, pedido) => POST(`${API_DETALLE_PEDIDO}/?idPedido=${pedido.id}`, detallePedido);
export const putDetalle = async (detallePedido) => PUT(`${API_DETALLE_PEDIDO}`, detallePedido);
export const deleteDetalle = async (detallePedido) => DELETE(`${API_DETALLE_PEDIDO}/id?idDetalle=${detallePedido.id}`);

// --- PRODUCTO METHODS ---
export const getProductos = async () => GET(`${API_PRODUCTO}`);
export const getUnidades = () => GET(`${API_PRODUCTO}/unidades`);
export const postProducto = async (producto) => POST(`${API_PRODUCTO}`, producto);
export const putProducto = async (producto) => PUT(`${API_PRODUCTO}`, producto);

// --- LIQUIDACION METHODS ---
export const getLiquidaciones = async () => GET(`${API_LIQUIDACION}`);
export const postLiquidacionTodos = async () => POST(`${API_LIQUIDACION}/todos`);
export const postLiquidacionEmpleado = async (empleado) => POST(`${API_LIQUIDACION}/empleado?idEmpleado=${empleado.id}`);
export const postSueldo = async (sueldo) => POST(`${API_LIQUIDACION}/sueldo`, sueldo);
export const getSueldo = async (empleado) => GET(`${API_LIQUIDACION}/empleado/sueldo?idEmpleado=${empleado.id}`);

// --- CLIENTE METHODS ---
export const getClientes = async () => GET(`${API_CLIENTE}`);
export const postCliente = async (cliente) => POST(`${API_CLIENTE}`, cliente);
export const putCliente = async (cliente) => PUT(`${API_CLIENTE}`, cliente);

// --- EMPLEADO METHODS ---
export const getEmpleados = async () => GET(`${API_EMPLEADO}`);
export const postEmpleado = async (empleado) => POST(`${API_EMPLEADO}`, empleado);
export const putEmpleado = async (empleado) => PUT(`${API_EMPLEADO}`, empleado);

// --- GENERAL METHODS ---
export const POST = async (postfixUrl, data,) => {
    const URL = `${RAIZ_URL}:${PORT}/api/${postfixUrl}`;
    console.log({post_request: URL, data})
    try {
        // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        // axios.defaults.headers.post['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept";
        const response = await axios.post(URL, data, {headers})

        const {data: dataResponse, status} = response
        if (typeof dataResponse === 'string' || status !== 200) {
            throw new Error(dataResponse)
        } else {
            console.log({post_response: URL, dataResponse})
            return dataResponse
        }
    } catch (error) {
        console.error({
            method: 'POST',
            URL,
            message: `${error.response ? error.message : error}`,
            error: error.response
        })
    }
}

export const PUT = async (postfixUrl, data) => {
    const URL = `${RAIZ_URL}:${PORT}/api/${postfixUrl}`;

    console.log({put_request: URL, data})

    try {
        const response = await axios.put(URL, data, {headers})
        const {data: dataResponse, status} = response
        if (typeof dataResponse === 'string' || status !== 200) {
            throw new Error(dataResponse)
        } else {
            console.log({put_response: URL, dataResponse})
            return dataResponse
        }
    } catch (error) {
        console.error({method: 'PUT', URL, message: `${error.response ? error.message : error}`, error: error.response})
    }
}

export const GET = async (postfixUrl) => {
    const URL = `${RAIZ_URL}:${PORT}/api/${postfixUrl}`;
    console.log({get_request: URL})

    try {
        const response = await axios.get(URL, {headers})

        const {data: dataResponse, status} = response

        if (typeof dataResponse === 'string' || status !== 200) {
            throw new Error(dataResponse)
        } else {
            console.log({get_response: URL, dataResponse})
            return dataResponse
        }
    } catch (error) {
        console.error({method: 'GET', URL, message: `${error.response ? error.message : error}`, error: error.response})
    }
}

export const DELETE = async (postfixUrl) => {
    const URL = `${RAIZ_URL}:${PORT}/api/${postfixUrl}`;
    console.log({delete_request: URL})

    try {
        const response = await axios.delete(URL, {headers})

        const {data: dataResponse, status} = response

        if (typeof dataResponse === 'string' || status !== 200) {
            throw new Error(dataResponse)
        } else {
            console.log({delete_response: URL, dataResponse})
            return dataResponse
        }
    } catch (error) {
        console.error({
            method: 'DELETE',
            URL,
            message: `${error.response ? error.message : error}`,
            error: error.response
        })
    }
}