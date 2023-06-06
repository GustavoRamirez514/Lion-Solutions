import { connect } from "react-redux";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/footer";
import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { PacmanLoader } from "react-spinners";


function OptIn(){

    const [formData, setFormData]=useState({
        email:''
    })

    const {
        email
    } = formData

    const onChange=e=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const [loading, setLoading]=useState(false)

    const navigate = useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault()

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const formData = new FormData()
        formData.append('email', email)
        formData.append('tag', 1)
        formData.append('list', 2)

        const fetchData = async () => {
            setLoading(true);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/opt-in`,
            formData,
            config)

            if(res.status === 200){
                setTimeout(()=>{
                    navigate('#')
                },1000)
            }else{
                alert('Error al enviar el mensaje')
            }
        }
        fetchData()
    }

    return(
        <Layout>
            <Navbar/>
            <div className="pe:pt-32 pt-20">
            <div className="bg-white pb-8 sm:pb-12 lg:pb-20 lg:pl-40">
            <div className="overflow-hidden lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div>
                    <div className="mt-10">
                    <div className="mt-6 sm:max-w-xl">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Quieres estar al tanto de todo lo que sucede en nuestro sitio web? 
                        </h1>
                        <p className="mt-6 text-xl text-gray-500">
                        Suscríbete para recibir nuestras notificaciones y sé parte de una comunidad informada. Obtén acceso temprano a nuestras actualizaciones, descuentos y noticias emocionantes. ¡Únete ahora y no te pierdas ni un solo detalle!
                        </p>
                    </div>
                    <form onSubmit={e=>onSubmit(e)} className="mt-12 sm:flex sm:w-full sm:max-w-lg">
                        <div className="min-w-0 flex-1">
                        <label htmlFor="hero-email" className="sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            onChange={e=>onChange(e)}
                            value={email}
                            name='email'
                            className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-dorado-logo focus:ring-dorado-logo"
                            placeholder="Correo..."
                        />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3">
                            {
                                loading ?
                                <div
                                    className="block w-full rounded-md border border-transparent bg-dorado-logo px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-dorado-logo focus:ring-offset-2 sm:px-10"
                                >
                                    <PacmanLoader loading={loading} size={17} color="#ffffff"/>
                                </div>
                                :
                                <button
                                    type="submit"
                                    className="block w-full rounded-md border border-transparent bg-dorado-logo px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-dorado-logo focus:ring-offset-2 sm:px-10"
                                >
                                    Recibir Notificaciones
                                </button>
                            }
                        </div>
                    </form>


                    <div className="mt-6">
                        <div className="inline-flex items-center divide-x divide-gray-300">
                        <div className="flex flex-shrink-0 pr-5">
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                            <span className="font-medium text-gray-900">Calificado con 5 Estrellas</span> por{' '}
                            <span className="font-medium text-orange-600">500 usuarios</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    
                    
                    <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                    <img
                        className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://img.freepik.com/vector-gratis/nueva-ilustracion-concepto-notificaciones_114360-4688.jpg?w=826&t=st=1685131905~exp=1685132505~hmac=c21ad4759495f37d634af6c78d25b5492124fc4b59af5773bd6d3833e5f6870f"
                        alt=""
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>

            </div>
        </Layout>

    )
}

const mapStateToProps = state =>({

})
export default connect(mapStateToProps,{

})(OptIn)