/**
 * Text instead of default circular nodes.
 * 
 *  import SpriteText from 'three-spritetext';
 *  nodeThreeObject={node => {
        const sprite = new SpriteText(node.name);
        sprite.color = node.color;
        sprite.textHeight = 7;
        return sprite;
      }}
 */

import React from 'react';
import { ForceGraph3D } from 'react-force-graph';

export default function PersonsGraph3D({ data }) {
  return (
    <ForceGraph3D
      graphData={data}
      linkCurvature={0.1}
      linkLabel={'Interactions'}
      linkDirectionalParticles="interactions"
      linkDirectionalParticleSpeed={d => d.interactions * 0.0007}
    />
  );
}
