import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadItems } from '../store/actions/itemActions'

export function MainApp() {

  const items = useSelector(state => state.itemModule.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadItems())
  }, [])

  return (
    <div className='main-app'>
      {items.length && <div>{JSON.stringify(items)}</div>}
    </div>
  )
}
