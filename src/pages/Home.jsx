import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardContent, Grid, Header, Icon, Image, Label, Rating, Segment } from 'semantic-ui-react'
import { bannerData, customBannerData, FeaturedProductData } from '~/common/constants/Constants'
import Button from '~/components/button/Button'
import CustomCheckbox from '~/components/customCheckbox/CustomCheckbox'
import Divider from '~/components/divide/Divider'
import { increment } from '~/services/counter'
import { likeAction, unLikeAction } from '~/services/like'
import './Home.scss'

const Home = () => {
    const dispatch = useDispatch();
    const customCardData = useSelector((state) => state.like.customCardData);
    const productsData = useSelector((state) => state.counter.productsData);

    // function to check active and increase like
    const handleGetActive = (id, e) => {
        const isActive = e.target.classList[0] === 'active' ? true : false;
        if (!isActive) {
            dispatch(likeAction(id));
            return;
        }
        dispatch(unLikeAction(id));
    };
    return (
        <div className="home">
            <Segment>
                <Grid centered padded>
                    <Grid.Row className='home-feature'>
                        <FeatureProduct />
                    </Grid.Row>
                    <Grid.Row className='home-card'>
                        <CardProduct data={productsData} />
                    </Grid.Row>
                    <Grid.Row>
                        <Banner data={bannerData} />
                    </Grid.Row>
                    <Grid.Row>
                        <CardProduct data={customCardData} onHandleGetActive={handleGetActive} />
                        <Banner data={customBannerData} />
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

const FeatureProduct = () => {

    return (
        <Grid container centered className='home-feature-content'>
            <Grid.Row >
                <Header as="h1" className='home-feature-title'>
                    {FeaturedProductData.name}
                </Header>
            </Grid.Row>
            <Grid.Row style={{ justifyContent: 'center', marginTop: '1rem' }}>
                <CustomCheckbox data={FeaturedProductData.gender} />
            </Grid.Row>

        </Grid>
    );
};
/**
 * List all Product
 */
const CardProduct = ({ data, onHandleGetActive }) => {
    const dispatch = useDispatch();
    useEffect(() => {

    }, [data]);
    return (
        <>
            {data.map((item) => (
                <Grid.Column key={item.id} computer={3} tablet={5} mobile={16} className={('card-product')}>
                    <Card link className={('card-product-container')}>
                        {item.readMore ? (
                            <Card.Content>
                                <Label attached="top left" size="large" className={('card-product-date')}>
                                    {item.date}
                                </Label>
                                <Label attached="top right" size="large" className={('card-product-date')}>
                                    <Rating
                                        className={('card-product-like')}
                                        icon="heart"
                                        onClick={(e) => onHandleGetActive({ id: item.id }, e)}
                                    />
                                    {String(item.like).padStart(2, '0')}
                                </Label>
                            </Card.Content>
                        ) : (
                            <Card.Content as="a" className={('card-product-content')}>
                                <Link to={`/product/${item.id}`}>
                                    <Icon name="eye" color="black" bordered />
                                </Link>
                                <Button
                                    color="youtube"
                                    className={('card-product-content-btn')}
                                    onClick={() => dispatch(increment({ id: item.id }))}
                                >
                                    <Icon name="shopping basket" />
                                </Button>
                            </Card.Content>
                        )}

                        <Image src={item.image} className={item.readMore ? ('home-picture') : ('home-image')} />
                        <Card.Description textAlign="center">
                            <Card.Header as="h4" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <Divider margin="auto" width="10%" />
                        </Card.Description>

                        <Card.Meta as="a" textAlign="center" className={item.readMore ? ('read-more') : ('price')}>
                            {item.readMore ? 'Read more' : `$${item.price}`}
                        </Card.Meta>
                        {item.readMore && (
                            <Card.Meta className={('card-product-number')}>{String(item.id).padStart(2, '0')}</Card.Meta>
                        )}
                    </Card>
                </Grid.Column>
            ))}
        </>
    );
};

/**
 * Banner Card
 */

const Banner = ({ data }) => {

    return (
        <>
            {data.map((item) => (
                <Grid.Column
                    key={item.id}
                    computer={item.width}
                    mobile={16}
                    className={item.active ? '' : ('border-left')}
                >
                    <Card link className={('homepage-banner')}>
                        <CardContent className={('homepage-banner-content')}>
                            <Card.Header
                                as="h1"
                                className={('homepage-banner-number')}
                                content={String(item.id).padStart(2, '0')}
                            ></Card.Header>
                            <Card.Description className={('homepage-banner-description')}>
                                <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
                                <Divider width="2rem" margin="30px 0" />
                                <Button name={item.button} color="red" icon="angle right">{item.button}</Button>
                            </Card.Description>
                            <Card.Description className={('homepage-banner-elements')}>
                                {/* {item.active && (
                                    <Button
                                        icon="angle left"
                                        fontSize={mobile ? '1rem' : '2rem'}
                                        width={mobile ? '30px' : '50px'}
                                        height={mobile ? '30px' : '50px'}
                                        margin={mobile ? '5rem auto 0' : '12rem auto 0'}
                                    />
                                )} */}
                                <Card.Content>
                                    <Image src={item.image} />
                                    {item.active && (
                                        <div>
                                            <Card.Description textAlign="center">
                                                <Header as='h3'>
                                                    <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                                </Header>
                                                {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    {normalDivider}
                                                    {activeDiver}
                                                    {normalDivider}
                                                </div> */}
                                            </Card.Description>

                                            <Card.Meta textAlign="center" className={('price')}>
                                                ${item.price}
                                            </Card.Meta>
                                        </div>
                                    )}
                                </Card.Content>

                                {/* {item.active && (
                                    <Button
                                        icon="angle right"
                                        fontSize={mobile ? '1rem' : '2rem'}
                                        width={mobile ? '30px' : '50px'}
                                        height={mobile ? '30px' : '50px'}
                                        color="red"
                                        margin={mobile ? '5rem auto 0' : '12rem auto 0'}
                                    />
                                )} */}
                            </Card.Description>
                        </CardContent>
                    </Card>
                </Grid.Column>
            ))}
        </>
    );
};

export default Home