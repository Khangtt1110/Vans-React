import React, { useEffect, useRef, useState } from 'react'
import { Container, Grid, Icon, Image, Input, Label, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { HeaderData } from '~/common/constants/Constants'
import images from '~/common/assets'
import './Header.scss'
import { createMedia } from '@artsy/fresnel'


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HeaderPage = props => {
  const counter = useSelector((state) => state.counter.total);
  return (
    <>
      <MediaContextProvider>
        <DesktopContainer fixed={props.fixed} counter={counter} >{props.children}</DesktopContainer>
        <MobileContainer counter={counter} >{props.children}</MobileContainer>
      </MediaContextProvider></>
  )
}

const DesktopContainer = props => {
  const { pathname } = useLocation()
  const active = HeaderData.findIndex(e => e.path === pathname)
  const headerRef = useRef()
  const fixed = props.fixed;

  useEffect(() => {
    /**
     * check home layout
     */
    if (!fixed && DesktopContainer) {
      const shinkHeader = () => {
        // scroll down and then fixed header
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          if (!!headerRef.current)
            headerRef.current.classList.add('fixed')
        } else {
          if (!!headerRef.current)
            headerRef.current.classList.remove('fixed')
        }
      }
      window.addEventListener('scroll', shinkHeader)
      return () => {
        window.removeEventListener('scroll', shinkHeader)
      }
    }
  }, []);

  return (
    <Media greaterThan='mobile'>
      <div ref={fixed ? null : headerRef} className={fixed ? 'fixed' : ''}>
        <Container >
          {/* Header Menu */}
          <Grid>
            <Grid.Row className='header-homepage-menu'  >
              {/* Logo */}
              <Grid.Column computer={2} tablet={2} >
                <Link to='/'>
                  <Image src={images.logo} size="big" className='header-homepage-menu-logo' />
                </Link>
              </Grid.Column>

              {/* Search */}
              <Grid.Column computer={4} className='header-homepage-menu-search' only="computer mobile">
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
              {HeaderData.map((item, index) => (
                <Grid.Column
                  key={index}
                  computer={item.name === 'Help' || item.name === 'Login' ? 1 : 2}
                  tablet={item.name === 'Help' ? 1 : (item.name === 'Login') ? 2 : 3}
                  className={`header-homepage-menu-content ${index === active ? 'header-active' : ''}`}
                  only="computer tablet"
                  style={{ justifyContent: item.position || 'center' }}
                >
                  <Link to={item.path} >
                    <p>{item.name}</p>
                    <Icon bordered name={item.icon} color={item.active && 'red'} />
                  </Link>
                </Grid.Column>
              ))}
              {/* Card */}
              <Grid.Column className='header-homepage-menu-card' computer={2} tablet={2} mobile={3}>
                <Icon bordered name="shopping basket" color="red" size="large" fitted />
                {props.counter > 0 ? (
                  <Label color="red" floating size="mini" className='header-homepage-menu-label'>
                    {props.counter}
                  </Label>
                ) : null}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container >
      </div >
      {props.children}
    </Media >
  )
}

/**
 * Mobile screen
 */
const MobileContainer = props => {

  const [sidebarOpened, setSidebarOpened] = useState(false);
  const handleSidebarHide = () => setSidebarOpened(false)
  const handleToggle = () => setSidebarOpened(true)
  return (
    <Media as={Sidebar.Pushable} at='mobile'>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          inverted
          onHide={handleSidebarHide}
          className='header-sidebar'
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item ><Link to='/'>Home</Link></Menu.Item>
          {HeaderData.map((item, index) => (
            <Menu.Item ><Link to={item.path}>{item.name}</Link></Menu.Item>
          ))}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            vertical
            className='header-mobile'
          >
            <Container>
              <Menu inverted pointing secondary size='large' >
                <Menu.Item onClick={handleToggle} className='header-mobile-icon'>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Icon bordered name="shopping basket" color="red" size="large" fitted />
                  {props?.counter > 0 ? (
                    <Label color="red" floating size="mini" className='header-homepage-menu-label'>
                      {props?.counter}
                    </Label>
                  ) : null}
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>

  )
}

export default HeaderPage
