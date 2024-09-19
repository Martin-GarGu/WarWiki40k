<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Weapon;
use App\Models\SpecialRule;


class WeaponSpecialRuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

     private $weaponspecialrules=[
        [
            'weapon_id' => '2',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '4',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '5',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '7',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '7',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '8',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '8',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '8',
            'specialrule_id' => '9',
            'type' => '',
        ],
        [
            'weapon_id' => '9',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '10',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '11',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '11',
            'specialrule_id' => '25',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '12',
            'specialrule_id' => '21',
            'type' => 'square',
        ],
        [
            'weapon_id' => '12',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '13',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '14',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '17',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '18',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '20',
            'specialrule_id' => '21',
            'type' => 'square',
        ],
        [
            'weapon_id' => '20',
            'specialrule_id' => '12',
            'type' => '3+',
        ],
        [
            'weapon_id' => '20',
            'specialrule_id' => '10',
            'type' => '',
        ],
        [
            'weapon_id' => '20',
            'specialrule_id' => '13',
            'type' => '',
        ],
        [
            'weapon_id' => '21',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '21',
            'specialrule_id' => '10',
            'type' => '',
        ],
        [
            'weapon_id' => '22',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '24',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '24',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '24',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '25',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '26',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '27',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '29',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '27',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '32',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '32',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '32',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '33',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '36',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '38',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '39',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '39',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '39',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '40',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '40',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '41',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '42',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '42',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '42',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '43',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '45',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '46',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '46',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '46',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '47',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '49',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '51',
            'specialrule_id' => '21',
            'type' => '5+',
        ],
        [
            'weapon_id' => '52',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '52',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '53',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '54',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '55',
            'specialrule_id' => '21',
            'type' => '2 circle',
        ],
        [
            'weapon_id' => '55',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '55',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '55',
            'specialrule_id' => '10',
            'type' => '',
        ],
        [
            'weapon_id' => '55',
            'specialrule_id' => '13',
            'type' => '',
        ],
        [
            'weapon_id' => '56',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '56',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '56',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '57',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '57',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '58',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '59',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '59',
            'specialrule_id' => '9',
            'type' => '',
        ],
        [
            'weapon_id' => '60',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '61',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '62',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '66',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '67',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '69',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '70',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '70',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '70',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '71',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '71',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '72',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '72',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '72',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '73',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '73',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '73',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '73',
            'specialrule_id' => '9',
            'type' => '',
        ],
        [
            'weapon_id' => '75',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '2',
            'specialrule_id' => '10',
            'type' => '',
        ],
        [
            'weapon_id' => '76',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '76',
            'specialrule_id' => '25',
            'type' => 'triangle',
        ],
        [
            'weapon_id' => '78',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '79',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '79',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '80',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '80',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '80',
            'specialrule_id' => '9',
            'type' => '',
        ],
        [
            'weapon_id' => '81',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '81',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '83',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '84',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '84',
            'specialrule_id' => '25',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '86',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '87',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '88',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '89',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '90',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '92',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '92',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '95',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '97',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '97',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '100',
            'specialrule_id' => '2',
            'type' => '',
        ],
        [
            'weapon_id' => '100',
            'specialrule_id' => '26',
            'type' => '',
        ],
        [
            'weapon_id' => '100',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '100',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '101',
            'specialrule_id' => '21',
            'type' => '5+',
        ],
        [
            'weapon_id' => '102',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '102',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '105',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '105',
            'specialrule_id' => '21',
            'type' => '5+',
        ],
        [
            'weapon_id' => '106',
            'specialrule_id' => '21',
            'type' => '5+',
        ],
        [
            'weapon_id' => '106',
            'specialrule_id' => '15',
            'type' => '',
        ],
        [
            'weapon_id' => '107',
            'specialrule_id' => '15',
            'type' => '',
        ],
        [
            'weapon_id' => '108',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '108',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '109',
            'specialrule_id' => '21',
            'type' => 'ranged',
        ],
        [
            'weapon_id' => '109',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '110',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '110',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '111',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '111',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '112',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '112',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '114',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '114',
            'specialrule_id' => '15',
            'type' => '',
        ],
        [
            'weapon_id' => '116',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '116',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '118',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '118',
            'specialrule_id' => '25',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '120',
            'specialrule_id' => '21',
            'type' => 'square',
        ],
        [
            'weapon_id' => '120',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '124',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '125',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '126',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '126',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '126',
            'specialrule_id' => '10',
            'type' => '',
        ],
        [
            'weapon_id' => '126',
            'specialrule_id' => '13',
            'type' => '',
        ],
        [
            'weapon_id' => '127',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '128',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '129',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '131',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '131',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '131',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '134',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '136',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '136',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '138',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '141',
            'specialrule_id' => '21',
            'type' => 'ranged',
        ],
        [
            'weapon_id' => '141',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '141',
            'specialrule_id' => '10',
            'type' => '',
        ],
        [
            'weapon_id' => '141',
            'specialrule_id' => '13',
            'type' => '',
        ],
        [
            'weapon_id' => '142',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '143',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '144',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '146',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '147',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '150',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '150',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '151',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '153',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '155',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '156',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '157',
            'specialrule_id' => '21',
            'type' => 'square',
        ],
        [
            'weapon_id' => '157',
            'specialrule_id' => '12',
            'type' => '4+',
        ],
        [
            'weapon_id' => '158',
            'specialrule_id' => '12',
            'type' => '4+',
        ],
        [
            'weapon_id' => '159',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '162',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '163',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '165',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '166',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '167',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '167',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '167',
            'specialrule_id' => '26',
            'type' => '',
        ],
        [
            'weapon_id' => '168',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '168',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '168',
            'specialrule_id' => '26',
            'type' => '',
        ],
        [
            'weapon_id' => '169',
            'specialrule_id' => '21',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '169',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '170',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '170',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '171',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '171',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '172',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '172',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '173',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '173',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '175',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '175',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '177',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '178',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '179',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '179',
            'specialrule_id' => '25',
            'type' => 'square',
        ],
        [
            'weapon_id' => '180',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '181',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '181',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '183',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '183',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '185',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '186',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '185',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '187',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '187',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '188',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '188',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '189',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '190',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '190',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '192',
            'specialrule_id' => '12',
            'type' => '4+',
        ],
        [
            'weapon_id' => '193',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '194',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '195',
            'specialrule_id' => '21',
            'type' => 'square',
        ],
        [
            'weapon_id' => '195',
            'specialrule_id' => '12',
            'type' => '3+',
        ],
        [
            'weapon_id' => '196',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '197',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '197',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '197',
            'specialrule_id' => '26',
            'type' => '',
        ],
        [
            'weapon_id' => '198',
            'specialrule_id' => '10',
            'type' => '',
        ],
        [
            'weapon_id' => '198',
            'specialrule_id' => '15',
            'type' => '',
        ],
        [
            'weapon_id' => '198',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '199',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '199',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '204',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '205',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '207',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '207',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '208',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '208',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '208',
            'specialrule_id' => '25',
            'type' => '',
        ],
        [
            'weapon_id' => '209',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '211',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '212',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '212',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '212',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '213',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '214',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '215',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '215',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '216',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '217',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '218',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '218',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '220',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '223',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '224',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '224',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '225',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '226',
            'specialrule_id' => '21',
            'type' => '2 circle',
        ],
        [
            'weapon_id' => '226',
            'specialrule_id' => '4',
            'type' => 'triangle',
        ],
        [
            'weapon_id' => '226',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '226',
            'specialrule_id' => '10',
            'type' => '',
        ],
        [
            'weapon_id' => '226',
            'specialrule_id' => '13',
            'type' => '',
        ],
        [
            'weapon_id' => '227',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '228',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '229',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '229',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '229',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '230',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '231',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '232',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '232',
            'specialrule_id' => '26',
            'type' => '',
        ],
        [
            'weapon_id' => '233',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '233',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '234',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '235',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '237',
            'specialrule_id' => '1',
            'type' => '2',
        ],
        [
            'weapon_id' => '237',
            'specialrule_id' => '4',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '239',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '240',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '241',
            'specialrule_id' => '21',
            'type' => 'square',
        ],
        [
            'weapon_id' => '243',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '245',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '245',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '246',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '252',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '254',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '254',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '255',
            'specialrule_id' => '19',
            'type' => '',
        ],
        [
            'weapon_id' => '256',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '260',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '261',
            'specialrule_id' => '21',
            'type' => 'pentagon',
        ],
        [
            'weapon_id' => '261',
            'specialrule_id' => '25',
            'type' => 'circle',
        ],
        [
            'weapon_id' => '262',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '265',
            'specialrule_id' => '5',
            'type' => '',
        ],
        [
            'weapon_id' => '266',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '269',
            'specialrule_id' => '3',
            'type' => '',
        ],
        [
            'weapon_id' => '271',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '274',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '274',
            'specialrule_id' => '9',
            'type' => '',
        ],
        [
            'weapon_id' => '275',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '275',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '276',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '276',
            'specialrule_id' => '12',
            'type' => '5+',
        ],
        [
            'weapon_id' => '277',
            'specialrule_id' => '1',
            'type' => '1',
        ],
        [
            'weapon_id' => '277',
            'specialrule_id' => '22',
            'type' => '',
        ],
        [
            'weapon_id' => '278',
            'specialrule_id' => '8',
            'type' => '',
        ],
        [
            'weapon_id' => '278',
            'specialrule_id' => '6',
            'type' => '',
        ],
        [
            'weapon_id' => '278',
            'specialrule_id' => '7',
            'type' => '',
        ],
        [
            'weapon_id' => '280',
            'specialrule_id' => '19',
            'type' => '',
        ],
     ];

    public function run(): void
    {
        foreach ($this->weaponspecialrules as $data) {
            $weapon = Weapon::find($data['weapon_id']);
            $specialrule = Specialrule::find($data['specialrule_id']);
            $weapon->specialRules()->attach($specialrule, ['type' => $data['type']]);
        }
    }
}
