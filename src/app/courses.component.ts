import { CoursesService } from './courses.Service';
import { Component, inject } from '@angular/core';



@Component({
    selector: 'courses',
    template: `
             {{ text | summary:10}}

              `
                   

})

export class CoursesComponent {
   text = 'Aprenda também como criar efeito de zoom com mouse sobre a imagem só com CSS. Também na segunda parte do vídeo você vai ver como adicionar texto na frente da foto sem que o efeito de zoom seja danificado';

}