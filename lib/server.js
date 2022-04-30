const express = require("express");
const StudentsController = require("./controllers/StudentsController");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/v1/students", (request, response) => {
    const students = StudentsController.getAllStudentsWithAllFields();
    response.json(students);
});

app.get("/v1/students/emails", (request, response) => {
    const emails = StudentsController.getAllEmailsWithCertification();
    response.json(emails);
});

app.get("/v1/students/credits/:credits", (request, response) => {
    const credits = request.params.credits;
    const students = StudentsController.getAllStudentsWithCreditsGreaterThan(credits);
    response.json(students);
});

app.listen(port, () => {
    console.log(`Code Challenge is running in ${port}`);
});