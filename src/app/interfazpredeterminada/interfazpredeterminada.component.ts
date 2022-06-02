import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-interfazpredeterminada',
  templateUrl: './interfazpredeterminada.component.html',
  styleUrls: ['./interfazpredeterminada.component.css']
})
export class InterfazpredeterminadaComponent implements OnInit {

  constructor(private router: Router, private datos: DatosService) { }

  posts:any;
  photos:any;
  users:any;
  p: number = 1;
  p2: number = 1;
  p3: number = 1;

  obtenerPosts(){
    this.datos.getPosts().subscribe(respuesta=>{
      this.posts = respuesta;
    },error=>{
      console.log(error);
    });
  }

  obtenerPhotos(){
    this.datos.getPhotos().subscribe(respuesta=>{
      this.photos = respuesta;
    },error=>{
      console.log(error);
    });
  }

  obtenerUsers(){
    this.datos.getUsers().subscribe(respuesta=>{
      this.users = respuesta;
    },error=>{
      console.log(error);
    });
  }

  irSiguienteInterfaz(){
    this.router.navigate(['/inicioCon']);
  }

  ngOnInit(): void {
    this.obtenerPosts();
    this.obtenerPhotos();
    this.obtenerUsers();
  }

}
