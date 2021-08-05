import React from 'react';
import TextInput from './components/TextInput';

export default function Field(props) {
    const {dataType} = props;
    return (
        <>
           {dataType === "String" && <TextInput {...props} />} 
        </>
    )
}
