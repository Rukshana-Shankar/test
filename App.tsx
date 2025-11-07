
import React, { useRef } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar, PolarAngleAxis
} from 'recharts';
import { Card } from './components/Card';
import { FamilyIcon, ArrowUpIcon, ArrowDownIcon } from './components/Icons';
import { 
    residentialLandData, 
    undevelopedLotsPieData,
    subdivisionLodgedBarData,
    subdivisionIssuedBarData,
    newFamiliesBarData,
    babiesBornBarData,
    PIE_CHART_COLORS
} from './constants';
import type { DataPoint } from './types';

declare global {
    interface Window {
        html2canvas: (element: HTMLElement, options?: Partial<{
            useCORS: boolean;
            logging: boolean;
        }>) => Promise<HTMLCanvasElement>;
    }
}


const formatYAxis = (tick: number) => {
    if (tick >= 1000) {
        return `${tick / 1000}K`;
    }
    return tick.toString();
};

// Custom Pie Chart Label
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.25;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#6B7280" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs sm:text-sm">
      {`${name} ${Math.round(percent * 100)}%`}
    </text>
  );
};


const App: React.FC = () => {
    const barChartCardRef = useRef<HTMLDivElement>(null);
    const pieChartCardRef = useRef<HTMLDivElement>(null);

    const downloadCardAsImage = (element: HTMLElement | null, filename: string) => {
        if (!element) {
            console.error("Element to capture is not found.");
            return;
        }
        
        const scriptId = 'html2canvas-script';

        const captureAndDownload = () => {
            if (window.html2canvas) {
                window.html2canvas(element, { useCORS: true, logging: false }).then(canvas => {
                    const image = canvas.toDataURL('image/jpeg', 1.0);
                    const a = document.createElement('a');
                    a.href = image;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                });
            } else {
                console.error('html2canvas is not loaded.');
            }
        }

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
            document.head.appendChild(script);
            script.onload = () => {
                captureAndDownload();
            };
            script.onerror = () => {
                console.error('Failed to load html2canvas script.');
            }
        } else {
            captureAndDownload();
        }
    };


    return (
        <main className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                {/* --- TOP ROW --- */}
                <Card title="Proposed Undeveloped Lots" subtitle="FUTURE DEVELOPMENT" className="xl:col-span-1">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-5xl font-bold text-gray-800">20,960</p>
                    </div>
                </Card>

                <Card 
                    ref={barChartCardRef}
                    title="Residential Land Activity" 
                    subtitle="BY PRECINCT" 
                    className="md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 md:row-span-2"
                    onDownload={() => downloadCardAsImage(barChartCardRef.current, 'Residential_Land_Activity_Barchart.jpg')}
                >
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={residentialLandData} margin={{ top: 20, right: 10, left: -20, bottom: 50 }}>
                            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={80} tick={{ fontSize: 12, fill: '#6B7280' }}/>
                            <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12, fill: '#6B7280' }} />
                            <Tooltip />
                            <Legend verticalAlign="top" wrapperStyle={{top: -5}} iconSize={10} />
                            <Bar dataKey="developed" stackId="a" name="Developed Lots" fill="#00A99D" />
                            <Bar dataKey="undeveloped" stackId="a" name="Undeveloped Lots" fill="#343F4B" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>

                <Card 
                    ref={pieChartCardRef}
                    title="Proposed Undeveloped Lots by Precinct" 
                    subtitle="DISTRIBUTION OF PROPOSED UNDEVELOPED LOTS ACROSS THE SHIRE" 
                    className="md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 md:row-span-2"
                    onDownload={() => downloadCardAsImage(pieChartCardRef.current, 'Proposed_Undeveloped_Lots_Piechart.jpg')}
                >
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={undevelopedLotsPieData}
                                cx="50%"
                                cy="50%"
                                labelLine={true}
                                label={renderCustomizedLabel}
                                outerRadius="70%"
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {undevelopedLotsPieData.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => `${value}%`}/>
                        </PieChart>
                    </ResponsiveContainer>
                </Card>

                {/* --- SECOND ROW ITEM --- */}
                <Card title="Developed Lots" subtitle="LOTS WITH TITLES ISSUED" className="xl:col-span-1">
                     <div className="relative flex flex-col items-center justify-center h-full">
                        <ResponsiveContainer width="100%" height={150}>
                            <RadialBarChart 
                                innerRadius="70%" 
                                outerRadius="100%" 
                                data={[{ value: 16248 }]} 
                                startAngle={180} 
                                endAngle={0}
                                barSize={20}
                            >
                                <PolarAngleAxis type="number" domain={[0, 17000]} tick={false} />
                                <RadialBar background dataKey="value" fill="#00A99D" cornerRadius={10} />
                            </RadialBarChart>
                        </ResponsiveContainer>
                        <p className="absolute text-3xl font-bold text-gray-800" style={{top: '55%'}}>16,248</p>
                        <div className="absolute flex justify-between w-full px-4" style={{ top: '85%'}}>
                            <span className="text-sm text-gray-500">0K</span>
                            <span className="text-sm text-gray-500">17K</span>
                        </div>
                    </div>
                </Card>
                
                {/* --- THIRD ROW --- */}
                <Card title="Subdivision Lots Lodged" subtitle="YTD COMPARISON WITH LAST YEAR">
                    <div className="flex items-center justify-center h-full gap-2">
                        <p className="text-5xl font-bold text-gray-800">66%</p>
                        <ArrowUpIcon className="w-10 h-10 text-green-500" />
                    </div>
                </Card>

                <Card title="Subdivision Lots Issued SOC" subtitle="YTD COMPARISON WITH LAST YEAR">
                    <div className="flex items-center justify-center h-full gap-2">
                        <p className="text-5xl font-bold text-gray-800">23%</p>
                        <ArrowUpIcon className="w-10 h-10 text-green-500" />
                    </div>
                </Card>
                
                <Card title="Families Moving to the Shire per Day">
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        <p className="text-6xl font-bold text-gray-800">6</p>
                        <FamilyIcon className="w-20 h-20" />
                    </div>
                </Card>

                <Card title="New Families Moving to the Shire" subtitle="YTD COMPARISON WITH LAST YEAR">
                     <div className="flex items-center justify-center h-full gap-2">
                        <p className="text-5xl font-bold text-gray-800">6%</p>
                        <ArrowUpIcon className="w-10 h-10 text-green-500" />
                    </div>
                </Card>

                <Card title="Babies Born in the Shire" subtitle="YTD COMPARISON WITH LAST YEAR">
                     <div className="flex items-center justify-center h-full gap-2">
                        <p className="text-5xl font-bold text-gray-800">-8%</p>
                        <ArrowDownIcon className="w-10 h-10 text-red-500" />
                    </div>
                </Card>

                {/* --- FOURTH ROW --- */}
                <Card title="Subdivision Lots Lodged">
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={subdivisionLodgedBarData} margin={{ top: 20, right: 5, left: -25, bottom: 5 }}>
                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6B7280' }} />
                            <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12, fill: '#6B7280' }}/>
                            <Tooltip formatter={(value) => `${(value as number / 1000).toFixed(1)}K`}/>
                            <Bar dataKey="value" fill="#00A99D" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>

                 <Card title="Subdivision Lots Issued SOC">
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={subdivisionIssuedBarData} margin={{ top: 20, right: 5, left: -25, bottom: 5 }}>
                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6B7280' }} />
                            <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12, fill: '#6B7280' }}/>
                            <Tooltip formatter={(value) => `${(value as number / 1000).toFixed(1)}K`}/>
                            <Bar dataKey="value" fill="#00A99D" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
                
                <Card title="Definitions">
                    <div className="flex flex-col justify-center h-full space-y-4 text-sm text-gray-700">
                        <p><strong>Lodged</strong> - Lots in application for new subdivision stages.</p>
                        <p><strong>SOC</strong> - Lots issued a 'Statement of Compliance' and can now be titled.</p>
                    </div>
                </Card>

                <Card title="New Families Moving to the Shire">
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={newFamiliesBarData} margin={{ top: 20, right: 5, left: -25, bottom: 5 }}>
                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6B7280' }} />
                            <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12, fill: '#6B7280' }}/>
                            <Tooltip formatter={(value) => `${(value as number / 1000).toFixed(1)}K`}/>
                            <Bar dataKey="value" fill="#00A99D" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
                
                <Card title="Babies born in the Shire">
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={babiesBornBarData} margin={{ top: 20, right: 5, left: -25, bottom: 5 }}>
                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6B7280' }} />
                            <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12, fill: '#6B7280' }}/>
                            <Tooltip formatter={(value) => `${(value as number / 1000).toFixed(1)}K`}/>
                            <Bar dataKey="value" fill="#00A99D" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>

            </div>
        </main>
    );
};

export default App;
