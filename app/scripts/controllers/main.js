'use strict';

/**
 * @ngdoc function
 * @name dnd4eCardPrinterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dnd4eCardPrinterApp
 */
angular.module('dnd4eCardPrinterApp')
.controller('MainCtrl', function ($scope, $http, $sce, cardBuilder, $cookies) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.cards = [];
    $scope.fontSizing = 1;
    $scope.cardOutput = [];

    var cookies = $cookies.getObject('cards')
    if (cookies){
        $scope.cards = cookies;
    }

    $scope.$watch('newCard', function (newVal, oldVal){
        if (angular.isDefined(newVal)) {
            $scope.cardOutput = cardBuilder.buildLabels(newVal);
        }
    })

    $scope.addNewCard = function(){
        var cleaned = cardBuilder.stripHTML(angular.element('#newSingleCard').html())
        $scope.cards.push(cleaned);
        $cookies.putObject('cards', $scope.cards);
        $scope.newCard = '';
    }
    $scope.clearCookies = function (){
        $cookies.remove('cards');
    }
    $scope.tempCards = tempCards;
});

var tempCards = [
    {
        name: 'Adventurer\'s Kit',
        level: '',
        category: 'Gear',
        price: '15 gp ',
        weight: '33 lb',
        description: 'This kit includes a backpack, a bedroll, flint and steel, a belt pouch, two sunrods, ten days\' worth of trail rations, 50 feet of hempen rope, and a waterskin.'
    },
    {
        name: 'Caltrops',
        level: '',
        category: 'Gear',
        price: '10 gp ',
        weight: '1 lb',
        description: 'You can drop these pyramid-shaped metal spikes into a square adjacent to you (or gather them back up) as a standard action. Any creature moving on the caltrops must either treat the square as difficult terrain or become slowed (save ends). Creatures that are running can use only the latter option.'
    },
    {
        name: 'Climber\'s Kit',
        level: '',
        category: 'Gear',
        price: '2 gp ',
        weight: '11 lb',
        description: 'This kit includes all the items grouped beneath its entry: a grappling hook, a small hammer, and ten pitons. When you use a climber\'s kit, you gain a +2 bonus to Athletics checks for climbing.'
    },
    {
        name: 'Cold Iron Shackles',
        level: '',
        category: 'Gear',
        price: '30 gp ',
        weight: '10 lb',
        description: 'Cold iron is anathema to fey, and such a creature imprisoned within these shackles cannot teleport. Otherwise, these shackles function like any other.'
    },
    {
        name: 'Crook-eye',
        level: '',
        category: 'Gear',
        price: '50 gp ',
        weight: '2 lb',
        description: 'You can look around corners with the angled mirrors in this leather-bound wooden tube. You grant combat advantage and take a -2 penalty to Perception checks while using a crook-eye, but you can trace your line of sight from a square adjacent to you.'
    },
    {
        name: 'Delver\'s kit',
        level: '',
        category: 'Gear',
        price: '40 gp ',
        weight: '28 lb',
        description: 'This kit includes a crowbar, ten iron spikes, iron manacles, a miner\'s helmet, two sacks, surveyor\'s gear, and a ten-foot pole. Many purchasers supplement this kit with clinging essence of fire.'
    },
    {
        name: 'Desert Clothing',
        level: '',
        category: 'Gear',
        price: '5 gp ',
        weight: '4 lb',
        description: 'Wearing this mask and loose-fitting robes gives you a +2 bonus to Endurance checks to resist heat or to avoid the effects of persistent dust or sun glare.'
    },
    {
        name: 'Drill',
        level: '',
        category: 'Gear',
        price: '10 gp ',
        weight: '2 lb',
        description: 'This handheld tool comes with six tough metal bits. A drill can bore a hole through wood, stone, and even some metals with enough time and effort. A typical bit can drill through 6 inches of stone or 2 inches of iron (a process requiring up to 6 hours) before it breaks or its cutting power is exhausted. Each additional set of bits costs another 10 gp.'
    },
    {
        name: 'Flotation bladder',
        level: '',
        category: 'Gear',
        price: '2 gp ',
        weight: '1 lb',
        description: 'The risk of drowning in a cold underground lake leads some adventurers to carry these containers of cured animal hide. A character can blow into a flotation bladder to inflate it and then hang onto it to keep his or her head above water. If you\'re using a flotation bladder, failing an Athletics check to swim by 5 or more leaves you treading water instead of sinking.'
    },
    {
        name: 'Hacksaw',
        level: '',
        category: 'Gear',
        price: '5 gp ',
        weight: '1 lb',
        description: 'This thin-bladed saw can cut through tough material, even metal, although doing so can be quite slow. Harder materials dull the blade quickly, so a hacksaw is best used to cut thin or small objects. A single hacksaw blade can cut through a 1-inch-thick piece of iron (or larger objects of softer materials, at the DM\'s discretion) in up to 2 hours, before it breaks or its cutting power is exhausted. Each additional blade costs another 5 gp.'
    },
    {
        name: 'Hunter\'s Kit',
        level: '',
        category: 'Gear',
        price: '50 gp ',
        weight: '5 lb',
        description: 'This bundle contains bottles of various animal scents, a guide to edible flora, a small knife, snares, and other useful tools. A hunter\'s kit grants a +2 bonus to Nature checks made to forage.'
    },
    {
        name: 'Investigation gear',
        level: '',
        category: 'Gear',
        price: '40 gp ',
        weight: '4 lb',
        description: 'This bag of equipment includes containers made from different materials, brushes, dusts, tweezers, picks, probes, a magnifying glass, ink and quills, parchment, and a small journal. You gain a +2 bonus to Perception checks when you use the kit to search an area for specific details.'
    },
    {
        name: 'Listening Cone',
        level: '',
        category: 'Gear',
        price: '8 sp ',
        weight: '1 lb',
        description: 'Put the mouth of this cone of pressed iron against a flat surface and place your ear against its flattened tip to amplify the sounds you might hear beyond. This item grants a +2 bonus to Perception checks to listen through doors and walls.'
    },
    {
        name: 'Manacles, iron',
        level: '',
        category: 'Gear',
        price: '10 gp ',
        weight: '2 lb',
        description: 'When you put these shackles on a helpless or otherwise incapacitated creature, that creature is restrained until it escapes or is freed. The Acrobatics check to escape from these restraints is against a hard DC of the creature\'s level.<br />The Strength check to break the manacles is against a DC that depends on the quality of the manacles, whether iron (DC 24) or adamantine (DC 31).'
    },
    {
        name: 'Pitons (10)',
        level: '',
        category: 'Gear',
        price: '5 sp ',
        weight: '5 lb'
    },
    {
        name: 'Rubbing Kit',
        level: '',
        category: 'Gear',
        price: '5 gp ',
        weight: '1 lb',
        description: 'The materials in this scroll case enable you to transfer an image of ancient runes or carvings onto a different surface to be deciphered later. The case contains several thin sheets of parchment and a stick of soft charcoal. After placing a piece of parchment over the surface to be copied, rub the charcoal against it while applying gentle pressure. With a standard action, you can make a rubbing covering 1 square foot. One kit contains enough material for ten such rubbings.'
    },
    {
        name: 'Signal ammunition (5)',
        level: '',
        category: 'Ammunition',
        price: '15 gp ',
        weight: '5 lb',
        description: 'These arrows, sling bullets, or crossbow bolts incorporate sunrod materials that ignite when the ammunition is fired, and are useful for coordinating maneuvers or signaling for help.'
    },
    {
        name: 'Sun balm',
        level: '',
        category: 'Gear',
        price: '50 gp ',
        weight: '1 lb',
        description: 'Travelers value sun balm to ward against the sun\'s pernicious effect. Sun balm grants a +2 bonus to Endurance checks made to endure heat.'
    },
    {
        name: 'Thieves\' Tools',
        level: '',
        category: 'Gear',
        price: '20 gp ',
        weight: '1 lb',
        description: 'To use the Thievery skill properly, you need the right picks and pries, skeleton keys, clamps, and so on. Thieves\' tools grant a +2 bonus to Thievery checks to open a lock or to disable a trap.'
    },
    {
        name: 'Waterskin',
        level: '',
        category: 'Gear',
        price: '1 gp ',
        weight: '4 lb'
    }
];