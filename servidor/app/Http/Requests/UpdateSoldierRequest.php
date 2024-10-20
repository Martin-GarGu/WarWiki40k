<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSoldierRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $method = $this->method();
        if($method== 'PUT'){
            return[
                'name' => 'required|string',
                'description'=>'required|text',
                'imagen' => 'required|text',
                'squadron_id' => 'required|numeric',
                'm' => 'required|numeric',
                'apl' => 'required|numeric',
                'ga' => 'required|numeric',
                'df' => 'required|numeric',
                'sv' => 'required|text',
                'w' => 'required|numeric',
                'base' => 'required|text',
            ];
        }
        else{
            return[
                'name' => 'sometimes|string',
                'description'=>'sometimes|text',
                'imagen' => 'sometimes|text',
                'squadron_id' => 'sometimes|numeric',
                'm' => 'sometimes|numeric',
                'apl' => 'sometimes|numeric',
                'ga' => 'sometimes|numeric',
                'df' => 'sometimes|numeric',
                'sv' => 'sometimes|text',
                'w' => 'sometimes|numeric',
                'base' => 'sometimes|text',
            ];
        }
    }
}
