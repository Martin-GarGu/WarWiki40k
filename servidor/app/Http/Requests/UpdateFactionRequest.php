<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFactionRequest extends FormRequest
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
                'descrription'=>'required|text',
                'imagen' => 'required|text'
            ];
        }
        else{
            return[
                'name' => 'sometimes|string',
                'descrription'=>'sometimes|text',
                'imagen' => 'sometimes|text'
            ];
        }
    }
}
