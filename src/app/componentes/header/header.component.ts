import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() titulo = "";
  @Output() doMenuClicado = new EventEmitter();

  ngOnInit(): void {
  }

  clickMenu = () => {
    this.doMenuClicado.emit("Clicadooooooo!!!")
  }

}
