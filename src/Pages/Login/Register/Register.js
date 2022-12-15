import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const {createUser, updateUserProfileData} = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        //Password Error Message
        if(!/(?=.*[A-Z])/.test(password)){
            setPasswordError('Please provide atleast one uppercase.');
            setError(true);
            return;
        }
        if(password.length < 8){
            setPasswordError('Password should be atleast 8 characters.');
            setError(true);
            return;
        }
        if(!/(?=.*[!@#$%*])/.test(password)){
            setPasswordError('Please use atleast 1 special character.');
            setError(true);
            return;
        }

        // create user
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError(false);
            updateProfile(name, photo);
            form.reset();
            setSuccess(true);
            navigate('/profile')
        })
        .catch(error =>{
            console.error(error.message);
            setPasswordError(error.message);
        })
    }

    // update user
    const updateProfile = (name, photo) =>{
        updateUserProfileData(name, photo)
        .then(() => console.log("Registration Done!"))
        .catch(error =>{
            console.error(error.message);
            setPasswordError(error.message);
        })
    }

    // handle terms & conditions
    const handleTerms = (e) =>{
        setAcceptTerms(e.target.checked);
    }
    
    return (
        <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 py-20 mt-12">
        <h1 className="text-5xl text-center font-bold">Sign Up</h1>

        {
                            error && 
                            <div className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{passwordError}</span>
                            </div>
                            </div>
                        }
                        
                        
                        {
                            success && 
                            <div className="alert alert-success shadow-lg">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span>Account Created Successfully!</span>
                            </div>
                            </div>
                        }
        <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
            </div>
            <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Put url Here" name='photo' required className="input input-bordered" />
                        </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <span>{passwordError}</span>
            </div>
            <div class="flex items-center ">
                            <input onClick={handleTerms} id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I Accept <a href="/home" alt='t&C' class="text-blue-600 dark:text-blue-500 hover:underline">Terms & Conditions</a>.</label>
                        </div>

                        <div className="form-control mt-2">
                        <button className="btn btn-primary" disabled={!acceptTerms}>Register</button>
                        </div>
        </form>
        <p className='text-center'>Already have an account? 
        <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
        
    </div>
    );
};

export default Register;