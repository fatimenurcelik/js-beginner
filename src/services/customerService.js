import { users } from "../data/users.js";
import DataError from "../models/dataError.js"

export default class customerService{
    constructor(LoggerService){
        this.LoggerService = LoggerService
        this.customers = []
        this.errors = []
    }

    load(){
        this.customers = users.filter((user)=> user.type ===  "customer")
    }

    checkCustomerValidity(customer){
        let requiredFields = "id firstName lastName city age creditCardNumber".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!customer[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`, customer))
            }
        }
        return hasErrors
    }

    add(customer){
        if (!this.checkCustomerValidity(customer)) {
            this.customers.push(customer)
        }
    }
    listCustomers(){
         //not update
        var result ="";
        var temp;
        for (let index = 0; index < this.customers.length ; index++) {
            temp = this.customers[index].firstName + " "+ this.customers[index].lastName ;
            result += temp +"\n"
            temp=""
        }
        return result
    }
    getCustomerById(id){
        return this.customers.find( customer => customer.id === id )
    }
    getCustomerSorted(){
        return this.customers.sort((customer1,customer2) =>{
            if (customer1.firstName > customer2.firstName) {
                return 1
            }else if (customer1.firstName === customer2.firstName) {
                return 0 
            }else{
                return -1
            }
        })
    }
}