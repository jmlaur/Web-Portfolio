import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.3, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#3df1f1' : 'white'), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
}



function Cloud({ count = 4, radius = 20 }) {
  //Spherical distribution
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    function word(j) {
      let test = ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'Node.js', 'Bootstrap', 'jQuery', 'Python'];
      return test[j]
      
    }
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), word(j)])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function App() {
  //Change Cloud count to however many words there are in the test list.
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud count={8} radius={20} /> 
      <OrbitControls autoRotate enablePan={false} enableZoom={false} />
    </Canvas>
  )
}
