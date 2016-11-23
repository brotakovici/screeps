var roleHarvester = require('role.harvester')

var assignSource = function (harvester, harvesters) {
  var sources = harvester.room.find(FIND_SOURCES);
  var prevS = Number.MAX_SAFE_INTEGER;
  var sourceId;

  for(var i in sources)
  {
    var currS = _.filter(harvesters, (creep) => creep.memory.assignedSource == sources[i].id).length;
    if(currS <= prevS)
    {
      prevS = currS;
      console.log(sources[i].id)
      sourceId = sources[i].id;
    }
  }
  return sourceId;
}

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
          harvester.memory.assignedSource = assignSource(harvester, harvesters);
        }

        roleHarvester.run(harvester, null);
      }
    }
  }
}