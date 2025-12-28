import ResponsiveSpeedometer from '../Common/ResponsiveSpeedometer';
import { useGlobalData } from '../../context/data/DataState';

export default function MeterA() {
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
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Power</h5>
                        <div className="power w-full max-w-[350px]">
                            <ResponsiveSpeedometer
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
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Current</h5>
                        <div className="current w-full max-w-[350px]">
                            <ResponsiveSpeedometer
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
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Voltage</h5>
                        <div className="voltage w-full max-w-[350px]">
                            <ResponsiveSpeedometer
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
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Power</h5>
                        <div className="power w-full max-w-[350px]">
                            <ResponsiveSpeedometer
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
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Current</h5>
                        <div className="current w-full max-w-[350px]">
                            <ResponsiveSpeedometer
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
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Voltage</h5>
                        <div className="voltage w-full max-w-[350px]">
                            <ResponsiveSpeedometer
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
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Power</h5>
                        <div className="power w-full max-w-[350px]">
                            <ResponsiveSpeedometer
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
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Current</h5>
                        <div className="current w-full max-w-[350px]">
                            <ResponsiveSpeedometer
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
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h5 className="mb-2 font-semibold text-gray-600 text-md">Zone-A Voltage</h5>
                        <div className="voltage w-full max-w-[350px]">
                            <ResponsiveSpeedometer
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
