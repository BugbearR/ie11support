import RadioNodeList_setValue from "../src/RadioNodeList_setValue";
import { expect, test } from '@jest/globals';

test("No record.", () => {
    const list = [];
    RadioNodeList_setValue(list, "a");
    expect(list).toStrictEqual([]);
});

test("No match 0", () => {
    const list = [
        { checked: true, value: "x" },
        { checked: false, value: "y" }
    ];
    RadioNodeList_setValue(list, "a");
    expect(list).toStrictEqual([
        { checked: false, value: "x" },
        { checked: false, value: "y" }
    ]);
});

test("No match 1", () => {
    const list = [
        { checked: false, value: "x" },
        { checked: true, value: "y" }
    ];
    RadioNodeList_setValue(list, "a");
    expect(list).toStrictEqual([
        { checked: false, value: "x" },
        { checked: false, value: "y" }
    ]);
});

test("match 0", () => {
    const list = [
        { checked: false, value: "a" },
        { checked: true, value: "b" }
    ];
    RadioNodeList_setValue(list, "a");
    expect(list).toStrictEqual([
        { checked: true, value: "a" },
        { checked: false, value: "b" }
    ]);
});

test("match 1", () => {
    const list = [
        { checked: true, value: "a" },
        { checked: false, value: "b" }
    ];
    RadioNodeList_setValue(list, "b");
    expect(list).toStrictEqual([
        { checked: false, value: "a" },
        { checked: true, value: "b" }
    ]);
});


