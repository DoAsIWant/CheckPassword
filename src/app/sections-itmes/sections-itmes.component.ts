import { Component,Input,Output,EventEmitter, OnChanges,SimpleChange } from '@angular/core';

@Component({
  selector: 'app-sections-itmes',
  templateUrl: './sections-itmes.component.html',
  styleUrls: ['./sections-itmes.component.css']
})
export class SectionsItmesComponent implements OnChanges {
  item1: string;
  item2: string;
  item3 : string;
  password : string;

  @Input() public currentPassword :  string | undefined;
  
  colors = ["gray","red", "yellow","green"];

  setStrenghtIndx (password:string){
    const symbols =  (/[^a-zA-Z0-9\s]/g).test(password); 
    const letters =  (/[a-zA-Z]+/g).test(password)
    const digit =    (/[0-9]+/g).test(password)
    const correctLength = /.{9,}/.test(password)
  
    const esayPassword = symbols || letters || digit
    const mediumPassword = (symbols && digit) || (digit && letters) || (symbols && letters)
    const strongPassword = symbols && letters && digit
    const strenghtFlags = [esayPassword,mediumPassword,strongPassword];

    let indx = 0

  
    for(let item of strenghtFlags){
       if (item===true){
        indx+=1
       }
    }
    
    return {
      indx: indx+1,
      color: this.colors[indx]
    }
   
  }

  setColors(color:string,indx:number){
    for(let i=0; i<indx;i++){
      this['item' + i] = color;
    }
  }
  ngOnChanges(changes:{[propname:string]: SimpleChange}) {
    this.password = changes['currentPassword'].currentValue
    const colorsParams = this.setStrenghtIndx(this.password)
    if(this.password===""){
      this.setColors("gray",4)
    }
    console.log(colorsParams)
    this.setColors(colorsParams.color,colorsParams.indx)
  }

 
}
