import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadItems } from '../store/actions/itemActions'
import { PaintingsList } from '../cmps/PaintingsList'
import { PaintingFilter } from '../cmps/PaintingFilter'

export function MainApp() {

  const items = useSelector(state => state.itemModule.items)
  const dispatch = useDispatch()
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    dispatch(loadItems(filterBy))
  }, [filterBy])

  function onSetFilter(newFilterBy) {
    setFilterBy(newFilterBy)
  }
  return (
    <div className='main-app'>
      {/* {items.length && <div>{JSON.stringify(items)}</div>} */}
      <PaintingFilter filterBy={filterBy} onSetFilter={onSetFilter} />
      <PaintingsList paintings={items} />
    </div>
  )
}
