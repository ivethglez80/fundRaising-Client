import bgBlue from "./../imgs/bgBlue.jpg";
import uno from "./../imgs/2.png";
import dos from "./../imgs/3.png";
import heart from "./../imgs/heart.png";
import { FaWhatsapp } from "react-icons/fa6";
import church from "./../imgs/church.png";
import 'animate.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTotal } from "./../redux/actions";




const FundMain = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    }, [dispatch]);

    const montoTotal = useSelector(state => state.fundTotal);
    console.log("montoTotal:", montoTotal);
    

    const porcentaje = ((montoTotal.totalAmount * 100)/400000) || 0;
    

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();


    return (
        <>
            {/* <div className="md:hidden bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgBlue})` }}> */}
            <div className="md:hidden bg-cover bg-center h-screen bg-azul">
                <div className="hidden md:block bg-black text-white h-screen">
                    <p>Vista disponible solo para teléfono móvil</p>
                </div>

                <div className="flex flex-row justify-center items-center pt-6">
                    <img src={uno} alt="logo ibm de caba" className="h-16" />
                    <img src={dos} alt="nombre de ibm de caba" className="h-8" />
                </div>

                <div className="bg-gris shadow-xl mx-8 rounded-xl px-4 py-2 pt-2 mt-2">

                    <div>
                        <p className="text-xl font-bold text-center font-fuenteL pb-2 leading-5">
                            Se parte de la compra de nuestro templo, cada contribución cuenta!
                        </p>
                    </div>
                    <div className="pb-4 border-b border-gray-600">
                        <img src={church} alt="church members" />
                    </div>
                    <div className="bg-white rounded-xl my-4 p-2">
                    <div className="">
                        <p className="font-fuenteR text-sm">CONTRIBUCIONES AL {formattedDate}</p>
                    </div>
                    <div>
                        <p className="text-start text-base pt-2">USD${montoTotal.totalAmount || "0"}</p>
                    </div>
                        <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                            <div
                                className="bg-azul p-0.5 text-center text-base text-white font-fuenteL 
                                animate__animated animate__flip animate__delay-2s"
                                style={{ width: `${porcentaje}%` }}
                            >
                                {porcentaje}
                            </div>
                        </div>
                        <div>
                            <p className="text-end text-base">USD$400,000</p>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>

                <div className="mx-8 bg-gris shadow-lg flex flex-row rounded-2xl mt-4 py-2">
                    <div className="flex items-center">
                        <img src={heart} alt="people togheter" className="w-96" />
                    </div>
                    <div className="px-4">
                        <p className="text-xs">Pero ¿quién soy yo y quién es mi pueblo para que podamos ofrecer tan generosamente todo esto? Porque de ti proceden todas las cosas, y de lo recibido de tu mano te damos</p>
                        <p className="text-sm text-end opacity-50">1 cron 29:14</p>
                    </div>
                </div>

                <div className="mx-8 mt-4 shadow-lg flex flex-row">
                        <a href="https://api.whatsapp.com/send?phone=05491154259152&text=Hola! quiero colaborar" target="_blank">
                    <div className="bg-gray-600 flex flex-row items-center gap-2 pl-2">
                        <FaWhatsapp className=" text-5xl text-green-400" />
                        <p className="text-white text-base leading-4">consulta aqui para ofrendar</p>
                    </div>
                        </a>
                    <div className="bg-gris border-2 border-gray-600">
                        <a href="https://linktr.ee/ibmdecaba">
                            <p className="text-center text-gray-600"> NUESTRAS REDES </p></a>
                    </div>
                </div>

            </div>
        </>
    )
};

export default FundMain;