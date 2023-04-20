import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function SimpleGaugeChart({ value, min = 0, max = 100, label = '' }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Set up the chart dimensions
    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2;

    // Set up the scale
    const scale = d3.scaleLinear().domain([min, max]).range([-Math.PI / 2, Math.PI / 2]);

    // Set up the arc
    const arc = d3
      .arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius * 0.8)
      .startAngle(-Math.PI / 2)
      .endAngle(scale(value));

    // Add the background arc
    svg
      .append('path')
      .datum({ endAngle: Math.PI / 2 })
      .attr('class', 'background')
      .attr('d', arc)
      .attr('transform', `translate(${centerX}, ${centerY})`);

    // Add the foreground arc
    svg
      .append('path')
      .datum({ endAngle: scale(value) })
      .attr('class', 'foreground')
      .attr('d', arc)
      .attr('transform', `translate(${centerX}, ${centerY})`);

    // Add the text label
    svg
      .append('text')
      .attr('class', 'label')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr('font-size', '2em')
      .attr('font-weight', 'bold')
      .text(value)
      .attr('transform', `translate(${centerX}, ${centerY + radius * 0.2})`);

    // Add the label text
    svg
      .append('text')
      .attr('class', 'label-text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr('font-size', '1em')
      .text(label)
      .attr('transform', `translate(${centerX}, ${centerY - radius * 0.2})`);
  }, [value, min, max, label]);

  return <svg ref={svgRef} width="200" height="200"></svg>;
}

export default SimpleGaugeChart;
