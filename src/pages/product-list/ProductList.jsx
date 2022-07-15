import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { allProduct } from '~/common/constants/Constants'
import { CardProduct, FeatureProduct } from '../home/Home'

const ProductList = () => {
    return (
        <div className='product-list'>
            <Segment>
                <Grid centered padded>
                    <Grid.Row style={{ marginTop: '4rem' }}>
                        <FeatureProduct />
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '4rem' }}>
                        <CardProduct data={allProduct.Shoes} />
                    </Grid.Row>
                </Grid>
            </Segment>
        </div >
    )
}

export default ProductList