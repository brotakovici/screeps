var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
//var roleBuilder = require('role.builder');

module.exports.loop = function () {

    // Memory cleanup
    for(var name in Memory.creeps) {
         if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
         }
    }

    // Creep generation
    // code here
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    //console.log('Harvesters: ' + harvesters.length);
    //console.log('Upgraders: ' + upgraders.length);

    //console.log('Energy: ' + Room.energyAvailable);

    if(harvesters.length < 2)
    {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }

    if(upgraders.length < 1)
    {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }

    // Send everyone to work
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }

        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        /*
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        */

    }
}