var roleUpgrader = require('role.upgrader')
var utilManager = require('util.manager')

module.exports = {
  run: function(upgraders) {
    if(upgraders.length == 0){
      return;
    }
    else{
      for(var creep in upgraders)
      {
        var upgrader = upgraders[creep];
        if(!upgrader.memory.assignedSource)
        {
          upgrader.memory.assignedSource = utilManager.assignSource(upgrader, Game.creeps);
        }

        roleUpgrader.run(harvester, null);
      }
    }
  }
}