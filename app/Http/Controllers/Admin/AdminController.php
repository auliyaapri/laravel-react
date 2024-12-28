<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Matakuliah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $admin = Matakuliah::all();
        return Inertia::render('Admin/Index', [
            'admin' => $admin,
        ]);

    }
}
