const StudentsController = require("./../../lib/controllers/StudentsController")

describe("Test for StudentsController", () => {
    test("1) Get all Students with all fields", () => {
        const students = StudentsController.getAllStudentsWithAllFields()
        expect(students.length).toBe(51)
    })
    test("2) Get all emails with certification", () => {
        const students = StudentsController.getAllEmailsWithCertification()
        expect(students.length).toBe(29)
    })
})