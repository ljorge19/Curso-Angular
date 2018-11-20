import { BadInput } from '../common/validators/bad-input';
import { NotFoundError } from '../common/validators/not-found-error';
import { AppError } from '../common/validators/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable({
    providedIn: 'root'
})
export class DataService {


    constructor(private url: string, private http: Http) { }

    //private url;

    private handleError(error: Response) {
        if (error.status === 400)
            return Observable.throw(new BadInput(error.json()))
       
       
        if (error.status === 404) {
            return Observable.throw(new NotFoundError())
        }

        return Observable.throw(new AppError(error));
    }

    //Metodos de acesso aos metodos de acesso a base
    getAll() {
        return this.http.get(this.url)
        //.map(response => response.json())
          .map(function(response){
             return response.json()
             
         }) 
        .catch(this.handleError);
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(resource) {
        return this.http.delete(this.url + '/' + resource.id)
            .map(response => response.json())
            .catch(this.handleError);
    }



}
