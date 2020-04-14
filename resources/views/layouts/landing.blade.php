<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<link rel="stylesheet" href="/css/app.css">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <body>
        <section id="app-layout">
    @include('includes.side-menu')
    <div class="welcome-jumbo">
      <div class="status">NEW</div>
      <h1>Yaki Udon</h1>
      <img src="/img/udon-2.png" class="yaki-udon">
    </div>
  </section>
  @yield('content')

  <script src="/assets/vendor/jquery/jquery-3.3.1.min.js"></script>

  <script>
    let slides = $('.sliding-system a.slide').length;
    let maxSlides;
    let moveTotal;
    let currentSlide = 0;
    $(window).resize(() => {
      currentSlide = 0;
      $('.sliding-system').css('transform', 'translate3d(-0%, 0,0');
    })
    function desktopSlider() {
      if(a.matches){
        maxSlides = Math.ceil((slides * 20) / 100);
        moveTotal = 100;
        // Right Button
        $('.right-btn').on('click', () => {
          if(currentSlide < maxSlides){
            currentSlide += 100;
            $('.sliding-system').css('transform', `translate3d(-${currentSlide}%, 0, 0)`);
          }
        });
        // Left Button
        $('.left-btn').on('click', () => {
          console.log('clicked right btn')
          if(currentSlide != 0){
            currentSlide -= 100;
            $('.sliding-system').css('transform', `translate3d(-${currentSlide}%, 0, 0)`);
          }
        });
      }
    }
    let a = window.matchMedia("(min-width: 998px)")
    desktopSlider(a);
    a.addListener(desktopSlider);
    function tabletSlider() {
      if(b.matches){
        maxSlides = Math.ceil((slides * 50) / 100);
        moveTotal = 100;
        // Right Button
        $('.right-btn').on('click', () => {
          console.log('clicked right btn')
          if(currentSlide < ((maxSlides * 100) - 100)){
            currentSlide += 50;
            $('.sliding-system').css('transform', `translate3d(-${currentSlide}%, 0, 0)`);
          }
        });
        // Left Button
        $('.left-btn').on('click', () => {
          console.log('clicked right btn')
          if(currentSlide != 0){
            currentSlide -= 50;
            $('.sliding-system').css('transform', `translate3d(-${currentSlide}%, 0, 0)`);
          }
        });
      }
    }
    var b = window.matchMedia("(min-width: 768px) and (max-width: 997px");
    console.log(b)
    tabletSlider(b);
    b.addListener(tabletSlider);
  </script>
    </body>
</html>