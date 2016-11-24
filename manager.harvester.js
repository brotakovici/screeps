var roleHarvester = require('role.harvester')
var utilManager = require('util.manager')

module.exports = {
  run: function(harvesters) {
    if(harvesters.length == 0){
      return;
    }
    else{
      for(var creep in harvesters)
      {
        var harvester = harvesters[creep];
        if(!harvester.memory.assignedSource)
        {
          harvester.memory.assignedSource = utilManager.assignSource(harvester, Game.creeps);
        }

        roleHarvester.run(harvester, null);
      }
    }
  }
}