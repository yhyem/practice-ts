import { input } from "./input";

const main = async () => {
  type Student = {
    id: number;
    name: string;
    age: number;
  };

  console.log("학생 관리 프로그램에 오신 여러분들 환영합니다");
  console.log(`
  1. Create a new student
  2. List all students
  3. Get a student by id
  4. Update a student
  5. Delete a student
  6. Exit `);

  let option = await input("Select an option: ");

  let student: Array<Student> = [];

  while (option !== "6") {
    switch (option) {
      case "1": {
        const name = await input("이름을 입력해주세요: ");
        const age = await input("나이를 입력해주세요: ");

        const newStudent: Student = {
          id: student.length + 1,
          name: name,
          age: +age,
        };

        student.push(newStudent);
        console.log(newStudent);
        option = await input("Select an option: ");

        break;
      }
      case "2": {
        console.log(student);
        option = await input("Select an option: ");

        break;
      }
      case "3": {
        const selectId = await input("Select Find Id: ");
        const findStudent = student.find((data) => data.id == Number(selectId));

        console.log(findStudent);

        option = await input("Select an option: ");

        break;
      }
      case "4": {
        const FindId = await input("아이디를 입력해주세요: ");
        const newName = await input("이름을 입력해주세요: ");
        const newAge = await input("나이를 입력해주세요: ");

        student.find((data) => {
          if (data.id === Number(FindId)) {
            data.name = newName;
            data.age = +newAge;
          }
        });

        console.log(student);

        option = await input("Select an option: ");

        break;
      }
      case "5": {
        const selectId = await input("Select Deleted Id: ");

        const newArray = student.filter((data) => data.id !== Number(selectId));

        student = newArray;
        console.log(student);

        option = await input("Select an option: ");

        break;
      }
    }
  }
};

main();
