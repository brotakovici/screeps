var roleHarvester = require('role.harvester')

module.exports = {
  run: function(harvesters) {
    if(harvesters.length == 0){
      return;
    }
    else{
      var sources = harvesters[harvesters[0]].find(FIND_SOURCES);
    }
  }
}