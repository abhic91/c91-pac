import React from 'react';
import MatButton from '@mui/material/Button';



export default function Button(props){
    return <MatButton {...props}>{props.children}</MatButton>
}