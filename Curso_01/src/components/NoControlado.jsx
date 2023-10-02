import { useRef, useState } from "react"

const NoControlado = () => {
    const [error, setError] = useState('')
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        // capturar los datos
            const [error, setError] = useState("llena todos los campos");
            const data = new FormData(form.current);
            //spread operator permite a un elemento iterable ser expandido
            //copia cada uno de los elementos
            console.log(...data.entries());

            const dataObject = Object.fromEntries([...data.entries()])
            const {title, description, state} = Object.fromEntries([...data.entries()])
            
            console.log(dataObject)
            console.log(title, description, state)

        // validar los datos

            if(!title.trim() || !description.trim() || state.trim()) return setError('debes llenar los campos')

        // enviar los datos
    }

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input 
                type="text" 
                placeholder="Ingrese To Do" 
                className="form-control mb-2" 
                name="title"
            />

            <textarea 
                className="form-control mb-2" 
                placeholder="ingrese descripcion"
                name="description"
            />

            <select 
                className="form-control mb-2" 
                name="state"
                defaultValue={'pendiente'}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button className="btn btn-primary" type="submit">Procesar</button>
            {error !== '' && error}
        </form>
    )
}

export default NoControlado;