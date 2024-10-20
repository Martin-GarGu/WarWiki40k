<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateWeaponRequest extends FormRequest
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
                'a'=>'required|numeric',
                'bs_ws' => 'required|text',
                'd' => 'required|text',
                'type' => 'required|text',
            ];
        }
        else{
            return[
                'name' => 'sometimes|string',
                'a'=>'sometimes|numeric',
                'bs_ws' => 'sometimes|text',
                'd' => 'sometimes|text',
                'type' => 'sometimes|text',
            ];
        }
    }
}
