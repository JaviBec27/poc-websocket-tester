import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-websocket-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './websocket-test.component.html',
  styleUrl: './websocket-test.component.css',
})
export class WebsocketTestComponent implements OnInit {
  messages: string[] = [];
  inputMessage: string = '';
  inputUrl: string = "";

  /**
  *
  */
  constructor(private socket: WebsocketService) {

  }

  ngOnInit(): void {
    this.socket.connect(this.inputUrl)
      .subscribe({
        next: (message) => this.messages.push(message),
        error: (error) => console.error('WebSocketError', error),
        complete: () => console.log('WebSocket Connection is Closed')
      });

  }

  sendMessage(): void {
    if (this.inputMessage.trim()) {
      this.socket.send(this.inputMessage);
      this.inputMessage = '';
    }
  }



}
