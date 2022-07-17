import React from 'react';

import Input from './input'
import Radio from './radio'
import Password from './password'

const Elements = ({data: {name, title, type , option}}) => {
    switch (type) {
        case 'text':
            return (<Input
                nameField={name}
                titleField={title}
            />);
        case 'radio' :
            return (<Radio
                nameField={name}
                titleField={title}
                optionField={}

            />);
        case 'pass' :
            return (<Password/>);

        default:
            return null
    }
};

export {Elements};