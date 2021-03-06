var getTargets = function(creep) {
  return creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
              return structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN;
          }});
}

var connectSources = function(creep){
  creep.say('Connecting');
  var constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);
  var x = creep.pos.x;
  var y = creep.pos.y;
  var on = _.filter(constructionSites, (site) => site.pos.x == x && site.pos.y == y);
  if(on.length == 0)
  {
    creep.room.createConstructionSite(x, y, STRUCTURE_ROAD);
  }
  else
  {
    var targets = getTargets(creep);
    if(targets.length > 0) {
        if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0]);
        }
    }
  }
}

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('building');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }else{
              connectSources(creep);
            }

	    }
	    else {
	        var source = Game.getObjectById(creep.memory.assignedSource);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
	    }
	}
};

module.exports = roleBuilder;