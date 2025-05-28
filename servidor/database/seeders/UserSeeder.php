<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private $users=[
        [
            'username'=>'admin',
            'email'=>'admin@admin.com',
            'password'=>'Admin123456',
            'role'=>'admin',
            'avatar'=>null
        ],
        [
            'username'=>'prueba',
            'email'=>'prueba@prueba.com',
            'password'=>'Prueba123456',
            'role'=>'user',
            'avatar'=>null
        ]
    ];

    public function run(): void
    {
        foreach($this->users as $user){
            $u = new User();
            $u->username= $user['username'];
            $u->email= $user['email'];
            $u->password= $user['password'];
            $u->role= $user['role'];
            $u->avatar= $user['avatar'];
            $u->save();
        }
        $this->command->info('Users created with data success!');
    }
}
