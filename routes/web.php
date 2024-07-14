<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome/Welcome', ['test'=> 'test']); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});
