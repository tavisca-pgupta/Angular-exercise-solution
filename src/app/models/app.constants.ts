import { Department, Employee, Customer, Order } from './app.models';
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

export const Customers: Array<Customer> = new Array<Customer>();
Customers.push(new Customer(101, "Rahul", "Pune", "a@gmail.com", 1233343122));
Customers.push(new Customer(102, "Akash", "Pune", "b@gmail.com", 4566785434));
Customers.push(new Customer(103, "Ashish", "Mumbai", "c@gmail.com", 7891234567));
Customers.push(new Customer(104, "Arun", "Mumbai", "d@gmail.com", 4787876547));

export const Orders: Array<Order> = new Array<Order>();
Orders.push(new Order(1, "xyz", "15-05-2020", 101, 30, 200));
Orders.push(new Order(2, "abc", "13-05-2020", 101, 15, 500));
Orders.push(new Order(3, "xsdsf", "12-05-2020", 102, 30, 200));
Orders.push(new Order(4, "sdf", "11-05-2020", 102, 15, 500));
Orders.push(new Order(5, "dsfd", "12-05-2020", 103, 30, 200));
Orders.push(new Order(6, "dff", "11-05-2020", 104, 15, 500));

