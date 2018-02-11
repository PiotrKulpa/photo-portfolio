//MVC

let model = {

}

let controller = {
  init () {
    view.init();
    view.menuClick();
  }
}

let view = {
  btn: $('nav button'),
  btnHome: $('#home'),
  appContent: $('.content'),
  menuClick() {
    this.btn.on('click', e => {

      let btnData = $(e.currentTarget).data('show');
      this.appContent.hide();
      this.appContent.removeClass('appear');
      $(btnData).show();
      this.appContent.addClass('appear');
    });
  },
  init() {
    this.appContent.hide();
    this.btnHome.show();
    this.btnHome.css({'opacity': '1'});
  }

}

controller.init();
