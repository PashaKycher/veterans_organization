import React from 'react'
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../store/loginSlice';

export const AddToUsBtn = () => {

    const dispatch = useDispatch();

    return (
        <button 
        onClick={()=> dispatch(setIsOpen(true))}
        className="mt-10 px-10 py-4 border border-border-button text-white bg-primary md:bg-none md:border-white hover:bg-primary hover:border-primary transition">
            приєднатися до простору
        </button>
    )
}
