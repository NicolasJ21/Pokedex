import { Injectable} from '@angular/core'                    ;
import { HttpClient } from '@angular/common/http'             ;
import { ResultadoPeticion, Info } from 'src/app/modelo/resultado-peticion';
import { Pokemon } from 'src/app/modelo/pokemon'           ;

@Injectable()
export class ObtenerDatosService {
  private url       : string = 'https://pokeapi.co/api/v2/pokemon';
  public  resultado!: Pokemon;

  constructor(
    private client: HttpClient
  ) { }

  public obtenerDatos(datos:string) {
    this.client.get<Pokemon>(this.url+'/'+datos).subscribe(peticion => {
    this.resultado = peticion;

    });
  }

}
