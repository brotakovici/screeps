var assignSource = function (creep, creeps) {
  var sources = creep.room.find(FIND_SOURCES);
  var prevS = Number.MAX_SAFE_INTEGER;
  var sourceId;

  for(var i in sources)
  {
    var currS = _.filter(creeps, (creep) => creep.memory.assignedSource == sources[i].id).length;
    if(currS <= prevS)
    {
      prevS = currS;
      //console.log(sources[i].id)
      sourceId = sources[i].id;
    }
  }
  return sourceId;
}

module.exports = {
  assignSource: assignSource
}