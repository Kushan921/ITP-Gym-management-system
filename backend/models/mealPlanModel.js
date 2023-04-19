const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealPlanSchema = new Schema({
    empId : {
        type : String,
        required: false
    },
    empName: {
        type: String,
        required: true
    },
    age : {
        type : Number,
        required: true
    },
    gender: {
        type : String,
        required: true
    },
    weight: {
        type : String,
        required: true
    },
    meals : {
        type : String,
        required: true
    }
   
})

//meal plan table and path
const MealPlan = mongoose.model("mealPlan",MealPlanSchema);
module.exports = MealPlan;