import { useEffect } from "react";
import { Path, Tool } from "paper";
import Paper from "paper";
const Sketch = (props: any) => {
  Paper.install(window);
  // Keep global references to both tools, so the HTML
  // links below can access them.
  var tool1, tool2, reset;
  var path: any;
  useEffect(() => {
    var myCanvas: any = document.getElementById("myCanvas");
    Paper.setup(myCanvas);
  }, []);
  function onMouseDown(event: any) {
    path = new Path();
    path.strokeColor = "rebeccaPurple";
    path.strokeWidth = 3;
    path.add(event.point);
  }
useEffect(() =>{
   tool1 = new Tool();
  tool1.onMouseDown = onMouseDown;

  tool1.onMouseDrag = function (event: any) {
    path.add(event.point);
  };

  tool2 = new Tool();
  tool2.minDistance = 20;
  tool2.onMouseDown = onMouseDown;

  tool2.onMouseDrag = function (event: any) {
    // Use the arcTo command to draw cloudy lines
    path.arcTo(event.point);
  };
  (props.tool=='tool1')?tool1.activate():tool2.activate();
},[props.tool])
 

  // View.draw();
  return null;
};
export default Sketch;
