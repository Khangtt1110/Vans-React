import React from 'react';
import './Contact.scss'
import { List, Icon, Button, Input } from 'semantic-ui-react';


const Contact = ({ data }) => {
    return (
        <List className='contact'>
            <List.Content className='contact-container'>{data.title}</List.Content>
            {data.children ? (
                <>
                    {data.children.map((item) => (
                        <Button key={item.name} icon circular className={'margin-right'}>
                            <Icon name={item.icon} />
                        </Button>
                    ))}
                </>
            ) : data.description ? (
                <>
                    <List.Description className='contact-description'>{data.description}</List.Description>
                    <Input
                        fluid
                        action={{ icon: 'send', color: 'youtube' }}
                        placeholder="ENTER YOUR E-MAIL ADDRESS"
                        className='contact-input'
                    />
                </>
            ) : (
                <>
                    {data.content.map((item) => (
                        <List.Description key={item} className='contact-description'>
                            {item}
                        </List.Description>
                    ))}
                </>
            )}
        </List>
    );
};

export default Contact;
