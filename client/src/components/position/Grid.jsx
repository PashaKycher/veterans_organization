import React, { use, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { positions } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';

const Grid = () => {
    const navigate = useNavigate();
    const [positions, setPositions] = useState([]);

    const fetchPositions = async() => {
        const { data } = await api.get("/api/position/get");
        console.log(data)

        if (data.success) {
            setPositions(data.data);
            console.log(data.data)
        }
    }

    useEffect(() => {
        fetchPositions();
    }, [])

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto px-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {positions.map((item, index) => (
                    <motion.article
                        key={item._id}
                        whileHover={{ y: -2 }}
                        className="bg-white rounded-xl border border-neutral-200 p-6 cursor-pointer hover:shadow-md transition" 
                        onClick={() => { navigate(`/position/${item._id}`); scrollTo(0, 0); }}
                        >
                        <p className="text-xs uppercase tracking-wide text-text mb-2">
                            Позиція КЗУ · {item.date}
                        </p>

                        <h3 className="text-lg font-semibold mb-4">
                            {item.title}
                        </h3>
                        
                        <p className="text-sm leading-relaxed text-[#374151]">
                            {item.text}
                        </p>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    )
}


export default Grid