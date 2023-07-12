import React, { useEffect } from 'react'
import { loadItem } from '../store/actions/itemActions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Chat } from '../cmps/Chat'

export function PaintingDetails() {

    const params = useParams()
    const painting = useSelector(state => state.itemModule.currItem)
    const dispatch = useDispatch()

    const { title, artist, imageUrl } = painting
    useEffect(() => {
        console.log((params.id))
        dispatch(loadItem(params.id))
    }, [])

    if (!painting) return <div>loading...</div>
    return (
        <div className="painting-details flex column">
            <div className="paint-title">{title} <span>by {artist}</span></div>
            <div className="main flex">
                <img src={imageUrl} alt={title} />
                <Chat currPainting={painting} />
            </div>
        </div>
    )
}
