<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\MovimientoController;

Route::apiResource('productos', ProductoController::class);
Route::apiResource('movimientos', MovimientoController::class);
