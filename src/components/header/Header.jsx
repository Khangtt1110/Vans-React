import React, { useEffect, useRef } from 'react'
import { Container, Grid, Icon, Image, Input, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { HeaderData } from '~/common/constants/Constants'
import images from '~/common/assets'
import './Header.scss'



const Header = ({ fixed = true }) => {
  const { pathname } = useLocation()
  const counter = useSelector((state) => state.counter.total);
  const headerRef = useRef()

  const active = HeaderData.findIndex(e => e.path === pathname)

  useEffect(() => {
    const shinkHeader = () => {
      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        headerRef.current.classList.add('fixed')
      } else {
        headerRef.current.classList.remove('fixed')
      }
    }

    window.addEventListener('scroll', shinkHeader)
    return () => {
      window.removeEventListener('scroll', shinkHeader)

    }
  }, []);
  return (
    <div ref={fixed ? null : headerRef} className={fixed ? 'fixed' : ''}>
      <Container >
        {/* Header Menu */}
        <Grid>
          <Grid.Row className='header-homepage-menu'  >
            <Grid.Column computer={2} tablet={2} mobile={4}>
              <Image src={images.logo} size="big" className='header-homepage-menu-logo' />
            </Grid.Column>

            {/* Search */}
            <Grid.Column computer={4} mobile={9} className='header-homepage-menu-search' only="computer mobile">
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
              {counter > 0 ? (
                <Label color="red" floating size="mini" className='header-homepage-menu-label'>
                  {counter}
                </Label>
              ) : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container >
    </div >
  )
}

export default Header
