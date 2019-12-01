import React from 'react';

export default ((props) => (
    <html>
        <head>
            <meta name="viewport" content="width=device-width, inital-scale=1.0"/>
            <title>{`${(props.title) ? props.title + " | " : ""}Ronin-React-View`}</title>
        </head>
        <body>
            {props.children}
        </body>
    </html>
));
