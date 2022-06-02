import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

/*URL PARA PRODUCCIÓN 
const URL:string = "https://jsonplaceholder.typicode.com";
*/
//URL PARA LA API FRUITS LOCAL
/* La URL https://jsonplaceholder.typicode.com se encuentra dentro del archivo proxy.conf.json para evitar las CORS en el ambiente local
  ng serve --proxy-config proxy.conf.json
*/

const URL:string = "https://jsonplaceholder.typicode.com/";

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }
 
  getPosts(){
    return this.http.get(URL + "posts");
  }

  getPhotos(){
    return this.http.get(URL + "photos");
  }

  getUsers(){
    return this.http.get(URL + "users");
  }

  getGetPost(){
    return this.http.get(URL + "posts/1");
  }

  postPost(datos){
    let formData = new FormData();
    formData.append('userId','1');
    formData.append('title', datos.title);
    formData.append('body', datos.body);

    return this.http.post(URL + "posts", formData);
  }

  putPut(datos){
    let Params = new HttpParams();
    Params = Params.append('userId','1');
    Params = Params.append('title', datos.title);
    Params = Params.append('body', datos.body);

    return this.http.put(URL + "posts/1", {params: Params});
  }

  patchPacht(datos){
    let Params = new HttpParams();
    Params = Params.append('userId','1');
    Params = Params.append('title', datos.title);
    Params = Params.append('body', datos.body);

    return this.http.patch(URL + "posts/1", {params: Params});
  }

  deleteDelete(){
    return this.http.delete(URL + "posts/1");
  }
}
