import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
    providedIn: 'root'
})
export class PostService extends DataService {

    constructor(http: Http) {
        super('http://jsonplaceholder.typicode.com/posts', http);
    }
    //constructor(private http: Http) { }
    //private url = 'http://jsonplaceholder.typicode.com/posts';

   /*  private handleError(error: Response) {
        if (error.status === 400)
            return Observable.throw(new BadInput(error.json()))
       
       
        if (error.status === 404) {
            return Observable.throw(new NotFoundError())
        }

        return Observable.throw(new AppError(error));
    } */




    //Metodos de acesso aos metodos de acesso a base 
    // METODOS ANTIGOS
   /*  getPosts() {
        return this.http.get(this.url)
        .catch(this.handleError);
    }

    createPost(post) {
        return this.http.post(this.url, JSON.stringify(post))
            .catch(this.handleError);
    }

    updatePost(post) {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
            .catch(this.handleError);
    }

    deletePost(post) {
        return this.http.delete(this.url + '/' + post.id)
            .catch(this.handleError);
    } */

     //Metodos de acesso aos metodos de acesso a base
    


}
