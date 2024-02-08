import { onValue, push, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { database } from '../../Firebase/Firebase';

function ManageContact() {

    const [input, setInput] = useState();



    const handleSubmit = async (e) => {
        console.log("ok")
        e.preventDefault();
        try {
            await update(ref(database, `contect`), { address: input.address });
            await update(ref(database, `contect`), { contect: input.contect });
            await update(ref(database, `contect`), { email: input.email });
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    };
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    return (
        <div className="container-fuild admin">
            <div className="container">
                <h1 className="text-center mb-4">Contacts</h1>
                <form onSubmit={handleSubmit} className="mx-auto col-6 border rounded shadow p-5">
                    <label htmlFor="name" className="form-label">Address :</label>
                    <input type="text" className="form-control mb-2" placeholder='Enter your name' name="address" value={input ? input.name : ""} onChange={handleChange} required />

                    <label htmlFor="email" className="form-label">Contact Number :</label>
                    <input type="text" className="form-control mb-2" placeholder='Enter your mob.no' name="contect" value={input ? input.contect : ""} onChange={handleChange} required />

                    <label htmlFor="password" className="form-label">Email :</label>
                    <input type="text" className="form-control mb-2" placeholder='Enter your email' name="email" value={input ? input.email : ""} onChange={handleChange} required />

                    <button className="btn btn-primary mt-2 form-control" >Update</button>
                </form>
            </div>
        </div>
    )
}

export default ManageContact