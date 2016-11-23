var getTargets = function(creep) {
  return creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
              return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                  structure.energy < structure.energyCapacity;
          }});
}

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep, source) {

        // Harvester is assigned a source
        if(source != null)
          creep.memory.assignedSource = source.id;

        // Harvester looks for source. If at source, gets resource, otherwise moves towards source.
        var selectedSource = Game.getObjectById(creep.memory.assignedSource)
        if(creep.carry.energy < creep.carryCapacity) {
            if(creep.harvest(selectedSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(selectedSource);
            }
        }
        // Harvester has inventory full, so it needs to go dump the resources. Looks for nearest resource dump. If at dump, dumps, otherwise moves towards it.
        else {
            var targets = getTargets(creep);

            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
};

module.exports = roleHarvester;