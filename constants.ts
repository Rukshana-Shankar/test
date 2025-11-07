
import { DataPoint, PieDataPoint, StackedBarDataPoint } from './types';

export const residentialLandData: StackedBarDataPoint[] = [
    { name: 'Cardinia Road Employment Precinct', developed: 1849, undeveloped: 0 },
    { name: 'Cardinia Road Precinct', developed: 7989, undeveloped: 2182 },
    { name: 'Officer Precinct', developed: 2080, undeveloped: 7919 },
    { name: 'Pakenham East Precinct', developed: 0, undeveloped: 7162 },
    { name: 'Pakenham Precinct', developed: 5074, undeveloped: 862 },
];

export const undevelopedLotsPieData: PieDataPoint[] = [
    { name: 'Pakenham East Precinct', value: 24 },
    { name: 'Officer Precinct', value: 33 },
    { name: 'Cardinia Road Precinct', value: 11 },
    { name: 'Cardinia Road Employment Precinct', value: 9 },
    { name: 'Other', value: 23 },
];

export const PIE_CHART_COLORS: string[] = ['#FCD232', '#FF715B', '#343F4B', '#00A99D', '#6B7280'];

export const subdivisionLodgedBarData: DataPoint[] = [
    { name: '13/14', value: 1300 },
    { name: '14/15', value: 2100 },
    { name: '15/16', value: 2100 },
    { name: '16/17', value: 1900 },
    { name: '17/18', value: 1900 },
    { name: '18/19', value: 1600 },
];

export const subdivisionIssuedBarData: DataPoint[] = [
    { name: '13/14', value: 1100 },
    { name: '14/15', value: 1200 },
    { name: '15/16', value: 1700 },
    { name: '16/17', value: 2100 },
    { name: '17/18', value: 1700 },
    { name: '18/19', value: 1200 },
];

export const newFamiliesBarData: DataPoint[] = [
    { name: '13/14', value: 1200 },
    { name: '14/15', value: 1500 },
    { name: '15/16', value: 1600 },
    { name: '16/17', value: 2100 },
    { name: '17/18', value: 1900 },
    { name: '18/19', value: 1200 },
];

export const babiesBornBarData: DataPoint[] = [
    { name: '13/14', value: 1400 },
    { name: '14/15', value: 1500 },
    { name: '15/16', value: 1600 },
    { name: '16/17', value: 1600 },
    { name: '17/18', value: 1600 },
    { name: '18/19', value: 900 },
];
