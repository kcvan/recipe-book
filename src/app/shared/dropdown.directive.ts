import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  host: {
    '(click)': 'toggleOpen()'
  }
})

export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
