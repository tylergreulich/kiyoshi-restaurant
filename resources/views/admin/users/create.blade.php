@extends('layouts.admin')

@section('content')
            <div class="container-fluid  dashboard-content">
                <!-- ============================================================== -->
                <!-- pageheader -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="page-header">
                            <h2 class="pageheader-title">New Users </h2>
                            <p class="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                            <div class="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/admin" class="breadcrumb-link">Dashboard</a></li>
                                        <li class="breadcrumb-item"><a href="/admin/users" class="breadcrumb-link">All  Users</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">New User</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- end pageheader -->
                <!-- ============================================================== -->
             
                    <div class="row">
                        <!-- ============================================================== -->
                        <!-- basic form -->
                        <!-- ============================================================== -->
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Create a new User</h5>
                                <div class="card-body">
                                    <form method="POST" action="/admin/users">
                                        <div class="form-group">
                                            <label for="inputfirstname">First Name</label>
                                            <input id="inputfirstname" type="text" class="form-control form-control-lg" name="firstName" value="firstName" required autocomplete="name" autofocus placeholder="First Name">
                                        </div>
                                        <div class="form-group">
                                            <label for="inputlastname">Last Name</label>
                                            <input id="inputlastname" type="text" class="form-control form-control-lg" name="lname" value="lastName" required autocomplete="name" autofocus placeholder="Last Name">
                                        </div>
                                        <div class="form-group">
                                            <label for="inputemail">Email</label>
                                            <input id="inputemail" type="email" class="form-control form-control-lg" name="email" value="email" required autocomplete="email" placeholder="Email">
                                        </div>
                                        <div class="form-group">
                                            <label for="inputpassword">Password</label>
                                            <input id="inputpassword" type="password" class="form-control form-control-lg" name="password" value="password" required autocomplete="new-password" placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <label for="inputpassword">Confirm Password</label>
                                            <input id="inputpassword" type="password" class="form-control form-control-lg" name="confirmPassword" required autocomplete="new-password" placeholder="Confirm Password">
                                        </div>
                                
                                        <div class="form-group">
                                            <label for="inputrole">Role</label>
                                            <select name="role_id" class="form-control" id="inputrole">
                                                {{-- @foreach ($roles as $role)
                                                    <option value="{{$role->id}}" 
                                                    @if ($role->title == 'Admin')
                                                        selected
                                                    @endif
                                                    >role title</option>
                                                @endforeach --}}
                                            </select>
                                        </div>
                                        
                                        
                                        
                                        <div class="row">
                                            <div class="col-sm-6 pb-2 pb-sm-4 pb-lg-0 pr-0">
                                                
                                            </div>
                                            <div class="col-sm-6 pl-0">
                                                <p class="text-right">
                                                    <button type="submit" class="btn btn-space btn-primary">Submit</button>
                                                    
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- ============================================================== -->
                        <!-- end basic form -->
                        
                    </div>
                    
            </div>
            
@endsection


