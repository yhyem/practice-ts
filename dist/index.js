"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./input");
const Main = async () => {
    console.log("학생 관리 프로그램에 오신 여러분들 환영합니다");
    console.log(`
  1. Create a new student
  2. List all students
  3. Get a student by id
  4. Update a student
  5. Delete a student
  6. Exit `);
    let option = await (0, input_1.input)("Select an option: ");
    let student = [];
    while (option !== "6") {
        switch (option) {
            case "1": {
                const name = await (0, input_1.input)("이름을 입력해주세요: ");
                const age = await (0, input_1.input)("나이를 입력해주세요: ");
                const newStudent = {
                    id: student.length + 1,
                    name: name,
                    age: +age,
                };
                student.push(newStudent);
                console.log(newStudent);
                option = await (0, input_1.input)("Select an option: ");
                break;
            }
            case "2": {
                console.log(student);
                option = await (0, input_1.input)("Select an option: ");
                break;
            }
            case "3": {
                const selectId = await (0, input_1.input)("Select Find Id: ");
                const findArray = student.filter((data) => data.id == Number(selectId));
                console.log(findArray);
                option = await (0, input_1.input)("Select an option: ");
                break;
            }
            case "4": {
                const newId = await (0, input_1.input)("아이디를 입력해주세요: ");
                const newName = await (0, input_1.input)("이름을 입력해주세요: ");
                const newAge = await (0, input_1.input)("나이를 입력해주세요: ");
                student.find((data) => {
                    if (data.id === Number(newId)) {
                        data.name = newName;
                        data.age = +newAge;
                    }
                });
                console.log(student);
                option = await (0, input_1.input)("Select an option: ");
                break;
            }
            case "5": {
                const selectId = await (0, input_1.input)("Select Deleted Id: ");
                const changeArray = student.filter((data) => data.id !== Number(selectId));
                student = changeArray;
                console.log(student);
                option = await (0, input_1.input)("Select an option: ");
                break;
            }
        }
    }
};
Main();
