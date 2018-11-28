const database = require('./database-connection')

module.exports = {
    listAll(){
        return database('students')
    },
    getById(id){
        return database('students').where('id', id)
    },
    getById2(id){
        return database('students').where({ id : id}).first()
    },
    createStudent(newStudent){
        return database('students').insert(newStudent).returning('*')
    }
}