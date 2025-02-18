// UpdateNode.js
import React, { useState, useEffect } from 'react';
import { ReactFlow, useNodesState, useEdgesState, Background } from '@xyflow/react';
import AddNode from './AddNode';
import EditNode from './EditNode';
import DeleteNode from './DeleteNode';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 }, style: { backgroundColor: '#dbdbdb' } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 }, style: { backgroundColor: '#dbdbdb' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const UpdateNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Add a new node
  const addNode = (name, bgColor) => {
    const newNode = {
      id: `${nodes.length + 1}`, // Ensure unique ID
      data: { label: name },
      position: { x: 200, y: 200 }, // Set default position
      style: { backgroundColor: bgColor },
    };
    setNodes((nds) => [...nds, newNode]); // Update nodes state
  };

  // Edit an existing node
  const updateNode = (id, name, bgColor) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: { label: name },
            style: { backgroundColor: bgColor },
          };
        }
        return node;
      })
    );
  };

  // Delete a node
  const deleteNode = (id) => {
    setNodes((nds) => nds.filter((node) => node.id !== id));
    setEdges((eds) => eds.filter((edge) => edge.source !== id && edge.target !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '80%', height: '500px' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          defaultViewport={defaultViewport}
          minZoom={0.2}
          style={{ background: '#F7F9FB' }}
          maxZoom={4}
          attributionPosition="bottom-left"
          fitView
        >
          <Background />
        </ReactFlow>
      </div>

      <AddNode addNode={addNode} />
      <EditNode node={nodes[0]} updateNode={updateNode} /> {/* Edit the first node for example */}
      <DeleteNode nodeId={nodes[0].id} deleteNode={deleteNode} /> {/* Delete the first node for example */}
    </div>
  );
};

export default UpdateNode;
