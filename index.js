// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
   if (`${blocks}` <= 42){
       return 42 - `${blocks}`;
   } else if (`${blocks}` >42 ){
       return `${blocks}` -42 ;
   } 
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264;
}
function distanceTravelledInFeet(n, s){
  if (`${n}`<`${s}`){
  return (`${s}`-`${n}`)*264;}
  else if (`${s}`<`${n}`){
      return ((`${n}`-`${s}`)*264)
  }
}
function calculatesFarePrice(n,s){
    const distance= distanceTravelledInFeet(n,s)
    if (distance <=400){
        return 0;
    } else if (distance >400 &&  distance <= 2000){
        return ((distance-400) *.02);
    } else if (distance  >=2001 && distance <2501){
        return 25;
    } else distance <= 2500 
        return `cannot travel that far`;
    
}
