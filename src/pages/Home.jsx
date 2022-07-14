import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, Grid, Header, Icon, Image, Label, Rating, Segment } from 'semantic-ui-react'
import { customCardData, FeaturedProductData, productsData } from '~/common/constants/Constants'
import CustomCheckbox from '~/components/customCheckbox/CustomCheckbox'
import Divider from '~/components/divide/Divider'
import { increment } from '~/services/counter'
import './Home.scss'

const Home = () => {
    return (
        <div style={{ height: '1000px' }} className="home">
            <Segment>
                <Grid centered padded>
                    <Grid.Row className='home-feature'>
                        <FeatureProduct />
                    </Grid.Row>
                    <Grid.Row className='home-card'>
                        <CardProduct data={productsData} />
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
// List all Product
const CardProduct = ({ data, onHandleGetActive }) => {
    const dispatch = useDispatch();
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

export default Home