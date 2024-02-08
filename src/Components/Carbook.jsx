import { push, ref } from 'firebase/database';
import React, { useState } from 'react'
import { database } from '../Firebase/Firebase';

const Carbook = () => {
    const [input, setInput] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const updatedInput = { ...input, "status": "Pending" };
            await push(ref(database, "booking"), updatedInput);
            setInput();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="container">
                <h1 className='text-center mt-4'>Book Now</h1>
                <form action="" onSubmit={handleSubmit} className='col-6 p-5 shadow mx-auto'>
                    <input type="date" name='startdate' value={input ? input.startdate : ""} class="form-control mb-3" placeholder='Start Date' onChange={handleChange} required />
                    <input type="date" name='enddate' value={input ? input.enddate : ""} class="form-control mb-3" placeholder='End Date' onChange={handleChange} required />
                    <input type="text" name='remark' className='form-control' placeholder='Remark' />
                    <button className="btn btn-primary mt-4 form-control" type='submit' >BOOK NOW</button>
                </form>
            </div>
        </>
    )
}

export default Carbook