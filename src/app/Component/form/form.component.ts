import { Component,OnInit } from '@angular/core';
import { MycrudserviceService } from './Formservice/mycrudservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  dataname:string="";
   cruddata:string[]=[]
   isEdit = false;
   indexp:number=0;


    constructor(private myservice:MycrudserviceService){
    }
    ngOnInit(): void {
      this.cruddata=this.myservice.getdata()

    }
    onSubmit(){
      console.log(this.dataname)
     let b= this.cruddata.indexOf(this.dataname);
    (this.dataname.length<=0)?alert("Enter Value"):(this.isEdit!=false)? this.myservice.update(this.indexp,this.dataname):this.myservice.addItem(this.dataname)
    this.dataname="";
  }
    remove(data:string){
      this.myservice.remove(this.cruddata.indexOf(data))
    }
    edit(i:number){
       this.dataname=this.cruddata[i];
       this.isEdit=true
       this.indexp=i;
    }

}
