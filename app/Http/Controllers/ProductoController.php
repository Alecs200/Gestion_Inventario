<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = Producto::all();
        $productosBajoStock = Producto::where('cantidad', '<', 10)->get();
    
        return response()->json([
            'productos' => $productos,
            'alertas' => $productosBajoStock->isNotEmpty() ? 'Existen productos con bajo stock' : null,
            'productosBajoStock' => $productosBajoStock
        ]);    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'cantidad' => 'required|integer',
            'precio' => 'required|numeric',
        ]);

        return Producto::create($request->all());
    }

    public function show(Producto $producto)
    {
        return $producto;
    }

    public function update(Request $request, Producto $producto)
    {
        $request->validate([
            'nombre' => 'required',
            'cantidad' => 'required|integer',
            'precio' => 'required|numeric',
        ]);

        $producto->update($request->all());
        return $producto;
    }

    public function destroy(Producto $producto)
    {
        $producto->delete();
        return response()->noContent();
    }
}
