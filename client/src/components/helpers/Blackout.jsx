import React from 'react'

export const Blackout = () => {
    return (
        <>
            {/* Dark overlay for lg+ */}
            < div className="hidden md:block absolute inset-0 bg-black/40" ></div >
        </>
    )
}
