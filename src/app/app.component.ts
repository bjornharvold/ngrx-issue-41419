import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoFacade } from './application/todo.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('Setting ready state...');
    this.facade.ready();
  }

  constructor(
    private readonly facade: TodoFacade,
  ){}
}
