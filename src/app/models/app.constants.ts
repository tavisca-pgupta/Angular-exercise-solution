import { Department, Employee } from './app.models';
export const Products = [
  {ProductId:101, ProductName:'Laptop', Price:20000, Catgory:'ECT'},
  {ProductId:102, ProductName:'Iron', Price:2000, Catgory:'ECL'},
  {ProductId:103, ProductName:'Lays', Price:20, Catgory:'FOD'}
];

export const Categories =[
  'ECT', 'ECL', 'FOD'
];

export const Departments: Array<Department> = new Array<Department>();
Departments.push(new Department(10, 'D1'));
Departments.push(new Department(20, 'D2'));
Departments.push(new Department(30, 'D3'));

export const Employees: Array<Employee> = new Array<Employee>();
Employees.push(new Employee(101, 'A', 10));
Employees.push(new Employee(102, 'B', 20));
Employees.push(new Employee(103, 'C', 30));
Employees.push(new Employee(104, 'D', 10));
Employees.push(new Employee(105, 'E', 20));
Employees.push(new Employee(106, 'F', 30));

