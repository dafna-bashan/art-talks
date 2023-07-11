import React from 'react'
import { PaintingPreview } from './PaintingPreview'

export function PaintingsList({ paintings }) {
    return (
        <div className='paintings-list flex align-center justify-center'>
            {paintings.map(painting => <PaintingPreview key={painting._id} painting={painting} />)}
        </div>
    )
}
