import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Create = () => {
    const [values, setValues] = useState({
        name: " ",
        email: " ",
        phone: " "
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3002/users', values)
            .then(res => {
                setValues(res.data)
                console.log(res.data)
                navigate('/')
            }).catch(err => console.log(err))
    }

    return (
        <div className='w-[500px] h-[400px] m-auto bg-cyan-600 p-5 mt-20'>
            <h1 className="text-white font-bold text-center text-[25px]">Create User</h1>
            <form action="" onSubmit={handleSubmit} >
                <p className="py-2">Name</p>
                <input type="text" placeholder='enter your name' className="w-full p-2"
                    onChange={e => setValues({ ...values, name: e.target.value })}
                />
                <p className="py-2">Email</p>
                <input type="email" placeholder='enter your email' className="w-full p-2"
                    onChange={e => setValues({ ...values, email: e.target.value })}
                />
                <p className="py-2">Phone</p>
                <input type="text" placeholder='enter your phone' className="w-full p-2"
                    onChange={e => setValues({ ...values, phone: e.target.value })}
                />
                <button type="submit " className="btn btn-success mt-5 mr-2 text-white"> Submit</button>
                <Link to='/' className='btn btn-neutral'>Back</Link>
            </form>

        </div>
    )
}

export default Create