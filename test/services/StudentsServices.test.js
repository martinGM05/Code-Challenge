const StudentsServices = require("./../../lib/services/StudentServices");
const Reader = require("./../../lib/utils/Reader");

describe("Test for StudentsServices", () => {
    test("1) Return a list of students with all their fields", () => {
        const students = Reader.readJsonFile("test/data/visualpartners.test.json");
        const result = StudentsServices.getAllStudents(students);
        expect(result.length).toBe(3);
    });
    test("2) Return a list of emails with certification", () => {
        const students = Reader.readJsonFile("test/data/visualpartners.test.json");
        const result = StudentsServices.getAllEmailsWithCertification(students);
        expect(result.length).toBe(2);
    });
    test("3) Return a list of students when their credits are greater than credit of the params ", () => {
        const students = Reader.readJsonFile("test/data/visualpartners.test.json");
        const result = StudentsServices.getAllStudentsWithCreditsGreaterThan(students, 500);
        expect(result.length).toBe(2);
    });
});
