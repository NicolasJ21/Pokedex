export type Sprites = {
  front_default      : string;
  back_default      ?: string;
  front_female      ?: string;
  back_female       ?: string;
  front_shiny       ?: string;
  back_shiny        ?: string;
  back_shiny_female ?: string;
  front_shiny_female?: string;
}
export type Stat = {
  base_stat: number;
  stat     : {
       name: string;
  }
}
export interface Pokemon {
  name   : string     ;
  order  : number     ;
  sprites: Sprites    ;
  stats  : Array<Stat>;
}
