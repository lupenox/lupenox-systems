import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

const CyberGlobe = () => {
    const globeRef = useRef(null);

    useEffect(() => {
        if (!globeRef.current) return;

        const world = Globe()(globeRef.current)
            .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
            .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
            .backgroundColor("#000000") // Ensures black background
            .width(600) // Adjust globe size to fit better
            .height(600);

    }, []);

    return (
        <div className="globe-container">
            <div ref={globeRef} className="globe-render" />
        </div>
    );
};

export default CyberGlobe;
