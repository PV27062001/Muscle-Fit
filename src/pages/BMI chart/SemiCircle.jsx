import React, { useState } from 'react';
import * as d3 from 'd3';

const SemiCircle = ({ value }) => {
  const [sliderValue, setSliderValue] = useState(value);

  // Set up dimensions and other variables
  const width = 400;
  const height = 200;
  const radius = 80;
  const arc = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

  // Create the SVG element
  const svg = d3.select('#semi-circle')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // Create the group element for the semi-circle
  const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height})`);

  // Create the data for the semi-circle
  const data = [0.25, 0.25, 0.25, 0.25];

  // Create the pie layout for the data
  const pie = d3.pie()
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .sort(null);

  // Create the arcs for the data
  const arcs = pie(data);

  // Add the arcs to the semi-circle
  g.selectAll('path')
    .data(arcs)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => {
      if (i === sliderValue) {
        return 'blue';
      }
      return `rgba(0, 0, 0, ${i + 1}/5)`;
    })
    .attr('stroke', '#fff');

  // Create the slider
  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div>
      <svg id="semi-circle" />
      <input
        type="range"
        min={0}
        max={3}
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default SemiCircle;
