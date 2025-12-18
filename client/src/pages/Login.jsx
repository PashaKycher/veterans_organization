import { AnimatePresence, motion } from 'motion/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../store/loginSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full h-full mx-auto'>

                <div className='my-12 lg:my-24 bg-white w-full max-w-3xl mx-auto rounded p-3 md:p-7'>
                    <form className="relative flex flex-col gap-4 m-auto items-start p-2 md:p-8 py-12 w-full md:w-[352px] lg:w-[600px] text-text rounded-lg shadow-xl border border-gray-200 bg-white">
                        <p className="text-2xl font-medium m-auto">
                            <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
                            <button onClick={() => dispatch(setIsOpen(false))} className="absolute top-2 right-4 text-text hover:text-red-500">✕</button>
                        </p>
                        {state === "register" && (
                            <div className="w-full text-primary">
                                <p>Name</p>
                                <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="text" required />
                            </div>
                        )}
                        <div className="w-full text-primary ">
                            <p>Email</p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
                        </div>
                        <div className="w-full text-primary ">
                            <p>Password</p>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
                        </div>
                        {state === "register" ? (
                            <p>
                                Already have account? <span onClick={() => setState("login")} className="text-indigo-500 cursor-pointer">click here</span>
                            </p>
                        ) : (
                            <p>
                                Create an account? <span onClick={() => setState("register")} className="text-indigo-500 cursor-pointer">click here</span>
                            </p>
                        )}
                        <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                            {state === "register" ? "Create Account" : "Login"}
                        </button>
                    </form>
                </div>
            </motion.section>
        </AnimatePresence>
    );
}

export default Login