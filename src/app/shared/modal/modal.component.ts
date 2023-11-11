import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() dismiss = new EventEmitter();

  constructor(private el: ElementRef){

  }

  ngOnInIt(){
    document.body.appendChild(this.el.nativeElement);
  }

  ngonDestroy(){
    this.el.nativeElement.remove()
  }

  onDismissClick(){
    this.dismiss.emit()
  }

}
