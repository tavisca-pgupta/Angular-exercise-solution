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
