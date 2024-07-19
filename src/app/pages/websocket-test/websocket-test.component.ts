import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-websocket-test',
  standalone: true,
  imports: [],
  templateUrl: './websocket-test.component.html',
  styleUrl: './websocket-test.component.css',
})
export class WebsocketTestComponent implements OnInit {
  message: string[] = [];
  inputMessage: string = '';
  URL_WEB_SOCKET_ENDPOINT:string = "";

  ngOnInit(): void {

    this.socket.connect(this.URL_WEB_SOCKET_ENDPOINT)
    .subscribe( 
      (message)=> 
      this.message.push(message),
      error => console.error('WebSocketError'.error),

    }

    )
    
  }

  /**
   *
   */
  constructor(private socket: WebsocketService) {}
}
