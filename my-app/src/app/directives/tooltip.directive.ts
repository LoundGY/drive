import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective {
  @Input('tooltip') tooltipTitle: string;
  @Input() offset: number = 0;
  private tooltip: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) {
      this.show();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.hide();
    }
  }

  private show(): void {
    this.create();
    this.setPosition();
  }

  private hide(): void {
    this.renderer.removeChild(document.body, this.tooltip);
    this.tooltip = null;
  }

  private create(): void {
    this.tooltip = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );
    this.renderer.appendChild(document.body, this.tooltip);
    this.renderer.addClass(this.tooltip, 'tooltip');
  }

  private setPosition(): void {
    const parentPos = this.el.nativeElement.getBoundingClientRect();
    const top = parentPos.bottom + this.offset;
    const left = parentPos.left;
    const width = parentPos.width;
    this.renderer.setStyle(this.tooltip, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
    this.renderer.setStyle(this.tooltip, 'width', `${width}px`);
  }
}
