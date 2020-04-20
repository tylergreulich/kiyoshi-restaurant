
@extends('layouts.app')

@section('content')
  <div id="single-menu-page"
    <div class="row">>
      <div class="
        col-md-10 offset-md-1
        offset-lg-2 col-lg-8
        col-sm-12
       ">
        <div class="content-box">
              <h1>{{ $food_category->title }}</h1>
            <div class="col-md-12 food-items-container" style="padding: 0;">
            @foreach ($food_items as $food_item)
            <div style="padding: 0;">
              <div class="item">
                <div class="title">
                  <h4>{{ $food_item->title }}</h4>
                  <span class="price">${{ $food_item->price }}</span>
                </div>
                <div class="description">
                  <p>{{ $food_item->description }}</p>
                </div>
              </div>
             </div>
             @endforeach
            </div>
         </div>
        </div>
      </div>
    </div>
  </div>
@endsection
