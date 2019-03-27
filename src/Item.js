import React, { memo } from 'react';

const Item = ({ item, onChangeItem, style }) => (
    <div style={ style }>
        <input key={ item.id } onChange={ (e) => onChangeItem(item.id, e.target.value) } value={ item.value } />
    </div>
);

// Memoize the component for performance, only re-rendering if the props change
export default memo(Item);
