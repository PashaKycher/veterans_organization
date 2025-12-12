import React, { useState } from 'react'
import { veteransLinks } from '../assets/assets'
import ModalWindow from '../components/helpers/ModalWindow'
import Hero from '../components/veterans/Hero'
import Message from '../components/veterans/Message'
import Resource from '../components/veterans/Resource'
import LinksAndTestimonials from '../components/veterans/LinksAndTestimonials'
import Other from '../components/veterans/Other'
import Form from '../components/veterans/Form'

const Veterans = () => {
    const [open, setOpen] = useState(true);
    const data = veteransLinks

    return (
        <main className="bg-[#F1F4F4] min-h-screen text-dark">
            <Hero />
            <Message />
            <Resource />
            <LinksAndTestimonials />
            <Form />
            <Other />

            <ModalWindow
                isOpen={open}
                onClose={() => setOpen(false)}
                items={data}
            />
        </main>
    )
}

export default Veterans