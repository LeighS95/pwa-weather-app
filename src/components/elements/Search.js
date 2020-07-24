import React from 'react';
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = React.memo(({ onClick, onKeyPress, onChange, value }) => {
    console.log(value)
    return (
        <div style={{ margin: '40px 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Input onKeyPress={onKeyPress} onChange={onChange} value={value} placeholder="Search ..." />
            <div onClick={onClick}><SearchIcon /></div>
        </div>
    )
})

export default Search;