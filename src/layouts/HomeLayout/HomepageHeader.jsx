import React from 'react'
import { Container, Grid, Header, Icon } from 'semantic-ui-react'
import { IntroduceData, ListHeaderData } from '~/common/constants/Constants'
import Button from '~/components/button/Button'
import HeaderPage from '~/components/header/Header'
import './HomepageHeader.scss'

const HomepageHeader = () => {


    return (
        < div className='header-homepage' >
            <HeaderPage fixed={false} />
            <Container>
                <Grid>
                    <Grid.Row>
                        <HeaderList />
                    </Grid.Row>
                    <Grid.Row className='header-info'>
                        <InfoData />
                    </Grid.Row>
                    <Grid.Row className='header-homepage-scroll' >
                        <Icon inverted name='arrow alternate circle down outline' size='big' />
                        <Header inverted as='h4'>SCROLL DOWN</Header>
                    </Grid.Row>
                </Grid>
            </Container>
        </ div>
    )
}
/**
 * List text header
 */
const HeaderList = () => {
    return (
        <>
            {ListHeaderData.map((item, index) => (
                <Grid.Column key={index} mobile={4} computer={item.width}>
                    <Header as={'h3'} inverted className='header-list-content'
                        style={{

                            textAlign: item.position || 'left',
                        }}
                    >
                        {item.content}
                    </Header>
                </Grid.Column>
            ))
            }
        </>
    )
}
/**
 * Introduce 
 */
const InfoData = () => {
    return (
        <>
            <Header as="h1" inverted className='header-info-title'>
                {IntroduceData.title}
            </Header>
            <Header className='header-info-content'
                as="h4"
                inverted
            >
                <div dangerouslySetInnerHTML={{ __html: IntroduceData.content }}></div>
            </Header>
            <Button icon="angle right">DISCOVER NOW</Button>
        </>
    )
}

export default HomepageHeader
