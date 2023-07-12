import React, { useEffect, useState } from 'react'
import { loadItem, updateItem } from '../store/actions/itemActions'
import { socketService, SOCKET_EMIT_SEND_MSG, SOCKET_EVENT_ADD_MSG } from '../services/socketService'
import { useDispatch } from 'react-redux'
import { utilService } from '../services/utilService'
import { MsgList } from './MsgList'
import { AddMsg } from './AddMsg'

export function Chat({ currPainting }) {

    const [msg, setMsg] = useState({ txt: '' })
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(currPainting);
        socketService.on(SOCKET_EVENT_ADD_MSG, (paintingId) => {
            dispatch(loadItem(paintingId))
        })

        return () => {
            socketService.off(SOCKET_EVENT_ADD_MSG)
        }
    }, [])


    function handleChange(ev) {
        const { name, value } = ev.target
        setMsg(prevMsg => ({ ...prevMsg, [name]: value }))
    }

    function sendMsg(ev) {
        ev.preventDefault()
        socketService.emit(SOCKET_EMIT_SEND_MSG, { paintingId: currPainting._id, msg: msg.txt })
        addMsg(msg)
        setMsg({ txt: '' })
    }

    function addMsg(msg) {
        const updatedPainting = { ...currPainting }
        const newMsg = {
            ...msg,
            _id: utilService.makeId(),
            from: sessionStorage.getItem('loggedinUser') || 'Guest',
            sent: Date.now()
        }
        updatedPainting.chatMsgs.push(newMsg)
        // console.log(updatedChat);
        dispatch(updateItem(updatedPainting))
    }

    return (
        // <div>Chat is in development... </div>
        <div className="chat flex full">
                <div className="chat-container flex column full">
                    <div className="title">Chat</div>
                    <MsgList msgs={currPainting.chatMsgs} />
                    <AddMsg msg={msg} handleChange={handleChange} sendMsg={sendMsg} />
                </div>
        </div>
    )


}
