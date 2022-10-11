import { NgModule    } from '@angular/core'                    ;
import { CommonModule   } from '@angular/common'                  ;
import { FormsModule   } from '@angular/forms'                   ;
import { IonicModule    } from '@ionic/angular'                   ;
import { HttpClientModule  } from '@angular/common/http'             ;
import { PokemonPageRoutingModule } from './pokemon-routing.module'         ;
import { PokemonPage   } from './pokemon.page'                   ;
import { ObtenerDatosService } from './servicios/obtener-datos.service';

@NgModule({
  imports: [
    CommonModule            ,
    FormsModule             ,
    IonicModule             ,
    PokemonPageRoutingModule,
    HttpClientModule        ,
  ],
  declarations: [PokemonPage        ],
  providers   : [ObtenerDatosService],
})
export class PokemonPageModule {}
