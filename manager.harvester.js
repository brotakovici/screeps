var roleHarvester = require('role.harvester')


module.exports = {
  run: function(harvesters) {
    if(harvesters.length == 0){
      return;
    }
    else{
      for(var creep in harvesters)
      {
        var harvester = harvesters[creep];
        var sources = harvester.room.find(FIND_SOURCES);

        var prevS = 0;
        for(var source in sources)
        {
          console.log(source.id);
          var currS = return _.filter(harvesters, (creep) => creep.memory.sourceAssigned == source.id);
          if(currS < prevS)
          {
            prevS = currS;
            harvester.memory.sourceAssigned(source.id);
          }
        }

        roleHarvester.run(harvester, null);
      }
    }
  }
}