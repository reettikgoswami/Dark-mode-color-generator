import contrast from "get-contrast";

let randomColorGenerator =()=>{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let generatColorPair = ()=>{
  let color1 = randomColorGenerator();
  let color2 = randomColorGenerator();
  while(!contrast.isAccessible(color1 , color2)){
     color1 = randomColorGenerator();
     color2 = randomColorGenerator();
  }
  return [color1 , color2];
}

export default generatColorPair ;