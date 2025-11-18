import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene(){
  const mountRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(()=>{
    const mount = mountRef.current
    if(!mount) return
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.z = 6
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mount.appendChild(renderer.domElement)
    
    // Lights
    const dir = new THREE.DirectionalLight(0xffffff, 0.9)
    dir.position.set(5,5,5)
    scene.add(dir)
    scene.add(new THREE.AmbientLight(0xffffff, 0.3))
    
    // Futuristic sculpture: icosahedron + wireframe
    const geom = new THREE.IcosahedronGeometry(1.6, 2)
    const mat = new THREE.MeshStandardMaterial({ 
      color: 0x16A085, 
      metalness: 0.6, 
      roughness: 0.2, 
      emissive: 0x022 
    })
    const mesh = new THREE.Mesh(geom, mat)
    scene.add(mesh)
    
    const wire = new THREE.Mesh(
      geom, 
      new THREE.MeshBasicMaterial({ 
        color: 0x2980B9, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.6 
      })
    )
    scene.add(wire)
    
    let req: number | null = null
    const animate = ()=>{
      mesh.rotation.y += 0.006
      mesh.rotation.x += 0.003
      wire.rotation.y -= 0.008
      renderer.render(scene, camera)
      req = requestAnimationFrame(animate)
    }
    animate()
    
    const onResize = ()=>{
      renderer.setSize(mount.clientWidth, mount.clientHeight)
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)
    
    return ()=>{
      if(req) cancelAnimationFrame(req)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geom.dispose()
      mat.dispose()
      if (mount && renderer.domElement) mount.removeChild(renderer.domElement)
    }
  },[])
  
  return <div ref={mountRef} style={{ width:'100%', height:'360px' }} className="rounded-lg overflow-hidden" />
}
