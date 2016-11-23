var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep, source) {

        // Harvester is assigned a source
        if(source != null)
          creep.memory.sourceAssigned = source;

        if(creep.carry.energy < creep.carryCapacity) {
            if(creep.harvest(creep.memory.sourceAssigned) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.memory.sourceAssigned);
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
};

module.exports = roleHarvester;