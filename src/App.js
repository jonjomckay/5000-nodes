import React, { Component } from 'react';
import { AutoSizer, List } from 'react-virtualized';
import update from 'immutability-helper';
import Item from './Item';

class App extends Component {
    state = {
        // Create the default item set (JS has no "range" function)
        items: Array(5000).fill(1).map((_, i) => {
            return {
                id: i,
                value: 'Item ' + i
            };
        })
    };

    onChangeItem = (id, value) => {
        this.setState({
            // "Update" only the item we want to change the value for
            items: update(this.state.items, {
                [id]: {
                    value: {
                        $set: value
                    }
                }
            })
        });
    };

    renderRow = ({ index, key, style }) => {
        return <Item item={ this.state.items[index] } key={ key } onChangeItem={ this.onChangeItem } style={ style } />
    };

    render() {
        return (
            <div style={{ height: '100vh' }}>
                <AutoSizer>
                    { ({ height, width }) => (
                        // Create a virtualized list, rendering 30 rows around our visible window
                        <List
                            width={ width }
                            height={ height }
                            overscanRowCount={ 30 }
                            rowCount={ this.state.items.length }
                            rowHeight={ 20 }
                            rowRenderer={ (row) => this.renderRow(row) }
                        />
                    ) }
                </AutoSizer>
            </div>
        )
    }
}

export default App;
