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
  getHarvesters: getHarvesters,
  getUpgraders: getUpgraders,
  getHarvesterCount: getHarvesterCount,
  getUpgraderCount: getUpgraderCount
}