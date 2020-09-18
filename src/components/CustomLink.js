import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
export default function CustomLink(props) {
    return (
        <Link to={props.to}>
            <Button  color="inherit">
                {props.children}
            </Button>
        </Link>

    )
}
