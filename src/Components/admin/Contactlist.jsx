import React, { useEffect, useState } from 'react'
import { database } from '../../Firebase/Firebase';
import { onValue, ref } from 'firebase/database';

const Contactlist = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        userlist();
    }, []);
    const userlist = () => {
        const userRef = ref(database, "contectus");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data).map((id) => ({ id, ...data[id] }))
                console.log(list)
                setUser(list)
            } else {
                console.log("data not Found")
            }
        });
    };

    return (
        <table className="table table-hover">
            <thead>
                <tr className='text-center fs-5'>
                    <th scope="col-3">Id</th>
                    <th scope="col-3">Name</th>
                    <th scope="col-3">Email</th>
                    <th scope="col-3">Contact no</th>
                    <th scope="col-3">Message</th>
                    <th scope="col-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {user && user.map((item, index) => (
                    <tr key={item.id} className='text-center'>
                        <td scope="row">{index + 1}</td>
                        <td className='col-3'>{item.fullname}</td>
                        <td className='col-3'>{item.email}</td>
                        <td className='col-3'>{item.contactno}$</td>
                        <td className='col-3'>{item.message}</td>

                        <td>
                            <button className="btn btn-danger text-white mx-2" >Mark As read</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Contactlist