import { ErrorHandler, Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    constructor(private http: Http) {
        super();
    }
    handleError(error) {
        alert('unExpected Error Ocuured');
        console.log(error);
    }

}