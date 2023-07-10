import { itemService } from '../../services/itemService'


export function loadItems() {
  return async dispatch => {
    try {
      console.log('load items');
      dispatch({ type: 'LOADING_START' })
      const items = await itemService.query()
      dispatch({ type: 'SET_ITEMS', items })
      return items
    } catch (err) {
      console.log('ItemActions: err in loadItems', err)
    } finally {
      dispatch({ type: 'LOADING_DONE' })
    }
  }
}

export function loadItem(itemId) {
  return async dispatch => {
    try {
      dispatch({ type: 'LOADING_START' })
      const item = await itemService.getById(itemId)
      dispatch({ type: 'SET_ITEM', item })
      return item
    } catch (err) {
      console.log('ItemActions: err in loadItem', err)
    } finally {
      dispatch({ type: 'LOADING_DONE' })
    }
  }
}

export function addItem(item) {
  return async dispatch => {
    try {
      dispatch({ type: 'LOADING_START' })
      const newItem = await itemService.add(item)
      dispatch({ type: 'ADD_ITEM', item: newItem })
      return newItem
    } catch (err) {
      console.log('ItemActions: err in addItem', err)
    } finally {
      dispatch({ type: 'LOADING_DONE' })
    }
  }
}

export function removeItem(itemId) {
  return async dispatch => {
    try {
      await itemService.remove(itemId)
      dispatch({ type: 'REMOVE_ITEM', itemId })
    } catch (err) {
      console.log('ItemActions: err in removeItem', err)
    }
  }
}

export function updateItem(item) {
  return async dispatch => {
    try {
      dispatch({ type: 'LOADING_START' })
      const updatedItem = await itemService.update(item)
      dispatch({ type: 'UPDATE_ITEM', item: updatedItem })
      return updatedItem
    } catch (err) {
      console.log('ItemActions: err in updateItem', err)
    }
    finally {
      dispatch({ type: 'LOADING_DONE' })
    }
  }
}
