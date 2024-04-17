import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../redux/actions";
import { postEntry } from "../redux/actions";
import { useEffect, useState } from "react";





const DshBrd = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    }, [dispatch]);

    const montoTotal = useSelector(state => state.fundTotal);

    const [form, setForm] = useState({
        newEntry: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [property]: value });
    }

    const clearForm = () => {
        setForm({
            newEntry: ""
        });
    }

    const submitHandler = () => {
        dispatch(postEntry(form))
            .then(res => {
                alert("El nuevo ingreso ha sido guardado con éxito");
                clearForm();
                dispatch(getTotal());
            })
            .catch(err => {
                alert("ocurrio un error, el monto no fue ingresado");
            })
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    return (
        <>
            <div className="">

                <div className="pt-36">
                    <p className="font-fuenteR text-2xl text-center"> Hoy es {formattedDate}</p>
                    <p className="font-fuenteR text-3xl text-center">El monto total recaudado</p>
                    <p className="font-fuenteR text-4xl text-center">es de: ${montoTotal && montoTotal.totalAmount} USD</p>
                </div>

                <div className="pt-24">
                    <p className="font-fuenteR text-3xl text-center">Ingresar nuevo monto:</p>
                </div>

                <div className="flex justify-center pt-8">
                    <input type="number" value={form.newEntry} onChange={changeHandler} name="newEntry" placeholder="$0"
                        className="text-center border-2 rounded-2xl py-4 w-60" />
                </div>

                <div className="flex justify-center pt-8">
                    <button onClick={submitHandler} 
                    className="bg-slate-100 w-40 text-center py-4 rounded-2xl shadow-lg">
                        Guardar</button>
                </div>
            </div>
        </>
    )
};

export default DshBrd;