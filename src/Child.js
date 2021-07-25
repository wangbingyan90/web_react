import React from 'react'
import style from './Child.module.scss'

export default function child() {
    return (
        <div>
            <ul>
            <li className = {style.item}>
                child-111
            </li>
            </ul>
        </div>
    );
}