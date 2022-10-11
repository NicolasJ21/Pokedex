import { Component, OnInit, ViewChild } from '@angular/core';
import { ObtenerPokemonService } from './servicios/obtener-pokemon.service';
import { IonInfiniteScroll } from '@ionic/angular'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  @ViewChild( IonInfiniteScroll ) public miInfinito: IonInfiniteScroll;
  public formulario: FormGroup;

  constructor(
    public obtenerPokemon: ObtenerPokemonService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({

      nombrePokemon: new FormControl('',[

      ])
    })
    this.obtenerPokemon.obtener20Primeros();
  }

  public cargarMasPokemones(event: Event): void {
    this.obtenerPokemon.obtenerMasPokemones();
    this.miInfinito.complete();
  }


}
