function onLine(points) {
  console.log((points.length>2)?(points.every(function(item, index){return item[0]==points[0][0]||item[1]==points[0][1]})||points.every(function(item, index){return((points[index][0]-points[0][0])/(points[1][0]-points[0][0]))==((points[index][1]-points[0][1])/(points[1][1]-(points[0][1])))})):true);
  return (points.length>2)?(points.every(function(item, index){return item[0]==points[0][0]||item[1]==points[0][1]})||points.every(function(item, index){return((points[index][0]-points[0][0])/(points[1][0]-points[0][0]))==((points[index][1]-points[0][1])/(points[1][1]-(points[0][1])))})):true;
}

/*points.every(function(item, index){return item[0] == points[0][0] || item[1] == points[0][1]})||points.every(function(item, index){return ((points[index][0]-points[0][0])/(points[1][0]-points[0][0]))==((points[index][1]-points[0][1])/(points[1][1]-(points[0][1])))});*/



onLine([[1,2], [7, 4], [22, 9]]);