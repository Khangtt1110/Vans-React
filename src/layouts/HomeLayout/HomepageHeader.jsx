import React from 'react'
import Header from '~/components/header/Header'
import './HomepageHeader.scss'

const HomepageHeader = () => {

    return (
        < div className='header-homepage' >
            <Header fixed={false} />
        </ div>
    )
}

export default HomepageHeader
