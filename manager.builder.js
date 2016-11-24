var roleBuilder = require('role.builder')
var utilManager = require('util.manager')

module.exports = {
  run: function(builders) {
    if(builders.length == 0){
      return;
    }
    else{
      for(var creep in builders)
      {
        var builder = builders[creep];
        if(!builder.memory.assignedSource)
        {
          builder.memory.assignedSource = utilManager.assignSource(builder, Game.creeps);
        }

        roleBuilderg.run(builder, null);
      }
    }
  }
}