class Students{
    static getAllStudents(students){
        return students;
    }

    static getAllEmailsWithCertification(students){
        const studentsWhitCertification = students.filter((student) => student.haveCertification === true);
        return studentsWhitCertification.map((student) => student.email);
    }
    
    static getAllStudentsWithCreditsGreaterThan(students, credits){
        const studentsWhitCredits = students.filter((student) => student.credits > credits);
        return studentsWhitCredits;
    }
}

module.exports = Students;