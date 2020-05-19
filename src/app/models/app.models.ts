export class Department {
  constructor(
    public DeptNo: number,
    public DeptName: string
  ){}
}

export class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string,
    public DeptNo: number
  ){}
}

export class Customer {
  constructor(
    public CustomerId: number,
    public CustomerName: string,
    public City: string,
    public Email: string,
    public ContactNumber: number
  ){}
}

export class Order {
  constructor(
    public OrderId: number,
    public OrderName: string,
    public Date: string,
    public CustomerId: number,
    public OrderQuantity: number,
    public Amount: number
  ){}
}
export class RegisterUser {
  constructor(
    public Email: string,
    public Password: string,
    public ConfirmPassword: string
  ){}
}

export class LoginUser {
 constructor(
   public UserName: string,
   public Password: string
 ){}
}
export class ResponseData {
 constructor(
   public message: string
 ){}
}

export class ProductResponse {
 constructor(
   public productRowId: number,
   public productName: string,
   public price: number
 ){}
}
