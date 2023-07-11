// import { storageService } from './asyncStorageService';
import { httpService } from './httpService';

export const itemService = {
    query,
    getById,
    add,
    remove,
    update
};

window.itemService = itemService;


function query(filterBy) {
    // return storageService.query('item')
    return httpService.get(`item?filterBy=${encodeURIComponent(filterBy)}`);
}

function getById(itemId) {
    // return storageService.get('item', itemId)
    return httpService.get(`item/${itemId}`);
}

function add(item) {
    // return storageService.post('item')
    return httpService.post(`item`, item);
}

function remove(itemId) {
    // return storageService.remove('item', itemId)
    return httpService.delete(`item/${itemId}`);
}

async function update(item) {
    // const updatedChat = await storageService.put('item', item)
    return httpService.put(`item/${item._id}`, item);
}


