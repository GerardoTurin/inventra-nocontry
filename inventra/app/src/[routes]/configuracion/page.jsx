import {IoMdNotifications} from 'react-icons/io'
import{GrNext} from 'react-icons/gr'

export default function configuracion() {
    return (
        <div>
             <header className="flex justify-end h-20 border-b border-gray-200 px-5">
              
        
                <div className="flex     items-center gap-5">
                    <IoMdNotifications className="mr-3" size={28} />
                    <img src='/epyon2.jpg' alt="avatar" className="rounded-full w-[50px] h-[50px]" />
                    <div>
                    <p className="text-gray-500">
                        Nombre de usuario
                    </p>
                    <p className="text-gray-400">
                        Role
                    </p>
                    </div>
                </div>
            </header>


            <div className="flex flex-col w-full lg:flex-row  mt-4 px-5">
                    <div className="grid flex-grow  px-20 mt-6 ">
                        <h2>USUARIO</h2>

                        <div className='flex flex-wrap flex-col gap-5'>
                            <button  className='btn flex  '> <span className=''>Editar perfil</span> <GrNext/> </button>

                            <button  className='btn flex'>Cambiar contraseña <GrNext/> </button>
                        </div>


                        <div className='mt-4'>
                                <h2>Moneda</h2>
                                <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Seleccione la moneda</option>
                                <option>COP</option>
                                <option>USD</option>
                                <option>EUR</option>
                                </select>

                                <div className="form-control mt-2">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Mostrar decimales</span>  
                                            <input type="checkbox" className="toggle"  />
                                        </label>
                                </div>
                        </div>



                        <div className='mt-10'>
                            <h2>Pantalla</h2>
                            <div className="form-control mt-2">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Modo oscuro</span>  
                                            <input type="checkbox" className="toggle"  />
                                        </label>
                            </div>

                        </div>


                        
                    
                    </div> 
                    <div className="divider lg:divider-horizontal"></div> 

                    <div className="grid flex-grow  pl-5 ">
                        <h2 className='text-xl'>Editar perfil</h2>
                        <div className='flex flex-col items-center  '>
                            <div className="avatar ">
                                <div className="w-32 rounded-full">
                                    <img src="/epyon2.jpg" />
                                </div>
                            </div>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Nombre del perfil</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Correo electronico</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <button className='btn mt-5'>Enviar</button>

                        </div>
                     </div>
            </div>
        </div>
        )
}