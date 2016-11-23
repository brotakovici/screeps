
var getSpawns = function() {
  return Game.spawns;
}

var getTotalEnergyLevel = function() {
  var spawns = Game.spawns;
  var energy = 0;
  for(var spawn in spawns)
  {
    energy += spawns[spawn].energy;
  }
  return energy;
}

var getTotalEnergyCapacity = function() {
  var spawns = Game.spawns;
  var energy = 0;
  for(var spawn in spawns)
  {
    energy += spawns[spawn].energyCapacity;
  }
  return energy;
}

var getEnergySources = function() {
  if(Game.creeps.length == 0)
    return null;

  //return Game.creeps.first().find(FIND_SOURCES);
  return Game.creeps;
}

var getEnergySourceCount = function() {
  return getEnergySources().length;
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

var getBuilders = function() {
  return _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
}

var getBuilderCount = function() {
  return _.filter(Game.creeps, (creep) => creep.memory.role == 'builder').length;
}

module.exports = {
  getSpawns: getSpawns,
  getTotalEnergyLevel: getTotalEnergyLevel,
  getTotalEnergyCapacity: getTotalEnergyCapacity,
  getEnergySources: getEnergySources,
  getEnergySourceCount: getEnergySourceCount,
  getHarvesters: getHarvesters,
  getUpgraders: getUpgraders,
  getHarvesterCount: getHarvesterCount,
  getUpgraderCount: getUpgraderCount,
  getBuilders: getBuilders,
  getBuilderCount: getBuilderCount
}