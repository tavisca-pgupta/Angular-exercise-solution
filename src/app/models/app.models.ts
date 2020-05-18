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






