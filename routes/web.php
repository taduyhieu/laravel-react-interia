<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['test'=> 'test']); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});

Route::get('/about', function () {
    return Inertia::render('About/Index', ['link'=> 'about']); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
})->name('about');

Route::get('/home', function () {
    return Inertia::render('About/Index', ['link'=> 'Home']); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
})->name('home');
