import React from 'react'
import './Header.scss'
import { Button, Grid, Container, Menu } from 'semantic-ui-react'
const Header = () => {

    return (
        <Container className='header' >
            <Grid>
                <Menu size='massive' fixed='top'  >
                    <Grid.Column computer={16} >
                        Header Now
                    </Grid.Column>
                </Menu>
            </Grid>
        </Container >
    )
}

export default Header
