<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

public function isLowStock()
    {
    $umbral = 10; // Puedes ajustar el umbral según sea necesario
    return $this->cantidad < $umbral;
    }
}