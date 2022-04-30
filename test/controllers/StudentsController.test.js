const StudentsController = require("./../../lib/controllers/StudentsController")

describe("Test for StudentsController", () => {
    test("1) Get all Students with all fields", () => {
        const students = StudentsController.getAllStudentsWithAllFields()
        expect(students.length).toBe(51)
    })
})