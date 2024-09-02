<?php

namespace App\Http\Controllers;
use App\Models\Movimiento;
use Illuminate\Http\Request;

class MovimientoController extends Controller
{
    public function index()
    {
        return Movimiento::with('producto')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'producto_id' => 'required|exists:productos,id',
            'tipo' => 'required|in:entrada,salida',
            'cantidad' => 'required|integer',
        ]);

        return Movimiento::create($request->all());
    }

    public function show(Movimiento $movimiento)
    {
        return $movimiento->load('producto');
    }

    public function update(Request $request, Movimiento $movimiento)
    {
        $request->validate([
            'producto_id' => 'required|exists:productos,id',
            'tipo' => 'required|in:entrada,salida',
            'cantidad' => 'required|integer',
        ]);

        $movimiento->update($request->all());
        return $movimiento;
    }

    public function destroy(Movimiento $movimiento)
    {
        $movimiento->delete();
        return response()->noContent();
    }
}