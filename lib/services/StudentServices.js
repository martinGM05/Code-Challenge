class Students{
    static getAllStudents(students){
        return students;
    }

    static getAllEmailsWithCertification(students){
        const studentsWhitCertification = students.filter((student) => student.haveCertification === true)
        return studentsWhitCertification.map((student) => student.email)
    }
}

module.exports = Students