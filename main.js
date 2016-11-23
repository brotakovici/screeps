var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var environment = require('util.environment')
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

    var logging = true;
    if(logging)
    {
      console.log('Harvesters: ' + environment.getHarvesterCount());
      console.log('Upgraders: ' + environment.getUpgraderCount());
      console.log('Energy: ' + environment.getTotalEnergyLevel() + '/' + environment.getTotalEnergyCapacity());
      
    }


    if(environment.getHarvesterCount() < 2)
    {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }

    if(environment.getUpgraderCount() < 2)
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