import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'semantic-ui-react'

const Breadcrumbs = ({ data }) => {
    return (
        <Breadcrumb size='large'>
            {data.map((item, index) => (
                <>
                    < Breadcrumb.Section className={item.active && 'breadcrumbActive'} link >
                        <Link to={`${item?.path}`}><div dangerouslySetInnerHTML={{ __html: item?.content }}></div></Link>
                    </Breadcrumb.Section >
                    {item.link && (<Breadcrumb.Divider icon={'right angle'} />)}
                </>
            ))}
        </Breadcrumb>
    )
}

export default Breadcrumbs