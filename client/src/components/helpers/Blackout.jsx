import React from 'react'

export const Blackout = () => {
    return (
        <>
            {/* Dark overlay for lg+ */}
            < div className="hidden lg:block absolute inset-0 bg-black/70" ></div >
        </>
    )
}
