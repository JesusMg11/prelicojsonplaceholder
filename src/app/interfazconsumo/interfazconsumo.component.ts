import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-interfazconsumo',
  templateUrl: './interfazconsumo.component.html',
  styleUrls: ['./interfazconsumo.component.css']
})
export class InterfazconsumoComponent implements OnInit {

  constructor(private router: Router, private datos: DatosService) { }

  consulta1:any = {id:"", title:"", body:"", userId:""};
  datosConsulta2 = {title:"", body:""};
  consulta2:any = {id:"", title:"", body:"", userId:""};
  datosConsulta3 = {title:"", body:""};
  consulta3:any = {id:""};
  datosConsulta4 = {title:"", body:""};
  consulta4:any = {id:"", title:"", body:"", userId:""};
  bandera = false;

  getConsulta1(){
    this.datos.getGetPost().subscribe(respuesta=>{
      this.consulta1 = respuesta;
    },error=>{
      console.log(error);
    });
  }

  postConsulta2(){
    if(this.datosConsulta2.title != "" && this.datosConsulta2.body != ""){
      this.datos.postPost(this.datosConsulta2).subscribe(respuesta=>{
        this.consulta2 = respuesta;
      },error=>{
        console.log(error);
      });
    }else{
      alert("LOS CAMPOS NO DEBEN ESTAR VACÍOS")
    }
  }

  putConsulta3(){
    if(this.datosConsulta3.title != "" && this.datosConsulta3.body != ""){
      this.datos.putPut(this.datosConsulta3).subscribe(respuesta=>{
        this.consulta3 = respuesta;
      },error=>{
        console.log(error);
      });
    }else{
      alert("LOS CAMPOS NO DEBEN ESTAR VACÍOS")
    }
  }

  patchConsulta4(){
    if(this.datosConsulta4.title != "" && this.datosConsulta4.body != ""){
      this.datos.patchPacht(this.datosConsulta4).subscribe(respuesta=>{
        this.consulta4 = respuesta;
      },error=>{
        console.log(error);
      });
    }else{
      alert("LOS CAMPOS NO DEBEN ESTAR VACÍOS")
    }
  }

  deleteConsulta5(){
      this.datos.deleteDelete().subscribe(respuesta=>{
        this.bandera = true;
      },error=>{
        console.log(error);
      });
  }


  irSiguienteInterfaz(){
    this.router.navigate(['/inicioPre']);
  }

  ngOnInit(): void {
  }

}
