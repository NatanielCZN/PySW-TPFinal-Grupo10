import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Resenia } from 'src/app/models/resenia';
import { Usuario } from 'src/app/models/usuario.model';
import { ReseniaService } from 'src/app/services/resenia.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-resenia-usuario',
  templateUrl: './resenia-usuario.component.html',
  styleUrls: ['./resenia-usuario.component.css']
})
export class ReseniaUsuarioComponent implements OnInit {
  resenia!: Resenia;
  resenias!: Array<Resenia>;
  idUs!:any;
  constructor(private reseniaService: ReseniaService,
    private appCom:AppComponent, 
    private router: Router) {
    this.appCom.logeado=true;
    this.resenias = new Array<Resenia>();
    this.resenia = new Resenia(); 
    this.obtenerReseniasUs();
   // this.idUs=sessionStorage.getItem('userId'); 
  }

  ngOnInit(): void {
  }
  
  //// para mostrar por usuario 
  obtenerReseniasUs() { 
   this.idUs = sessionStorage.getItem('userId'); 
    this.reseniaService.getReseniaUsuario(this.idUs).subscribe(
      result => {
        this.resenias = new Array<Resenia>();
        result.forEach((element: any) => {
          this.resenia = new Resenia();
          Object.assign(this.resenia, element);
          this.resenias.push(this.resenia);
        });
        console.log(result);
      },
      error => {
        console.log("error")
      } 
    );
  }

  eliminar(id:string){
    this.reseniaService.delateResenia(id).subscribe(
      res=>{
          console.log(res);
          this.upDate();
        },error=>{
          console.log(error);
        }
    )
  }
  public modificar(resenia: Resenia){
    this.router.navigate(['reseniaForm', resenia._id]);
  }
  upDate(){
    location.reload();
  }
}

