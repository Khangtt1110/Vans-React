import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, Divider, Grid, Header, Icon, Image, Label, Rating, Segment } from 'semantic-ui-react'
import { FeaturedProductData, productsData } from '~/common/constants/Constants'
import CustomCheckbox from '~/components/customCheckbox/CustomCheckbox'
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
                    <Grid.Row>
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

const CardProduct = ({ data, onHandleGetActive }) => {
    const dispatch = useDispatch();
    return (
        <>
            {data.map((item) => (
                <Grid.Column key={item.id} computer={3} tablet={5} mobile={16} className={('wrapper')}>
                    <Card link className={('container')}>
                        {item.readMore ? (
                            <Card.Content>
                                <Label attached="top left" size="large" className={('background-none')}>
                                    {item.date}
                                </Label>
                                <Label attached="top right" size="large" className={('background-none')}>
                                    <Rating
                                        className={('like-number')}
                                        icon="heart"
                                        onClick={(e) => onHandleGetActive({ id: item.id }, e)}
                                    />
                                    {String(item.like).padStart(2, '0')}
                                </Label>
                            </Card.Content>
                        ) : (
                            <Card.Content as="a" className={('card')}>
                                <Link to={`/product/${item.id}`}>
                                    <Icon name="eye" color="black" bordered />
                                </Link>
                                <Button
                                    color="youtube"
                                    className={('card-btn')}
                                    onClick={() => dispatch(increment({ id: item.id }))}
                                >
                                    <Icon name="shopping basket" />
                                </Button>
                            </Card.Content>
                        )}

                        <Image src={item.image} className={item.readMore ? ('picture') : ('image')} />
                        <Card.Description textAlign="center">
                            <Card.Header as="h5" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <Divider margin="auto" width="10%" />
                        </Card.Description>

                        <Card.Meta as="a" textAlign="center" className={item.readMore ? ('read-more') : ('price')}>
                            {item.readMore ? 'Read more' : `$${item.price}`}
                        </Card.Meta>
                        {item.readMore && (
                            <Card.Meta className={('number')}>{String(item.id).padStart(2, '0')}</Card.Meta>
                        )}
                    </Card>
                </Grid.Column>
            ))}
        </>
    );
};

export default Home