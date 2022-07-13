import React from 'react'
import { Button, Container, Grid, Icon, Input, List } from 'semantic-ui-react'
import { infoData, newsletterData, serviceData, socialData } from '~/common/constants/Constants'
import Contact from './Contact'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Grid>
          <Grid.Column computer={4} tablet={8}>
            <Contact data={infoData} />
          </Grid.Column>
          <Grid.Column computer={4} tablet={8}>
            <Contact data={serviceData} />
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={14}>
            <Contact data={socialData} />
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Contact data={newsletterData} />
          </Grid.Column>
        </Grid>
      </Container>
    </div >
  )
}

export default Footer