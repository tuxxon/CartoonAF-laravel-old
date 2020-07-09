<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return View::make('start');
});

Route::get('/privacy', function () {
    return View::make('privacy');
});

Route::get('/{id}/gray', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";
    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/gray?e=$ext",
            'filterTitle' => "Gray filter",
            'imageUri' => "$id/gray.$ext$time"
        ]
    );    
});

Route::get('/{id}/edge-preserving', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";

    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/edge-preserving?e=$ext",
            'filterTitle' => "Edge Preserving filter",
            'imageUri' => "$id/ep.$ext$time"
        ]
    );    
});

Route::get('/{id}/detail-enhance', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";

    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/detail-enhance?e=$ext",
            'filterTitle' => "Detail Enhance filter",
            'imageUri' => "$id/de.$ext$time"
        ]
    );    
});

Route::get('/{id}/stylization', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";

    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/stylization?e=$ext",
            'filterTitle' => "Stylization filter",
            'imageUri' => "$id/style.$ext$time"
        ]
    );    
});

Route::get('/{id}/pencil-sketch-in-gray', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";

    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/pencil-sketch-in-gray?e=$ext",
            'filterTitle' => "Pencil Sketch in Gray",
            'imageUri' => "$id/ps-gray.$ext$time"
        ]
    );    
});

Route::get('/{id}/pencil-sketch-in-color', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";

    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/pencil-sketch-in-color?e=$ext",
            'filterTitle' => "Pencil Sketch in Color",
            'imageUri' => "$id/ps-color.$ext$time"
        ]
    );
});

Route::get('/{id}/pencil-sketch-using-sketchify', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";

    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/pencil-sketch-using-sketchify?e=$ext",
            'filterTitle' => "Pencil Sketch using Sketchify",
            'imageUri' => "$id/sketchify.$ext$time"
        ]
    );
});

Route::get('/{id}/normal-cartoon-using-canny', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";

    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/normal-cartoon-using-canny?e=$ext",
            'filterTitle' => "Normal Cartoon using Canny",
            'imageUri' => "$id/normal-cartoon.$ext$time"
        ]
    );
});

Route::get('/{id}/basic-cartoon-using-adaptivethreshold', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";

    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/basic-cartoon-using-adaptivethreshold?e=$ext",
            'filterTitle' => "Basic Cartoon using Adaptivethreshold",
            'imageUri' => "$id/cartoon-basic.$ext$time"
        ]
    );
});

Route::get('/{id}/cartoon-lite-using-adaptivethreshold', function ($id) {
    $ext = Request::get("e");
    $time = Request::get("t");
    $time = isset($time) ? "?t=$time" : "";

    return View::make('sub-filter', 
        [
            'serviceUri' => "$id/cartoon-lite-using-adaptivethreshold?e=$ext",
            'filterTitle' => "Cartoon Lite using Adaptivethreshold",
            'imageUri' => "$id/cartoon-lite.$ext$time"
        ]
    );
});

/*
Route::get('/{id}/todo', 'TodoController@getTodoById');
Route::get('/{id}/test', function ($id) {
    return $id;
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
*/
