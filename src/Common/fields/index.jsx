import React from 'react';

import Input from './input'
import Radio from './radio'
import Password from './password'

const Elements = ({data: {name, title, type}}) => {
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
            />);
        case 'pass' :
            return (<Password

                nameField={name}
                titleField={title}
            />);

        default:
            return null
    }
};

export {Elements};