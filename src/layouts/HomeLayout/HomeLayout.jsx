import React from 'react'
import Footer from '~/components/footer/Footer'
import HomepageHeader from './HomepageHeader'

const HomeLayout = ({ children }) => {
    return (
        <div className='homepage-layout'>
            <HomepageHeader />
            <div className="homepage-layout-container">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default HomeLayout