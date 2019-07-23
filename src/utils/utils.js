/*eslint-disable */
import store from '../store/store';

export function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}

export function dispatch(action) {
    if (action.type) {
        return store.dispatch(action);
    }
    return store.dispatch(action);
}

export function keys(object, callback) {
    const objKeys = Object.keys(object);
    objKeys.forEach(key => callback(key));
  }
  
  export function contains(arr, item) {
    return arr.indexOf(item) > -1;
  }
  
  export function getRealPathName() {
    const loc = window.location || {};
    if (process.env.IS_ELECTRON) {
      return loc.hash.substring(1);
    }
    return loc.pathname;
  }
  
export const sortDate = (date) => {
    const sortedDate = date.sort((a,b) => {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        const result = dateB - dateA;
        return result;
    });
    return sortedDate;
}