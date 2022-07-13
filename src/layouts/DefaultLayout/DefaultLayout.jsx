import React from 'react'
import Footer from '~/components/footer/Footer'
import Header from '~/components/header/Header'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='layout-container'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
