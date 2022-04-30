const Reader = require("./../../lib/utils/Reader")

describe("Test for Reader", () => {
    test("1) Read JSON", () => {
        const data = Reader.readJsonFile("test/data/visualpartners.test.json")
        expect(data.lenght).not.toBe(0)
    })
})