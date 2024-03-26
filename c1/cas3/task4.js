

const{ read, write } = require("./task4b");

const getAllStudents = async() => {
    return await read();
}

const getSingleStudent = async(id) => {
    const students = await read();
    return students.find((singleStudent) => singleStudent.id === id);
}



const addNewStudent = async(newStudentData) => {
    let students = await read(); 
    students.push(newStudentData); 
    await write(students); 
}


const deleteStudent = async(studentId) => {
    let students = await read();
    
    students = students.filter((student) => student.id !== studentId);
    await write(students);
}


const editStudent = async(studentId, studentNewData) => {
    let students = await read();
    students = students.map((student) =>{
        if(student.id === studentId){
            return {
                ...student,
                ...studentNewData,
            };
        }
        return student;
    });
    await write(students);
};

module.exports = {
    getAllStudents,
    getSingleStudent,
    addNewStudent,
    deleteStudent,
    editStudent
}