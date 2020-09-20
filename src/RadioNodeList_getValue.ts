/**
 * Get value from RadioNodeList 
 * @param {*} list 
 * @return {string} value (if no checked item, returns empty string);
 * @see https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList/value
 */
export default function RadioNodeList_getValue(list: any): string {
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            return list[i].value;
        }
    }
    return "";
}
