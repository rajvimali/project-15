import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangePassword = async () => {
        try {
            if (newPassword !== confirmNewPassword) {
                setErrorMessage("Passwords don't match");
                return;
            }

            const user = auth.currentUser;
            if (!user) {
                setErrorMessage("User not signed in");
                return;
            }

            const credential = auth.EmailAuthProvider.credential(user.email, currentPassword);
            await user.reauthenticateWithCredential(credential);
            await user.updatePassword(newPassword);
            alert('Password changed successfully');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <>
            <div className="container">
                <h2 className='text-center my-3'>Change Password</h2>
                <div className='col-6 p-5 shadow mx-auto'>

                    <div>
                        <label>Current Password :</label>
                        <input type="password" className='form-control my-2' placeholder='enter current password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>New Password :</label>
                        <input type="password" className='form-control my-2' placeholder='enter new password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirm New Password :</label>
                        <input type="password" className='form-control my-2' placeholder='confirm password' value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                    </div>
                    <button onClick={handleChangePassword} className='btn  btn-secondary form-control mt-2'>Change Password</button>
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
