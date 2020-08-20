/**
 * Get value from RadioNodeList 
 * @param {RadioNodeList} list 
 * @return value (if no checked item, returns empty string);
 * @see https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList/value
 */
export default function RadioNodeList_getValue(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            return list[i].value;
        }
    }
    return "";
}
