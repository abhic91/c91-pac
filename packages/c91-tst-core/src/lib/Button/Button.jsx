import React from 'react';
import MButton from '@mui/material/Button';



export default function Button(props){
    return <MButton {...props}>{props.children}</MButton>
}