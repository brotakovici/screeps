
var getSpawns = function() {
  return Game.spawns;
}

var getTotalEnergyLevel = function() {
  var spawns = Game.spawns;
  var energy = 0;
  for(var spawn in spawns)
  {
    energy += spawns[spawn];
  }
  return energy;
}

var getEnergyLevel = function() {

}

var getEnergySources = function() {
  return Game.sources;
}

var getEnergySourceCount = function() {
  return Game.sources.length;
}


var getHarvesters = function() {
  return _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
}

var getUpgraders = function() {
  return _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
}

var getHarvesterCount = function() {
  return _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester').length;
}

var getUpgraderCount = function() {
  return _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader').length;
}

module.exports = {
  getSpawns: getSpawns,
  getEnergySources: getEnergySources,
  getEnergySourceCount: getEnergySourceCount,
  getHarvesters: getHarvesters,
  getUpgraders: getUpgraders,
  getHarvesterCount: getHarvesterCount,
  getUpgraderCount: getUpgraderCount
}