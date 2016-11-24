var logging = true;

var environment = require('util.environment');
var utilManager = require('util.manager');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var managerHarvester = require('manager.harvester');
var managerUpgrader = require('manager.upgrader');
var managerBuilder = require('manager.builder');

module.exports.loop = function () {

    // Memory cleanup
    for(var name in Memory.creeps) {
         if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
         }
    }

    if(logging)
    {
      console.log('Harvesters: ' + environment.getHarvesterCount());
      console.log('Upgraders: ' + environment.getUpgraderCount());
      console.log('Builders: ' + environment.getBuilderCount());
      console.log('Energy: ' + environment.getTotalEnergyLevel() + '/' + environment.getTotalEnergyCapacity());
    }

    if(environment.getHarvesterCount() < 4)
    {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester', state: 'collecting', requireAssignment: true});
        if(logging) console.log('Spawning new harvester: ' + newName);
    }

    if(environment.getUpgraderCount() < 4)
    {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader', requireAssignment: true});
        if(logging) console.log('Spawning new upgrader: ' + newName);
    }

    if(environment.getBuilderCount() < 0)
    {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder', requireAssignment: true});
        if(logging) console.log('Spawning new builder: ' + newName);
    }

    if(environment.getHarvesterCount() > 0)
    {
      var harvesters = environment.getHarvesters();
      managerHarvester.run(harvesters);
    }

    if(environment.getUpgraderCount() > 0)
    {
      var upgraders = environment.getUpgraders();
      managerUpgrader.run(upgraders);
    }

    // Send everyone to work
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'builder') {
          if(!creep.memory.assignedSource)
          {
            creep.memory.assignedSource = utilManager.assignSource(creep, Game.creeps);
          }
          roleBuilder.run(creep);
        }

    }
}