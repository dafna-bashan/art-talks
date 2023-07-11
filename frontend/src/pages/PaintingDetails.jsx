import React, { useEffect } from 'react'
import { loadItem } from '../store/actions/itemActions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Chat } from '../cmps/Chat'

export function PaintingDetails() {

    const params = useParams()
    const painting = useSelector(state => state.itemModule.currItem)
    const dispatch = useDispatch()

    const { title, artist } = painting
    useEffect(() => {
        console.log((params.id))
        dispatch(loadItem(params.id))
    }, [])

    if (!painting) return <div>loading...</div>
    return (
        <div className="paiting-details flex column">
            <div className="title">{title} <span>by {artist}</span></div>
            <div className="flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" alt={title} />
                <Chat currPainting={painting} />
            </div>
        </div>
    )
}
