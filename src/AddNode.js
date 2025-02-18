// AddNode.js
import React, { useState } from 'react';

const AddNode = ({ addNode }) => {
  const [nodeName, setNodeName] = useState('');
  const [nodeBgColor, setNodeBgColor] = useState('#dbdbdb');

  const handleAddNode = () => {
    if (nodeName) {
      addNode(nodeName, nodeBgColor);
      setNodeName('');
      setNodeBgColor('#dbdbdb');
    }
  };

  return (
    <div>
      <h3>Add Node</h3>
      <label>Node Name:</label>
      <input
        type="text"
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
      />
      <br />
      <label>Node Background Color:</label>
      <input
        type="color"
        value={nodeBgColor}
        onChange={(e) => setNodeBgColor(e.target.value)}
      />
      <br />
      <button onClick={handleAddNode}>Add Node</button>
    </div>
  );
};

export default AddNode;
