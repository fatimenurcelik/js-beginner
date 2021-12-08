import { users } from "../data/users.js";
import DataError from "../models/dataError.js"

export default class employeeService{
    constructor(LoggerService){
        this.LoggerService = LoggerService
        this.employees = []
        this.errors = []
    }

    load(){
        this.employees = users.filter((user)=> user.type ===  "employee")
    }

    checkEmployeeValidity(employee){
        let requiredFields = "id firstName lastName city age salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!employee[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`, employee))
            }
        }
        return hasErrors
    }

    add(employee){
        if (!this.checkEmployeeValidity(employee)) {
            this.employees.push(employee)
        }
    }
    listEmployees(){
        //not update
        var result ="";
        var temp;
        for (let index = 0; index < this.employees.length ; index++) {
           temp = this.employees[index].firstName + " "+ this.employees[index].lastName ;
           result += temp +"\n"
           temp=""
        }
        return result
    }
    getEmployeerById(id){
        return this.employees.find( employee => employee.id === id )
    }
    getEmployeeSorted(){
        return this.employees.sort((employee1,employee2) =>{
            if (employee1.firstName > employee2.firstName) {
                return 1
            }else if (employee1.firstName === employee2.firstName) {
                return 0 
            }else{
                return -1
            }
        })
    }
}