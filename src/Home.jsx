import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err)
            )
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("would you like to delete?");
        if (confirm) {
            axios.delete('http://localhost:3002/users/' + id)
                .then(res => {
                    location.reload()
                }).catch(err => console.log(err))
        }
    }
    return (
        <div className='vh-100 w-3/4  m-auto'>

            <h1 className='text-center font-bold font-serif text-[30px] pt-10'>User List </h1>
            <div className=' m-auto shadow-2xl font-mono border-2 border-cyan-700 bg-cyan-700 text-white text-[16px] w-6/12'>
                <div className=''>
                    <Link to='/create' className='btn btn-default  '>ADD+</Link>
                </div>

                <table >
                    <thead >
                        <tr >
                            <th className='py-3 px-18'>ID</th>
                            <th className='py-3 px-18'>Name</th>
                            <th className='py-3 px-18'>Email</th>
                            <th className='py-3 px-18'>Phone</th>
                            <th className='py-3 px-18'>Action</th>
                        </tr>
                    </thead>
                    <tbody className=' text-black text-center'>
                        {
                            data.map((d, i) => (
                                <tr key={d.id} className='bg-cyan-500 cursor-pointer duration-300 borber border-2 border-black'>
                                    <td className='py-3 px-2'>{i + 1}</td>
                                    <td className='py-3 px-2'>{d.name}</td>
                                    <td className='py-3 px-2'>{d.email}</td>
                                    <td className='py-3 px-2'>{d.phone}</td>
                                    <td className=''>
                                        <Link to={`/read/${d.id}`}
                                            className='btn btn-primary'>Read</Link>
                                        <Link to={`/update/${d.id}`} className='btn btn-success'>Edit </Link>
                                        <button onClick={e => handleDelete(d.id)} className='btn btn-error'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home