import React, { useEffect, useRef, useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const ResponsiveSpeedometer = (props) => {
    const containerRef = useRef(null);
    const [dimension, setDimension] = useState({ width: 300, height: 180 });

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0]) {
                const { width } = entries[0].contentRect;
                if (width > 0) {
                    setDimension({
                        width: width,
                        height: width * 0.6 // Maintain 0.6 aspect ratio
                    });
                }
            }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ReactSpeedometer
                {...props}
                width={dimension.width}
                height={dimension.height}
                fluidWidth={false} // Force disable lib's own responsiveness
            />
        </div>
    );
};

export default ResponsiveSpeedometer;
