import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import CustomerService from "../services/customerService.js"

console.log("Customer component yüklendi");

let logger1 = new MongoLogger()
let customerService = new CustomerService(logger1)

let customer1 = new Customer(6,"Engin","Demiroğ","Ankara",36,1321321)
let customer2 = new Customer(7,"Baran","Gökçekli","Muğla",58,5161546)

customerService.load()

customerService.add(customer1)
customerService.add(customer2)

console.log("customers: ", customerService.customers);
console.log("customer errors: ", customerService.errors);
console.log(customerService.listCustomers());

customerService.getCustomerById(6)
console.log(customerService.getCustomerById(4));
console.log(customerService.getCustomerById(2));

customerService.getCustomerSorted()
console.log(customerService.getCustomerSorted());

console.log("*******************************");