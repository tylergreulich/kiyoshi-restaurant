<section id="food-preview">
    <h2>We have everything you need to kill your hunger</h2>
    
    <div class="container">
      <div class="food-slider">
        <div class="sliding-system">
        @foreach ($categories as $category)
            <figure class="slide">
              <div class="content">
                <div class="food-container">
                  <div class="food-title">
                    {{$category->title}}
                  </div>
                  <p class="food-description">
                    {{$category->description}}
                  </p>
                    <a href="/menu/{{ $category->id }}">
                      <button class="food-button">View More</button>
                    </a>
                  </div>
                <div class="food-image">
                  <img src="{{$category->image_url}}">
                </div>
              </div>
          </figure>
        @endforeach
        </div>
      </div>
    </div>

  </section>
