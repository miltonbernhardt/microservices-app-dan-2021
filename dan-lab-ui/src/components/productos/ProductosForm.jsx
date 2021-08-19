import '../FormComponents';
import CampoForm, { ComboForm } from '../FormComponents';

const ProductosForm = ({ producto, unidades, actualizarCampos, clean, saveOrUpdate }) => {

    const handleChange = (evt) => {
        evt.preventDefault();
        const nombreAtributo = evt.target.name;
        const valorAtributo = evt.target.value;
        if (evt.target.validity.valid) actualizarCampos(nombreAtributo, valorAtributo);
    }

    return (
        <form className="form-box container">
            <h3>Producto</h3>

            <CampoForm label='Nombre del Producto'
                name='nombre'
                value={producto.nombre}
                onChange={handleChange} />

            <CampoForm label='Descripcion'
                name='descripcion'
                value={producto.descripcion}
                onChange={handleChange} />

            <CampoForm label='Precio'
                name='precio'
                pattern="[0-9.]*"
                value={producto.precio}
                onChange={handleChange} />

            <CampoForm label='Stock Actual'
                name='stockActual'
                pattern="[0-9.]*"
                value={producto.stockActual}
                onChange={handleChange} />

            <CampoForm label='Stock Minimo'
                name='stockMinimo'
                pattern="[0-9.]*"
                value={producto.stockMinimo}
                onChange={handleChange} />

            <ComboForm
                label="Unidad"
                name="unidad"
                value={producto.unidad.descripcion}
                opciones={unidades.map(u => { return u.descripcion })}
                onChange={handleChange} />

            <div className="row">
                <div className="col-50 ">
                    <button type="button" onClick={clean}>Limpiar</button>
                </div>
                <div className="col-50">
                    <button type="button" onClick={saveOrUpdate}>Guardar</button>
                </div>
            </div>
        </form >
    );
}

export default ProductosForm;