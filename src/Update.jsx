import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const [values, setValues] = useState({
        name: " ",
        email: " ",
        phone: " "
    })
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:3002/users/' + id)
            .then(res => setValues(res.data))
            .catch(err => console.log(err)
            )
    }, [])

    // this is for update function 
    const handleUpdate = (event) => {
        event.preventDefault()
        axios.put('http://localhost:3002/users/' + id, values)
            .then(res => {
                console.log(res.data);
                setValues(res.data)
                navigate('/')

            }).catch(err => console.log(err))
    }
    return (
        <div>
            <div className='w-[500px] h-[400px] m-auto bg-cyan-600 p-5 mt-20'>
                <h1 className="text-white font-bold text-center text-[25px]">Update User</h1>
                <form action="" onSubmit={handleUpdate} >
                    <p className="py-2">Name</p>
                    <input type="text" placeholder='enter your name' className="w-full p-2"
                        value={values.name}
                        onChange={e => setValues({ ...values, name: e.target.value })}
                    />
                    <p className="py-2">Email</p>
                    <input type="email" placeholder='enter your email' className="w-full p-2"
                        value={values.email}
                        onChange={e => setValues({ ...values, email: e.target.value })}
                    />
                    <p className="py-2">Phone</p>
                    <input type="text" placeholder='enter your phone' className="w-full p-2"
                        value={values.phone}
                        onChange={e => setValues({ ...values, phone: e.target.value })}
                    />
                    <button type="submit " className="btn btn-success mt-5 mr-2 text-white"> Update</button>
                    <Link to='/' className='btn btn-neutral'>Back</Link>
                </form>

            </div>
        </div>
    )
}

export default Update
