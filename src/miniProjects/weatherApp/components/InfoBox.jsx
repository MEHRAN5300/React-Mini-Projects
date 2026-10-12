import React from 'react'

const InfoBox = ({icon, title, value, unit}) => {
  return (
    <div className="info-box">
        <span>{icon ?? '💧' } {title ?? ''}</span>
        <strong>{ value ?? '--' } {unit ?? ''}</strong>
    </div>
  )
}

export default InfoBox