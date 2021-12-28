import React from 'react';
import Button from '@mui/material/Button';


export default function CButton(props){
    return <Button {...props}>{props.children}</Button>
}