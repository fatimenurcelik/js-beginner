import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Employee from "../models/employee.js"
import EmployeeService from "../services/employeeService.js"

console.log("Employee component yüklendi");

let logger1 = new MongoLogger()
let employeeService = new EmployeeService(logger1)

let employee1 = new Employee(1,"Engin","Demiroğ","Ankara",36,10000)
let employee2 = new Employee(2,"Baran","Gökçekli","Muğla",58,9000)

employeeService.load()

employeeService.add(employee1)
employeeService.add(employee2)

console.log("employees: ", employeeService.employees);
console.log("employee errors: ",employeeService.employees);
console.log(employeeService.listEmployees());

employeeService.getEmployeerById(4)
console.log(employeeService.getEmployeerById(6));
console.log(employeeService.getEmployeerById(4));

employeeService.getEmployeeSorted()
console.log(employeeService.getEmployeeSorted());

console.log("*****************************");