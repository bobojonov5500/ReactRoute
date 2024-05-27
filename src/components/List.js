import React, { useState } from "react";
function List() {
  return (
    <div className="flex flex-col  max-w-screen-xl m-auto">
      <h1 className="text-2xl pt-4">Search</h1>
      <input
        type="text"
        className="border-2  mt-2 px-1"
        placeholder="search any..."
      />
      <div className="grid grid-cols-4 gap-4 py-4 "></div>
    </div>
  );
}

export default List;
