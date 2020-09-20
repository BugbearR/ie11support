import RadioNodeList_getValue from "../src/RadioNodeList_getValue";
import { expect, test } from '@jest/globals';

test("No record.", () => {
    expect(RadioNodeList_getValue([])).toBe("");
});

test("No checked.", () => {
    expect(RadioNodeList_getValue([
        { checked: false, value: "Hello" },
        { checked: false, value: "World" }
    ])).toBe("");
});

test("checked 0", () => {
    expect(RadioNodeList_getValue([
        { checked: true, value: "a" },
        { checked: false, value: "b" },
        { checked: false, value: "c" }
    ])).toBe("a");
});

test("checked 1", () => {
    expect(RadioNodeList_getValue([
        { checked: false, value: "a" },
        { checked: true, value: "b" },
        { checked: false, value: "c" }
    ])).toBe("b");
});

test("checked 2", () => {
    expect(RadioNodeList_getValue([
        { checked: false, value: "a" },
        { checked: false, value: "b" },
        { checked: true, value: "c" }
    ])).toBe("c");
});
