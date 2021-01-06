import React from "react";
import { useBox } from "use-cannon";

/*
 * 床
 */
const Floor = ({ position, args }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    mass: 0,
    args: args,
    position: position,
    name: "floor",
  }));
  return (
    <mesh ref={ref} name="floor">
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={"lightgreen"} />
    </mesh>
  );
};
export default Floor;
