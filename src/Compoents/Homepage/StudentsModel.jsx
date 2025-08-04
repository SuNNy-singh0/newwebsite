import { useGLTF } from '@react-three/drei'

export default function StudentsModel(props) {
  const { scene } = useGLTF('/models/Students.glb')
  return <primitive object={scene} scale={1.5} {...props} />
}