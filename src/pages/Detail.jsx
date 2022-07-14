import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Container, Grid, Header, HeaderContent, Image, Rating, Segment } from 'semantic-ui-react';
import { productsData } from '~/common/constants/Constants';

import Breadcrumbs from '~/components/breadcrumbs/Breadcrumbs';
import Button from '~/components/button/Button';

import Slider from "react-slick";
import { settings } from '~/common/setting/setting';

import './Detail.scss'
import { useDispatch } from 'react-redux';
import { increment } from '~/services/counter';

const Detail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [data, setData] = useState();
    /**
     * Get data 
     */
    useEffect(() => {
        setData(productsData?.find(({ id }) => String(id) === params.productId));
    }, [params]);

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
                        <Header as='h1' className="detail-title">
                            <div dangerouslySetInnerHTML={{ __html: data?.title }}></div>
                        </Header>
                        <Rating maxRating={5} defaultRating={3} icon={'heart'} size='large' />
                    </Grid.Row>

                    <Grid.Row className='detail-content'>
                        <Button onClick={() => dispatch(increment({ id: data?.id }))}>ADD TO CARD</Button>
                        <Header as='h2'>Description</Header>
                        <HeaderContent className='detail-description'>
                            {data?.description}
                        </HeaderContent>
                    </Grid.Row>
                </Grid.Column>
            </Grid>

            <div className='slider'>
                <Header as='h3'>MAY WE SUGGEST</Header>
                <Slider
                    {...settings}>
                    {productsData.map((item, i) => (
                        <ProductList item={item} key={i} />
                    ))}
                </Slider>
            </div>
        </Container >
    )
}

/**
 * List all product
 */
const ProductList = props => {
    const item = props.item
    return (
        <Segment >
            <Link to={`/product/${item.id}`} replace={true}>
                <div className='product-list'>
                    <Image
                        // label={{
                        //     as: 'a',
                        //     color: 'red',
                        //     content: item?.price,
                        //     ribbon: 'right',
                        // }} 
                        src={item?.image} className='product-list-image' />
                    <div dangerouslySetInnerHTML={{ __html: item?.title }} className='product-list-title'></div>
                </div>
            </Link>
        </Segment>
    )
}



export default Detail