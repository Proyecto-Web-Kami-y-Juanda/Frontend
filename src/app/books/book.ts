import {Editorial} from '../editorial/editorial';

export interface Book{
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  editorialId: number;
  fechaEdicion: number;
  cantidad: number;
}
