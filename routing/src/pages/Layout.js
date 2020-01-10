import React from 'react';
import {Link} from "react-router-dom";
import * as path from '../constants/routes';

const Layout = props => {
    return (
        <div>
            <aside>
                <ul>
                    <li>
                        <Link to={path.HOME}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={path.ABOUT}>
                            About
                        </Link>
                    </li>
                </ul>
            </aside>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;