import React from 'react'
import { Container, Grid, Icon, Image, Input, Label, Menu } from 'semantic-ui-react'
import images from '~/common/assets'
import { HeaderData } from '~/common/constants/Constants'
import { useSelector } from 'react-redux';
import './Header.scss'

const Header = () => {
    const counter = useSelector((state) => state.counter.total);

    return (
        <Container fluid className='header-container'>
            <Grid>
                <Grid.Row className='header-menu'>
                    <Grid.Column computer={2} tablet={2} mobile={4}>
                        <Image src={images.logo} size="big" className='header-menu-logo' />
                    </Grid.Column>

                    {/* Search */}
                    <Grid.Column computer={4} mobile={9} className='header-menu-search' only="computer mobile">
                        <Input
                            transparent
                            color="teal"
                            icon={{ name: 'search', color: 'grey' }}
                            iconPosition="left"
                            placeholder="SEARCH..."
                            size="small"
                        ></Input>
                    </Grid.Column>
                    {/* List */}
                    {HeaderData.map((item) => (
                        <Grid.Column
                            key={item.name}
                            computer={item.name === 'Help' || item.name === 'Login' ? 1 : 2}
                            className='header-menu-content'
                            only="computer tablet"
                            style={{ justifyContent: item.position || 'center' }}
                        >
                            <p style={item.active && { color: 'red' }}>{item.name}</p>
                            <Icon bordered name={item.icon} color={item.active && 'red'} />
                        </Grid.Column>
                    ))}
                    {/* Card */}
                    <Grid.Column className='header-menu-card' computer={2} tablet={1} mobile={3}>
                        <Icon bordered name="shopping basket" color="red" size="large" fitted />
                        {counter > 0 ? (
                            <Label color="red" floating size="mini" className='label-count'>
                                {counter}
                            </Label>
                        ) : null}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Header
