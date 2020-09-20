/**
 * Set value to RadioNodeList 
 * @param {*} list 
 * @param {string} value
 * @see https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList/value
 */
export default function RadioNodeList_setValue(list: any, value: string): void {
    for (var i = 0; i < list.length; i++) {
        list[i].checked = (list[i].value === value);
    }
}
