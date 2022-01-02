<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Auth/Login');
    }

    public function login(Request $request)
    {
        return $request->inputs();
    }
}
