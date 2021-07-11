import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(){
    return (
        <div>
            output from parent component
            <ChildComponent/>
        </div>
    )
}

export default ParentComponent