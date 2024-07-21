// import ReactThreeFbxViewer from 'react-three-fbx-viewer'

// import { Canvas } from "@react-three/fiber";
// import { useLoader } from "@react-three/fiber";
// import { Environment, OrbitControls, useFBX } from "@react-three/drei";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import { Suspense } from "react";

import Kursi from "./assets/image/kursi.png"
import ProductObject from "./assets/3d/nakas-1.fbx"

export default function ProductThreeD(assetFbx) {

    const cameraPosition = {
        x: 100,
        y: 100,
        z: 500
    }

    // function Scene() {
    //     const fbx = useFBX(assetFbx)
    //     return <primitive object={fbx} scale={0.005}/>
    // }

    return (
        <>
            {/* <img src={Kursi} alt="kursi" />
            <ReactThreeFbxViewer
                cameraPosition={cameraPosition}
                url={assetFbx}
            /> */}
            {/* <Canvas>
                <Suspense fallback={null}>
                    <Scene />
                    <OrbitControls />
                    <Environment preset="sunset" background />
                </Suspense>
            </Canvas> */}
        </>
    )
}
