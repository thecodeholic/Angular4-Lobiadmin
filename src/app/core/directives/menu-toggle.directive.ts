import {Directive, ElementRef, HostListener} from '@angular/core';
import {ConfigService} from '../services/config.service';


@Directive({
  selector: '[lobiMenuToggle]'
})
export class MenuToggleDirective {

  constructor(private el: ElementRef, private config: ConfigService) {

    console.log("44444444444444");

  }

  @HostListener('click')
  onMouseClick() {


    $('body').toggleClass('menu-hidden');
    this.el.nativeElement.classList.toggle('active');

    return;

    // if ($(window).width() < this.config.SCREEN_MD) {
    //
    //   $('body').addClass('menu-hidden');
    //   this.el.nativeElement.classList.add('active');
    //   // _hideMenuOnOutsideClick();
    // } else {
    //   this.el.nativeElement.classList.remove('active');
    //   $('body').removeClass('menu-hidden');
    //   // me.$showHideBtn.removeClass('active');
    // }
  }

  isHidden() {
    return $('body').hasClass('menu-hidden') && $(window).width() >= this.config.SCREEN_MD
      || !$('body').hasClass('menu-hidden') && $(window).width() < this.config.SCREEN_MD;
  }

  hideMenuOnOutsideClick() {
    // Todo
    // $(document).off('mouseup.lobiAdmin')
    //   .on('mouseup.lobiAdmin', function (e) {
    //     //If click happened not on the menu and not on the showHideBtn than we need to hide it.
    //     //If click happened on the menu we do not need to hide it.
    //     //If click happed on the showHideBtn it will be hidden automatically
    //     if (!this.$el.is(e.target) && this.$el.has(e.target).length === 0
    //       && !this.$showHideBtn.is(e.target) && this.$showHideBtn.has(e.target).length === 0) {
    //       this.hide();
    //     }
    //   });
  }

}
