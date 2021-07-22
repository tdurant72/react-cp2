import React from 'react'
import './Section.css'
export default function Section({ title, maxWidth }) {
    return (
        <div className="section">
            {title && <h2 className="section__title">{title}</h2>}
        </div>
    )
}
