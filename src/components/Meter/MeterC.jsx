import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { useGlobalData } from '../../context/data/DataState';

export default function MeterC() {
    const { bulbGaugeVoltage,
        bulbGaugePower,
        bulbGaugeCurrent,
        heaterGaugePower,
        heaterGaugeCurrent,
        heaterGaugeVoltage,
        inductionGaugeCurrent,
        inductionGaugeVoltage,
        inductionGaugePower,
    } = useGlobalData();
    return (
        <>
            <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-gray-800">Machine-1</h2>
                <div className="flex flex-wrap items-center justify-around gap-6">
                    <div className="flex flex-col items-center">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Power</h5>
                        <div className="power">
                            <ReactSpeedometer
                                maxValue={1000}
                                value={bulbGaugePower}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Current</h5>
                        <div className="current">
                            <ReactSpeedometer
                                maxValue={100}
                                value={bulbGaugeCurrent}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Voltage</h5>
                        <div className="voltage">
                            <ReactSpeedometer
                                maxValue={500}
                                value={bulbGaugeVoltage}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-gray-800">Machine-2</h2>
                <div className="flex flex-wrap items-center justify-around gap-6">
                    <div className="flex flex-col items-center">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Power</h5>
                        <div className="power">
                            <ReactSpeedometer
                                maxValue={1000}
                                value={heaterGaugePower}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Current</h5>
                        <div className="current">
                            <ReactSpeedometer
                                maxValue={100}
                                value={heaterGaugeCurrent}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Voltage</h5>
                        <div className="voltage">
                            <ReactSpeedometer
                                maxValue={500}
                                value={heaterGaugeVoltage}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-gray-800">Machine-3</h2>
                <div className="flex flex-wrap items-center justify-around gap-6">
                    <div className="flex flex-col items-center">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Power</h5>
                        <div className="power">
                            <ReactSpeedometer
                                maxValue={1000}
                                value={inductionGaugePower}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Current</h5>
                        <div className="current">
                            <ReactSpeedometer
                                maxValue={100}
                                value={inductionGaugeCurrent}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Voltage</h5>
                        <div className="voltage">
                            <ReactSpeedometer
                                maxValue={500}
                                value={inductionGaugeVoltage}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
