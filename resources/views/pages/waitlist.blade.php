@extends('../layouts.app')

@section('content')
  <div id="waitlist-page">
    <div class="content-box">
      <div class="row">
        <div class="col-md-6">
          <h1>Get On The List</h1>
          <form>
            <div class="form-group">
              <label for="emailInput">Email address</label>
              <input type="email" name="email" class="form-control" id="emailInput" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="phoneInput">Phone #</label>
              <input class="form-control" name="phone" type="text" name="phone" id="phoneInput" placeholder="000-000-0000">
            </div>
            <div class="form-group">
              <label for="guestsInput">Guests</label>
              <select class="form-control" name="guests" id="guestsInput">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="timeInput">Time</label>
              <select multiple class="form-control" name="time" id="timeInput">
                <option value="5">5:00 PM</option>
                <option value="6">6:00 PM</option>
                <option value="7">7:00 PM</option>
                <option value="8">8:00 PM</option>
                <option value="9">9:00 PM</option>
              </select>
            </div>
            <div class="form-group">
              <button class="btn btn-primary mb-2">Submit</button>
            </div>
          </form>
      </div>
    </div>
  </div>
@endsection
