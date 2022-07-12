import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Breadcrumb, Container, Grid, Header, Image, Label, Rating } from 'semantic-ui-react';

import { productsData } from '~/common/constants/Constants';

import './Detail.scss'

const Detail = () => {
    const params = useParams();
    const [data, setData] = useState();
    /**
     * Get data 
     */
    useEffect(() => {
        setData(productsData?.find(({ id }) => String(id) === params.productId));
    }, []);

    const sections = [
        {
            key: 'Home',
            content: 'Home',
            link: true,
            path: '/',
        },
        {
            key: 'Product',
            content: 'Product',
            link: true,
            path: '/product',
        },
        {
            key: data?.id,
            content: data?.title,
            active: true,
            path: '#'
        },
    ]

    console.log(data);
    return (
        <Container className='detail'>
            <Grid>
                {/* Breadcrumb */}
                <Grid.Row>
                    <Breadcrumb size='large'>
                        {sections.map((item, index) => (
                            <>
                                <Breadcrumb.Section key={index} className={item.active && 'active'} link>
                                    <Link to={`${item.path}`}><div dangerouslySetInnerHTML={{ __html: item?.content }}></div></Link>
                                </Breadcrumb.Section>
                                {item.link && (<Breadcrumb.Divider icon={'right angle'} />)}
                            </>
                        ))}
                    </Breadcrumb>
                </Grid.Row>

                {/* Detail */}
                <Grid.Row>
                    <Grid.Column computer={6} >
                        <Image src={data?.image} size='massive' />
                    </Grid.Column>

                    <Grid.Column computer={10}>
                        <Grid.Row>
                            <Header as={'h1'} textAlign='center'>
                                <div className="title" dangerouslySetInnerHTML={{ __html: data?.title }}></div>
                            </Header>
                        </Grid.Row>
                        <Grid.Row>
                            <Rating maxRating={5} defaultRating={3} size='large' />
                        </Grid.Row>
                        <Grid.Row >
                            <Label color='red' size='large'>${data?.price}</Label>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container >
    )
}

export default Detail