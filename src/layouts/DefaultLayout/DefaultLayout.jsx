import React from 'react'
import Footer from '~/components/footer/Footer'
import HeaderPage from '~/components/header/Header'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <HeaderPage />
            <div className='layout-container'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
