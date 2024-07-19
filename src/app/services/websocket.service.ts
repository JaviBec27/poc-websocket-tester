import { Injectable } from '@angular/core';
import { Observable, Subject, every } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {


  private socket:WebSocket;
  private subject: Subject<any>;

  constructor() { 
    this.subject = new Subject<any>();
    this.socket = new WebSocket("");
  }

  public connect(url:string):Observable<any>{
    this.socket = new WebSocket(url);

    this.socket.onmessage = (event)=>{
      this.subject.next(event.data);
    }

    this.socket.onerror = (event)=>{
      this.subject.error(event);
    }

    this.socket.onclose = (event)=>{
      this.subject.complete();
    }

    return this.subject.asObservable();

  }

  public send(message:any):void{
    this.socket.send(JSON.stringify(message));
  }
}
