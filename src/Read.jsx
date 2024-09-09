import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3002/users/` + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='w-[500px] bg-cyan-700 border border-2 rounded-md m-auto mt-10 p-5 text-white' >
            <h1 className="text-center text-bold text-[30px]">User Information</h1>
            <h3 className="mt-3 font-medium text-[20px]">Name: {data.name}</h3>
            <h3 className="mt-3 font-medium text-[20px]">Email: {data.email}</h3>
            <h3 className="mt-3 mb-3 font-medium text-[20px]">Phone: {data.phone}</h3>
            <Link to={`/update/${id}`} className='btn btn-success mr-3'> Edit</Link>
            <Link to='/' className='btn btn-primary'>Back</Link>
        </div>
    )
}

export default Read
