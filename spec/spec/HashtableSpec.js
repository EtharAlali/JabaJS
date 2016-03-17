describe("When supplying variant querystring to hashtable", function () {
    it("Hashtable must parse string", function () {
        var hashTable = new StringDictionary("v=1&d=2");

        expect(hashTable.item("v")).toBe("1");
    });

    it("Hashtable must return value of item", function () {
        var hashTable = new StringDictionary("v=1&d=2");

        expect(hashTable.item("v")).toBe("1");
    });

    it("Hashtable must return value of another item when referenced", function () {
        var hashTable = new StringDictionary("v=1&d=2");

        expect(hashTable.item("d")).toBe("2");
    });

    it("Hashtable must return null when an item does not exist", function () {
        var hashTable = new StringDictionary("v=1&d=2");

        expect(hashTable.item("m")).toBe(null);
    });
});
