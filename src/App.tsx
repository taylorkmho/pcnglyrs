import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Physics>
          {/* Add 3D objects here */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="royalblue" />
          </mesh>
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
