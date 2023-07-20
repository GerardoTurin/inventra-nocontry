'use client'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { FaFilter } from 'react-icons/fa'
import { BiSolidDownload } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'
import { BiSolidLabel } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import Link from 'next/link'
import Products from '../../../../db/prouctsDB.js'
import { useEffect, useState } from 'react'


export default function Inventario() {
    const [categoria, setCategoria] = useState()
    console.log(categoria)
    const Product = Products.filter(Producto => Producto.category === categoria)


  /*   Products.stock.sort(function (a, b) {
        return a - b;
    }); */
    console.log(Products);
    return (
        <div className="">
            <header className="flex justify-around h-20 border-b border-gray-200">
                <div className="join w-3/4 p-4 justify-start">
                    <input className="input  w-full    input-bordered join-item" placeholder="Buscar" />
                    <button className="btn join-item   bg-primary "> <AiOutlineSearch className="mr-3" size={25} color='white' />   </button>
                </div>


                <div className="flex     items-center gap-5">
                    <div>
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content ">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="drawer-button  "> <IoMdNotifications className="online  mr-3 cursor-pointer" size={28} />  </label>
                            </div>
                            <div className="drawer-side z-10">
                                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li><a>Sidebar Item 1</a></li>
                                    <li><a>Sidebar Item 2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
            <div className='flex justify-around mt-4 items-center flex-wrap'>
                <div>
                    <h2> Total : 572 items</h2>
                </div>
                <div className='flex items-baseline gap-1 '>
                    <h2>Mostrar</h2>
                    <select className="select select-bordered" defaultValue={'¿cuantos desea ver?'}>
                        <option>¿cuantos desea ver?</option>
                        <option>5</option>
                        <option>7</option>
                        <option>9</option>
                        <option>11</option>
                        <option>15</option>
                    </select>
                </div>
                <div>
                    <button className='flex'> <FaFilter size={20} /> <span className='pl-2'> FILTRAR</span>   </button>
                </div>
                <div>

                    <button onClick={() => { setCategoria('limpieza') }}>Limpieza</button>
                    <button onClick={() => { setCategoria('comida') }}>Comida</button>
                    <button onClick={() => { setCategoria('electro') }}>Tecnologia</button>
                    <button onClick={() => { setCategoria('ropa') }}>Ropa</button>
                    <button onClick={() => { setCategoria('calzado') }}>Calzado</button>


                </div>
                <div>
                    <button className='flex'> <BiSolidDownload size={20} /> <span className='pl-2'> EXPORTAR</span>   </button>
                </div>
                <div>
                    <Link href={'/src/routes/inventario/additem'} className='flex  bg-primary text-white p-2 rounded-full'  > <MdAdd className=' text-2xl ' color='white' /> AGREGAR ITEM   </Link>
                </div>
            </div>
            <div className='flex justify-around mt-4 items-center flex-wrap '>
                <div className="px-10   overflow-x-auto w-full">
                    <table className="table w-full border rounded-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox checkbox-primary	" />
                                    </label>
                                </th>
                                <th className='text-center'>imagen</th>
                                <th className='text-center'>Codigo</th>
                                <th className='text-center'>Nombre del producto</th>
                                <th className='text-center'>Categoria</th>
                                <th className='text-center'> Unidad</th>
                                <th className='text-center'>Precio</th>
                                <th className='text-center'>Acciones</th>
                            </tr>
                        </thead>

                        {Product.map(Producto => (

                            <tbody key={Producto.id}>
                                {/* row 1 */}
                                <tr className='hover:bg-hover-linea cursor-pointer'>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox checkbox-primary	" />
                                        </label>
                                    </th>
                                    <th className='text-center'>
                                        <span className="avatar ">
                                            <span className="w-12 rounded-lg ring ring-contorno ">
                                                <img src={Producto.image} />
                                            </span>
                                        </span>
                                    </th>
                                    <th className='text-center'>
                                        {Producto.serialCode}
                                    </th>

                                    <td className='text-center'>
                                        {Producto.name}
                                    </td>
                                    <td className='text-center'>
                                        {Producto.category}
                                    </td>
                                    <td className='text-center'>
                                        {Producto.stock}
                                    </td>
                                    <td className='text-center'>
                                        {Producto.price}
                                    </td>
                                    <td className='text-center'>
                                        <button className="btn btn-circle  bg-salida mx-1 ">  <FaArrowRight color='green' size={'20'} /></button>
                                        <button className="btn btn-circle bg-editar mx-1 ">   <MdModeEditOutline color='blue' size={'20'} /></button>
                                        <button className="btn btn-circle bg-eliminar  mx-1 ">  <MdOutlineDeleteOutline color='red' size={'20'} /></button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div >
    )
}