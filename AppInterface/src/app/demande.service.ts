import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Demande } from "./demande";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn :'root'
})
export class DemandeService {
    private apiServerUrl = '';

    constructor(private http: HttpClient ) { }

    public getDemandes(): Observable<Demande[]> {
        return this.http.get<Demande[]>('${this.apiServerUrl}/demande');
    }

    public addDemandes(demande: Demande): Observable<Demande> {
        return this.http.post<Demande>('${this.apiServerUrl}/demande/add',demande);
    }

    public updateDemandes(demandeId : number,demande : Demande ):Observable<Demande> {
        return this.http.put<Demande>('${this.apiServerUrl}/demande/update/${demandeId}',demande);
    }

    public deleteDemandes(demandeId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/demande/delete/${demandeId}');
    }

    
}