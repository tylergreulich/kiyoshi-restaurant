@extends('layouts.app')

@section('content')
  <div id="menu-page">
    <section id="food-preview">
      <div>
        <h2>We have everything you need to kill your hunger</h2>
      </div>
      <div class="container">
        <section class="food-slider">
          <div class="sliding-system">
          @foreach ($food_categories as $food_category)
            <figure class="slide">
              <div class="background"></div>
              <div class="content">
                <div class="food-title">
                  {{ $food_category->title }}
                </div>
                <p class="food-description">
                  {{ $food_category->description }}
                </p>
                <div class="food-image">
                  <img src="{{ $food_category->image_url }}">
                </div>
              </div>
            </figure>
          @endforeach
          </div>
        </section>
      </div>
    </section>
  </div>
@endsection
