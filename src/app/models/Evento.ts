import { Boliche } from './Boliche';

export class Evento{
  idEvento: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FechaHora: Date;
  titulo: string;
  coverImg: string;
  descripcion: string;
  cantidadTotal: number;
  cantidadDisponible: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Boliche: Boliche;

}
