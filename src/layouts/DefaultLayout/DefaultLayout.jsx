import React from 'react'
import Footer from '~/components/footer/Footer'
import HeaderPage from '~/components/header/Header'

const DefaultLayout = ({ children }) => {
    return (
        <HeaderPage fixed={true}>
            <div>
                <div className='layout-container'>
                    {children}
                </div>
                <Footer />
            </div>
        </HeaderPage>
    )
}

export default DefaultLayout
