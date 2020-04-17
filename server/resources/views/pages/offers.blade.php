@extends('../layouts.app')

@section('content')
  <div id="offers-page">
    <div class="content-box">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1>Signup To Receive Notifications For Deals</h1>
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="firstNameInput">First Name</label>
                  <input type="text" name="firstName" class="form-control" id="firstNameInput" placeholder="John">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="lastNameInput">Last Name</label>
                  <input type="text" name="lastName" class="form-control" id="lastNameInput" placeholder="Smith">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="emailInput">Email address</label>
                  <input type="email" name="email" class="form-control" id="emailInput" placeholder="name@example.com">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="emailInput">Email address</label>
                  <input type="email" name="email" class="form-control" id="emailInput" placeholder="name@example.com">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <p>
                    In signing up I acknowledge that I am 18 years or older, want to 
                    receive email offers from Kiyoshi's Teriyaki and Sushi, and, if I select
                    to join Dine Rewards, agree to the terms and conditions of the program. 
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <button class="btn btn-primary mb-2" type="submit">Confirm</button>
                </div>
              </div>
            </div>
          </form>
      </div>
    </div>
  </div>
@endsection
