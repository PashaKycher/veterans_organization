import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';

const People = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const { data } = await api.get("/api/users/usersclubleader");
        if (data.success) setUsers(data.users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-2xl font-semibold mb-10">Люди лідерства</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {users.map((p, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 space-y-4 flex flex-col">
                        <div className="w-full h-40 bg-linear-to-br from-primary/15 to-white rounded-xl border border-primary/10 flex items-center justify-center text-primary font-semibold">
                            <img src={p.avatar} alt="Фото" className='w-full h-full object-cover' />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-semibold text-primary">{p.full_name}</p>
                            <h3 className="text-xl font-bold text-[#03383A]">@{p.user_name}</h3>
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed flex-1">{p.storiesForPage}</p>
                        <div>
                            <button type='button' className="inline-flex items-center justify-center px-4 py-2 rounded-lg border cursor-pointer border-primary text-primary font-semibold hover:bg-primary/10 transition">
                            {/* onClick={() => { navigate(`/leaders/${p._id}`); scrollTo(0, 0); }} */}
                                Дізнатися більше
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </motion.section>
    )
}


export default People