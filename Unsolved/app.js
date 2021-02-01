const svgHeight = 300
const svgWidth = 300

const rectY = 5
const rectWidth = 20
const rectPadding = 5

const makeRectangles = data => {
  svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("fill", "#FF00FF")
  .attr("stroke", "#000000")
  .attr("x", (d, i) => rectPadding + (rectWidth + rectPadding) * i)
  .attr("y", d => svgHeight - (d.hours * 3) - rectPadding)
  .attr("height", d => d.hours * 3)
  .attr("width", rectWidth)
}

let svg =d3.select("body")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)

d3.csv("hours-of-tv-watched.csv").then(
  data => {
    console.log(data)
    makeRectangles(data)

    
    
  }
)
