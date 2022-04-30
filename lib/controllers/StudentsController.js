const StudentsService = require("./../../lib/services/StudentServices")
const Reader = require("./../../lib/utils/Reader")

class StudentController {
    static getAllStudentsWithAllFields(){
        const students = Reader.readJsonFile("lib/data/visualpartners.json")
        return StudentsService.getAllStudents(students)
    }
}


module.exports = StudentController