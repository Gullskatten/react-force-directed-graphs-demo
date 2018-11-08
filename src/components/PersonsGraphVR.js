import React from 'react';
import { ForceGraphVR } from 'react-force-graph';

export default function PersonsGraphVR({ data }) {

  return (
    <ForceGraphVR
      graphData={data}
      linkDirectionalParticles="interactions"
    />
  );
}
