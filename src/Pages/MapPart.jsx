import { Box } from "@mui/material";
import bkoigl from "bkoi-gl/src/index.js"
import 'bkoi-gl/dist/style/bkoi-gl.css'
import { useEffect, useRef, useState } from "react";

const MapPart = () => {

    const token = import.meta.env.VITE_BKOI_API
    bkoigl.accessToken = token;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(139.753);
    const [lat] = useState(35.6844);
    const [zoom] = useState(14);
    const [API_KEY] = useState(import.meta.env.VITE_BKOI_API);

    useEffect(() => {
        // if (map.current) return; // stops map from intializing more than once

        map.current = new bkoigl.Map({
            container: mapContainer.current,
            center: [90.3938010872331, 23.821600277500405],
            zoom: zoom
        });
        map.current.addControl(new bkoigl.NavigationControl(), 'top-left');

    }, [API_KEY, lng, lat, zoom]);
    return (
        <Box ref={mapContainer} sx={{
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            width: '100%',
            height: 'calc(100vh)',
            overflow: 'hidden'
        }}></Box>
    );
};

export default MapPart;