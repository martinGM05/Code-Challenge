const StudentsService = require("./../../lib/services/StudentServices");
const Reader = require("./../../lib/utils/Reader");

class StudentController {
    static getAllStudentsWithAllFields(){
        const students = Reader.readJsonFile("lib/data/visualpartners.json");
        return StudentsService.getAllStudents(students);
    }

    static getAllEmailsWithCertification(){
        const students = Reader.readJsonFile("lib/data/visualpartners.json");
        return StudentsService.getAllEmailsWithCertification(students);
    }

    static getAllStudentsWithCreditsGreaterThan(credits){
        const students = Reader.readJsonFile("lib/data/visualpartners.json");
        return StudentsService.getAllStudentsWithCreditsGreaterThan(students, credits);
    }
}


module.exports = StudentController;