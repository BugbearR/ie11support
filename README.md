# IE11 support library

## RadioNodeList.value
see https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList/value
- RadioNodeList_setValue(list, value);
- RadioNodeList_getValue(list);

IE11 returns HTMLCollection, not RadioNodeList.

Another way
- document.querySelector('input\[name=radioname\]:checked').value
  - from https://stackoverflow.com/questions/26677674/how-to-get-radionodelist-value-in-internet-explorer-11/31063141
