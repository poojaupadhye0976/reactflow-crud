// DeleteNode.js
import React from 'react';

const DeleteNode = ({ nodeId, deleteNode }) => {
  return (
    <div>
      <h3>Delete Node</h3>
      <p>Are you sure you want to delete node {nodeId}?</p>
      <button onClick={() => deleteNode(nodeId)}>Delete</button>
    </div>
  );
};

export default DeleteNode;
