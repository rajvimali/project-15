import { push, ref } from 'firebase/database';
import React, { useState } from 'react'
import { database } from '../Firebase/Firebase';

const Addtestimonial = () => {
    const [input, setInput] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await push(ref(database, "testimonial"), input);
            setInput();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log(input)
    };
    return (
        <>
            <div className="container">

                <h1 className='text-center mt-4'>Book Now</h1>
                <form onSubmit={handleSubmit} className='col-6 p-5 shadow mx-auto'>
                    <textarea name='testimonial' className='form-control' rows={5} onChange={handleChange}>

                    </textarea>
                    <button className="btn btn-primary mt-4 form-control" type='submit' >BOOK NOW</button>
                </form>
            </div>
        </>
    )

}

export default Addtestimonial