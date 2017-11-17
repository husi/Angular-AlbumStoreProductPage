import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as map from 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  constructor( private _http: Http ) { }

  getAlbum( id: number) {
    return this._http.get(this._albumUrl).map(resp => resp.json());
  }

}
