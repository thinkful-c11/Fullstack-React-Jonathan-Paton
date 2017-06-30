import React from 'react';

export function CheeseList(props) {
    const cheeses = props.cheeses.map((cheese, index) =>
        <li key={index}>
            {cheese}
        </li>
    );

    return (
        <ul className='cheese-list'>
            {cheeses}
        </ul>
    )
}