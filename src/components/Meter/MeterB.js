import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

export default function MeterB() {
    return (
        <>
            <div className="gauge-container">
                <div className="gauge">
                    <h3>Zone-A Power</h3>
                    <div className="power">
                        <ReactSpeedometer
                            maxValue={1000}
                            value={100}
                            segments={2}
                            currentValueText="Good"
                            needleColor="steelblue"
                            startColor="green"
                            endColor="red"
                            />
                    </div>
                </div>
                <div className="gauge">
                    <h3>Zone-A Current</h3>
                    <div className="current">
                        <ReactSpeedometer
                            maxValue={1000}
                            value={60}
                            segments={2}
                            currentValueText="Good"
                            needleColor="steelblue"
                            startColor="green"
                            endColor="red"
                            />
                    </div>
                </div>
                <div className="gauge">
                    <h3>Zone-A Voltage</h3>
                    <div className="voltage">
                        <ReactSpeedometer
                            maxValue={1000}
                            value={10}
                            segments={2}
                            currentValueText="Good"
                            needleColor="steelblue"
                            startColor="green"
                            endColor="red"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
