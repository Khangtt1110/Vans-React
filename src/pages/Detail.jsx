import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Grid, Header, HeaderContent, Image, Rating } from 'semantic-ui-react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { productsData } from '~/common/constants/Constants';
import Breadcrumbs from '~/components/breadcrumbs/Breadcrumbs';
import Button from '~/components/button/Button';

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

    /**
     * sections data
     */
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

    return (
        <Container className='detail'>
            {/* Breadcrumb */}
            <Grid.Row>
                <Breadcrumbs data={sections} />
            </Grid.Row>

            {/* Detail */}
            <Grid padded='vertically' container >
                {/* Image product detail */}
                <Grid.Column computer={6} mobile={16}>
                    <Image className='detail-image' src={data?.image} />
                </Grid.Column>
                {/* Product detail */}
                <Grid.Column computer={10} mobile={16}>
                    <Grid.Row className='detail-info'>
                        <HeaderContent className='detail-price'>
                            ${data?.price}
                        </HeaderContent>
                        <Header size='huge' className="detail-title">
                            <div dangerouslySetInnerHTML={{ __html: data?.title }}></div>
                        </Header>
                        <Rating maxRating={5} defaultRating={3} icon={'heart'} size='large' />
                    </Grid.Row>

                    <Grid.Row>
                        <Button>ADD TO CARD</Button>
                        <Header as='h2'>Description</Header>
                        <HeaderContent className='detail-description'>
                            {data?.description}
                        </HeaderContent>
                    </Grid.Row>
                </Grid.Column>
            </Grid>

            <Swiper
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={3}
            // autoplay={{ delay: 2000 }}
            >
                {/* Show all movie in state */}
                <SwiperSlide >Slide 4</SwiperSlide>
                <SwiperSlide >Slide 4</SwiperSlide>
                <SwiperSlide >Slide 4</SwiperSlide>
            </Swiper>
        </Container >
    )
}

export default Detail