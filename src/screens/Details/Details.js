import React from 'react';
import DetailedTwitt from '../../components/DetailedTwitt';

export const Details = (props) => {
    return <DetailedTwitt {...props.route.params} />;
};