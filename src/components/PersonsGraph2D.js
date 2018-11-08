
/**
 * https://github.com/vasturiano/react-force-graph/
 * Rendering text instead of default circular nodes.
 * nodeCanvasObject={(node, ctx, globalScale) => {
        const label = node.name;
        const fontSize = 20/globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = node.color;
        ctx.fillText(label, node.x, node.y);
      }}
 */
import React from 'react';
import { ForceGraph2D } from 'react-force-graph';

export default function PersonsGraph2D({ data }) {

  return (
    <ForceGraph2D
      graphData={data}
      linkCurvature={0.1}
      linkLabel={'Interactions'}
      linkDirectionalParticles="interactions"
      linkDirectionalParticleSpeed={d => d.interactions * 0.0005}
    />
  );
}
