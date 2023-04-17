const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalarySchema = new Schema({
    employee_id : {
        type : String,
        required: true
    },
    employee_name : {
        type : String,
        required: true
    },
    basic_salary : {
        type : String,
        required : true
    },
    allowance : {
        type : String,
        required : true
    },
    paid_date : {
        type: String,
        required: true
    }

})

//salary table and path
const Salary = mongoose.model("salary",SalarySchema);
module.exports = Salary;