import React from 'react';
import { Link } from 'react-router-dom';

const TramsAndCondition = () => {
    return (
        <div>
            <h4>Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.</h4>
            <h1><Link to='/register'>Register</Link></h1>
        </div>
    );
};

export default TramsAndCondition;