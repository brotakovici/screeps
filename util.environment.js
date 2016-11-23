
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
  getHarvesters: getHarvesters,
  getUpgraders: getUpgraders,
  getHarvesterCount: getHarvesterCount,
  getUpgraderCount: getUpgraderCount,
  getBuilders: getBuilders,
  getBuilderCount: getBuilderCount
}