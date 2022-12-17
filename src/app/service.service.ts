
import { Injectable } from '@angular/core';
import { code, emp_details, Joe_Linux, Jogn_Green, Linda_May } from './rightcontent/data';
import { employee } from './rightcontent/package.1';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor() { }
  getAll1():employee[]{
    return emp_details;
  }
  getAll2():employee[]{
    return Joe_Linux;
  }
  getAll3():employee[]{
    return Linda_May;
  }
  getAll4():employee[]{
    return Jogn_Green;
  }
  getAll5():employee[]{
    return code;
  }
}

