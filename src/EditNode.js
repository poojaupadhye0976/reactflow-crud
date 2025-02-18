// EditNode.js
import React, { useState } from 'react';

const EditNode = ({ node, updateNode }) => {
  const [nodeName, setNodeName] = useState(node.data.label);
  const [nodeBgColor, setNodeBgColor] = useState(node.style.backgroundColor);

  const handleUpdateNode = () => {
    updateNode(node.id, nodeName, nodeBgColor);
  };

  return (
    <div>
      <h3>Edit Node</h3>
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
      <button onClick={handleUpdateNode}>Update Node</button>
    </div>
  );
};

export default EditNode;
