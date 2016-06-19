'use strict';

/**
 * @ngdoc function
 * @name dnd4eCardPrinterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dnd4eCardPrinterApp
 */
angular.module('dnd4eCardPrinterApp')
.controller('MainCtrl', function ($scope, $http, $sce, cardBuilder, $cookies, $localStorage, $sessionStorage) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.cards = [];
    $scope.fontSizing = 1;
    $scope.cardOutput = [];

    $scope.nameCheck =          true;
    $scope.nameLvl =            true;
    $scope.nameCategory =       true;
    $scope.namePrice =          true;
    $scope.nameWeight =         true;
    $scope.nameDescription =    true;






    // Watches
    // ==========================================================================
    if ($localStorage.cards){
        loadStorage();
    }
    $scope.$watch('newCardString', function (newVal, oldVal){
        if (angular.isDefined(newVal)) {
            $scope.newCardObject = cardBuilder.createObject(newVal);
        }
    });


    // Active
    // ==========================================================================
    $scope.addNewCard = function(string, font){
        var cleaned = cardBuilder.createObject(string);
        cleaned.fontSize = font;
        $scope.cards.push(cleaned);
        saveStorage();
        $scope.newCardString = '';
    };
    $scope.removeCard = function (index) {
        console.log(index);
        $scope.cards.splice(index, 1);
        console.log($scope.cards);
        saveStorage();
    };
    $scope.addDefaults = function (argument) {
        $scope.cards = tempCards;
        saveStorage();
    }


    // Passive
    // ==========================================================================
    $scope.beginsWithCarat = function (html){
        if (html) {
            return !html.startsWith('\<strong\>');
        } else {
            return true;
        }
    };
    $scope.multipuleOfNine = function (index) {
        return (index % 9 === 8);
    };


    // Configurations
    // ==========================================================================
    // UiSortable configuration options
    $scope.sortingOptions = {
        // connectWith: '.connected-canvas-container',
        handle: '.draghandle',
        // axis: 'y',
        // zIndex: 1000,
        // containment: '.grouping .panel',
        // containment: '#'+$scope.groupObject.id,
        start: function (e, ui) {
            // console.log('start e', e);console.log('start ui', ui);
        },
        sort: function (e, ui ) {
            // console.log('sort e', e);console.log('sort ui', ui);
        },
        update: function (e, ui) {
            // console.log('update e', e);console.log('update ui', ui);
            // if ($(ui.item[0]).hasClass('component')) {
            //     // console.log(ui.item.scope())
            //     // console.log(ui.item.scope().widget)
            //     var component = ui.item.sortable.model;
            //     var fromIndex = ui.item.sortable.index;
            //     var toIndex = ui.item.sortable.dropindex;
            //     // console.log('canvasOptions moved from',fromIndex, 'to',toIndex);
            //     // console.log('$scope.activeIndex',$scope.activeIndex);

            //     if (angular.isNumber($scope.activeIndex) && $scope.activeIndex === fromIndex) {
            //         $scope.activeIndex = toIndex;
            //     } else if (angular.isNumber($scope.activeIndex) && $scope.activeIndex < fromIndex && $scope.activeIndex >= toIndex) {
            //         $scope.activeIndex = $scope.activeIndex + 1;
            //     } else if (angular.isNumber($scope.activeIndex) && $scope.activeIndex > fromIndex && $scope.activeIndex <= toIndex) {
            //         $scope.activeIndex = $scope.activeIndex - 1;
            //     }
            //     $scope.updateComponentPosition(component, toIndex);
            // }
        },
        stop: function (e, ui) {
            // console.log('stop e',e);console.log('stop ui',ui);
        }
    };


    // Local
    // ==========================================================================
    function saveStorage() {
        console.log($scope.cards);
        $localStorage.cards = $scope.cards;
    }
    function loadStorage() {
        $scope.cards = $localStorage.cards;
    }
})
.filter('reverse', function() {
  return function(items) {
    if (angular.isArray(items)) {
        return items.slice().reverse();
    }
  };
});

var tempCards = [
    {
        name: 'Adventurer\'s Kit',
        category: 'Gear',
        price: '15 gp ',
        weight: '33 lb',
        fontSize: 0.8,
        description: 'This kit includes a backpack, a bedroll, flint and steel, a belt pouch, two sunrods, ten days\' worth of trail rations, 50 feet of hempen rope, and a waterskin.'
    },
    {
        name: 'Caltrops',
        category: 'Gear',
        price: '10 gp ',
        weight: '1 lb',
        fontSize: 0.8,
        description: 'You can drop these pyramid-shaped metal spikes into a square adjacent to you (or gather them back up) as a standard action. Any creature moving on the caltrops must either treat the square as difficult terrain or become slowed (save ends). Creatures that are running can use only the latter option.'
    },
    {
        name: 'Climber\'s Kit',
        category: 'Gear',
        price: '2 gp ',
        weight: '11 lb',
        fontSize: 0.8,
        description: 'This kit includes all the items grouped beneath its entry: a grappling hook, a small hammer, and ten pitons. When you use a climber\'s kit, you gain a +2 bonus to Athletics checks for climbing.'
    },
    {
        name: 'Cold Iron Shackles',
        category: 'Gear',
        price: '30 gp ',
        weight: '10 lb',
        fontSize: 0.8,
        description: 'Cold iron is anathema to fey, and such a creature imprisoned within these shackles cannot teleport. Otherwise, these shackles function like any other.'
    },
    {
        name: 'Crook-eye',
        category: 'Gear',
        price: '50 gp ',
        weight: '2 lb',
        fontSize: 0.8,
        description: 'You can look around corners with the angled mirrors in this leather-bound wooden tube. You grant combat advantage and take a -2 penalty to Perception checks while using a crook-eye, but you can trace your line of sight from a square adjacent to you.'
    },
    {
        name: 'Delver\'s kit',
        category: 'Gear',
        price: '40 gp ',
        weight: '28 lb',
        fontSize: 0.8,
        description: 'This kit includes a crowbar, ten iron spikes, iron manacles, a miner\'s helmet, two sacks, surveyor\'s gear, and a ten-foot pole. Many purchasers supplement this kit with clinging essence of fire.'
    },
    {
        name: 'Desert Clothing',
        category: 'Gear',
        price: '5 gp ',
        weight: '4 lb',
        fontSize: 0.8,
        description: 'Wearing this mask and loose-fitting robes gives you a +2 bonus to Endurance checks to resist heat or to avoid the effects of persistent dust or sun glare.'
    },
    {
        name: 'Drill',
        category: 'Gear',
        price: '10 gp ',
        weight: '2 lb',
        fontSize: 0.8,
        description: 'This handheld tool comes with six tough metal bits. A drill can bore a hole through wood, stone, and even some metals with enough time and effort. A typical bit can drill through 6 inches of stone or 2 inches of iron (a process requiring up to 6 hours) before it breaks or its cutting power is exhausted. Each additional set of bits costs another 10 gp.'
    },
    {
        name: 'Flotation bladder',
        category: 'Gear',
        price: '2 gp ',
        weight: '1 lb',
        fontSize: 0.8,
        description: 'The risk of drowning in a cold underground lake leads some adventurers to carry these containers of cured animal hide. A character can blow into a flotation bladder to inflate it and then hang onto it to keep his or her head above water. If you\'re using a flotation bladder, failing an Athletics check to swim by 5 or more leaves you treading water instead of sinking.'
    },
    {
        name: 'Hacksaw',
        category: 'Gear',
        price: '5 gp ',
        weight: '1 lb',
        fontSize: 0.8,
        description: 'This thin-bladed saw can cut through tough material, even metal, although doing so can be quite slow. Harder materials dull the blade quickly, so a hacksaw is best used to cut thin or small objects. A single hacksaw blade can cut through a 1-inch-thick piece of iron (or larger objects of softer materials, at the DM\'s discretion) in up to 2 hours, before it breaks or its cutting power is exhausted. Each additional blade costs another 5 gp.'
    },
    {
        name: 'Hunter\'s Kit',
        category: 'Gear',
        price: '50 gp ',
        weight: '5 lb',
        fontSize: 0.8,
        description: 'This bundle contains bottles of various animal scents, a guide to edible flora, a small knife, snares, and other useful tools. A hunter\'s kit grants a +2 bonus to Nature checks made to forage.'
    },
    {
        name: 'Investigation gear',
        category: 'Gear',
        price: '40 gp ',
        weight: '4 lb',
        fontSize: 0.8,
        description: 'This bag of equipment includes containers made from different materials, brushes, dusts, tweezers, picks, probes, a magnifying glass, ink and quills, parchment, and a small journal. You gain a +2 bonus to Perception checks when you use the kit to search an area for specific details.'
    },
    {
        name: 'Listening Cone',
        category: 'Gear',
        price: '8 sp ',
        weight: '1 lb',
        fontSize: 0.8,
        description: 'Put the mouth of this cone of pressed iron against a flat surface and place your ear against its flattened tip to amplify the sounds you might hear beyond. This item grants a +2 bonus to Perception checks to listen through doors and walls.'
    },
    {
        name: 'Manacles, iron',
        category: 'Gear',
        price: '10 gp ',
        weight: '2 lb',
        fontSize: 0.8,
        description: 'When you put these shackles on a helpless or otherwise incapacitated creature, that creature is restrained until it escapes or is freed. The Acrobatics check to escape from these restraints is against a hard DC of the creature\'s level.<br />The Strength check to break the manacles is against a DC that depends on the quality of the manacles, whether iron (DC 24) or adamantine (DC 31).'
    },
    {
        name: 'Pitons (10)',
        category: 'Gear',
        price: '5 sp ',
        weight: '5 lb',
        fontSize: 0.8,
        description: ''
    },
    {
        name: 'Rubbing Kit',
        category: 'Gear',
        price: '5 gp ',
        weight: '1 lb',
        fontSize: 0.8,
        description: 'The materials in this scroll case enable you to transfer an image of ancient runes or carvings onto a different surface to be deciphered later. The case contains several thin sheets of parchment and a stick of soft charcoal. After placing a piece of parchment over the surface to be copied, rub the charcoal against it while applying gentle pressure. With a standard action, you can make a rubbing covering 1 square foot. One kit contains enough material for ten such rubbings.'
    },
    {
        name: 'Signal ammunition (5)',
        category: 'Ammunition',
        price: '15 gp ',
        weight: '5 lb',
        fontSize: 0.8,
        description: 'These arrows, sling bullets, or crossbow bolts incorporate sunrod materials that ignite when the ammunition is fired, and are useful for coordinating maneuvers or signaling for help.'
    },
    {
        name: 'Sun balm',
        category: 'Gear',
        price: '50 gp ',
        weight: '1 lb',
        fontSize: 0.8,
        description: 'Travelers value sun balm to ward against the sun\'s pernicious effect. Sun balm grants a +2 bonus to Endurance checks made to endure heat.'
    },
    {
        name: 'Thieves\' Tools',
        category: 'Gear',
        price: '20 gp ',
        weight: '1 lb',
        fontSize: 0.8,
        description: 'To use the Thievery skill properly, you need the right picks and pries, skeleton keys, clamps, and so on. Thieves\' tools grant a +2 bonus to Thievery checks to open a lock or to disable a trap.'
    },
    {
        name: 'Waterskin',
        category: 'Gear',
        price: '1 gp ',
        weight: '4 lb',
        fontSize: 0.8,
        description: ''
    }
];