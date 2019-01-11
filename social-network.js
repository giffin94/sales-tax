var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// List everyone and for each of them, list the names of who they follow and who follows them

function showNetwork(){
  for(var friend in data){
     console.log("\n" + data[friend].name + ' follows: ');
     showFollowing(friend);
     console.log("\n" + data[friend].name + ' is followed by: ');
     showFollowers(friend);
    }
}
function showFollowing(friend){
  for(var i = 0; i < data[friend].follows.length; i++){
    var fName = data[friend].follows[i];
    console.log(data[fName].name);
    if(data[friend].followed === undefined){
      data[friend].followed = [];
    }
    data[friend].followed.push(data[fName].name);
  }
}
function showFollowers(friend){
  for(var i = 0; i < data[friend].followed.length; i++) {
    return data[friend].followed[i];
  }
}

function getFollowers(friend) {
  for(var i = 0; i < data[friend].follows.length; i++){
    let fName = data[friend].follows[i];
    if(data[friend].followed === undefined){
      data[friend].followed = [];
    }
    data[friend].followed.push(data[fName].name);
  }
}


// Identify who follows the most people

function followsMost(){
  var aTrack = 0;
  var vFollow = "";
  for(var friend in data) {
     if(data[friend].follows.length > aTrack){
      aTrack = data[friend].follows.length;
      vFollow = data[friend].name;
     }
  }
  return vFollow;
}

// Identify who has the most followers

function followedByMost(){
  var aTrack = 0;
  var vFollowed = "";
  for(var friend in data) {
    getFollowers(friend);
     if(data[friend].followed.length > aTrack){
      aTrack = data[friend].followed.length;
      vFollowed = data[friend].name;
     }
  }
  return vFollowed;
}

// function followedByOld(){
//   var aTrack = 0;
//   var mostFollow = "0";
//   var vFollow = "";
//   for(var friend in data) {
//       aTrack = 0;
//      data[friend].followed.forEach(function(iD) {
//       if(data[iD].age > 30){
//         aTrack++;
//       }
//      });
//     data[friend].followedOver30 = aTrack;
//   }
//   for(var friend in data) {
//     if(data[friend].followedOver30 > mostFollow) {
//       mostFollow = data[friend].followsOver30;
//       vFollow = data[friend].name;
//     }

//   }

//   return vFollow;

// }

function followsMostOld(){
  var aTrack = 0;
  var mostFollow = "0";
  var vFollow = "";
  for(var friend in data) {
      aTrack = 0;
     data[friend].follows.forEach(function(iD) {
      if(data[iD].age > 30){
        aTrack++;
      }
     });
    data[friend].followsOver30 = aTrack;
  }
  for(var friend in data) {
    if(data[friend].followsOver30 > mostFollow) {
      mostFollow = data[friend].followsOver30;
      vFollow = data[friend].name;
    }

  }

  return vFollow;

}


// Identify who has the most followers over 30

// Identify who follows the most people over 30

// List those who follow someone that doesn't follow them back

// List everyone and their reach (sum of # of followers and # of followers of followers)

showNetwork();
console.log("\n" + followsMost() + " follows the most people.");
//console.log("\n" + followedByMost() + " is followed by the most people.");
console.log("\n" + followsMostOld() + " follows the most people over 30.");
console.log("\n" + followedByOld() + " is followed by the the most people over 30.");