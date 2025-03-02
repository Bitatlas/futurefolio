import { TimeRange } from '../components/UI/TimeRangeSelector';

export interface StockData {
  name: string;
  value: number;
  change: number;
  percentChange: number;
}

export interface MarketData {
  name: string;
  SP500: number;
  [key: string]: string | number;
}

export interface SectorPerformance {
  name: string;
  value: number;
  change: number;
  percentChange: number;
}

export interface StockPickData {
  return: number;
  sector: string;
}

export interface SectorData {
  ytd: number;
}

type SectorName = 
  | 'AI & Machine Learning'
  | 'Blockchain & Digital Assets'
  | 'Robotics & Automation'
  | 'Genomic Revolution'
  | 'Space Exploration'
  | 'Advanced Manufacturing'
  | 'Fintech & Digital Payments'
  | 'Next-Generation Internet'
  | 'Autonomous Mobility';

// Realistic market data generator with trends and volatility
const generateMarketData = (timeRange: TimeRange): MarketData[] => {
  const dataPoints = {
    '6m': 180,
    '1y': 365,
    '5y': 1825
  };

  const points = dataPoints[timeRange];
  const baseValue = 4500;
  const data: MarketData[] = [];
  const now = new Date();

  // Market trend parameters
  const trendStrength = 0.15; // Annual trend strength
  const volatility = 0.12; // Annual volatility
  const meanReversion = 0.001; // Mean reversion strength
  let currentValue = baseValue;
  let previousValue = baseValue;

  for (let i = points; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Generate realistic price movement
    const trend = (trendStrength / 365) * baseValue; // Daily trend
    const dailyVolatility = (volatility / Math.sqrt(365)) * baseValue;
    const randomWalk = (Math.random() - 0.5) * 2 * dailyVolatility;
    const reversion = meanReversion * (baseValue - currentValue);
    
    // Add seasonal patterns
    const seasonality = Math.sin(i / 180 * Math.PI) * 50;
    
    // Market cycles (longer-term patterns)
    const marketCycle = Math.sin(i / 720 * Math.PI) * 200;
    
    // Calculate new value with all components
    currentValue = previousValue + trend + randomWalk + reversion + 
                  (seasonality / 365) + (marketCycle / 365);
    
    // Add occasional market shocks
    if (Math.random() < 0.001) { // 0.1% chance of a shock
      currentValue *= (1 + (Math.random() - 0.5) * 0.05); // ±2.5% shock
    }

    data.push({
      name: date.toISOString().split('T')[0],
      SP500: Number(currentValue.toFixed(2))
    });

    previousValue = currentValue;
  }

  return data;
};

// Historical performance data from the Q4 report
const stockPicks: Record<string, StockPickData> = {
  'PLTR': { return: 1087.77, sector: 'AI & Machine Learning' },
  'META': { return: 355.84, sector: 'AI & Machine Learning' },
  'CRWD': { return: 197.34, sector: 'Cybersecurity' },
  'DASH': { return: 127.69, sector: 'Digital Commerce' },
  'SOUN': { return: 125.21, sector: 'AI & Machine Learning' },
  'CHWY': { return: 112.35, sector: 'Digital Commerce' },
  'AMZN': { return: 104.77, sector: 'Digital Commerce' },
  'SMCI': { return: 93.19, sector: 'AI Infrastructure' },
  'SHOP': { return: 87.77, sector: 'Digital Commerce' },
  'TWLO': { return: 84.75, sector: 'Cloud Computing' },
  'KTOS': { return: 84.14, sector: 'Defense Technology' },
  'GOOGL': { return: 70.13, sector: 'AI & Machine Learning' },
  'MELI': { return: 68.18, sector: 'Digital Commerce' },
  'TFC': { return: 57.95, sector: 'Fintech' },
  'AVAV': { return: 55.08, sector: 'Defense Technology' }
};

// Sector performance data
const sectorPerformance: Record<SectorName, SectorData> = {
  'AI & Machine Learning': { ytd: 4.41 },
  'Blockchain & Digital Assets': { ytd: -3.35 },
  'Robotics & Automation': { ytd: 7.01 },
  'Genomic Revolution': { ytd: 5.23 },
  'Space Exploration': { ytd: 2.89 },
  'Advanced Manufacturing': { ytd: 6.45 },
  'Fintech & Digital Payments': { ytd: 3.78 },
  'Next-Generation Internet': { ytd: 5.12 },
  'Autonomous Mobility': { ytd: 4.95 }
};

export const getMarketPerformance = (timeRange: TimeRange = '1y') => {
  return generateMarketData(timeRange);
};

export const getSectorPerformance = () => {
  return Object.entries(sectorPerformance).map(([name, data]) => ({
    name,
    value: data.ytd,
    change: data.ytd,
    percentChange: data.ytd
  }));
};

export const getStockPicks = () => {
  return Object.entries(stockPicks).map(([symbol, data]) => ({
    symbol,
    sector: data.sector,
    return: data.return
  }));
};

export const getStockPicksBySector = (sector: string) => {
  return Object.entries(stockPicks)
    .filter(([_, data]) => data.sector === sector)
    .map(([symbol, data]) => ({
      symbol,
      return: data.return
    }));
};

export const getSectorData = (sector: string, timeRange: TimeRange = '1y') => {
  const baseValue = 100;
  const dataPoints = {
    '6m': 180,
    '1y': 365,
    '5y': 1825
  };
  
  const points = dataPoints[timeRange];
  const data = [];
  const now = new Date();
  const sectorGrowth = (sectorPerformance as Record<string, SectorData>)[sector]?.ytd || 5;

  // Generate sector-specific data with more realistic patterns
  let currentValue = baseValue;
  const volatility = sectorGrowth > 0 ? 0.15 : 0.2; // Higher volatility for underperforming sectors
  const trendStrength = sectorGrowth / 365; // Daily trend based on YTD performance

  for (let i = points; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Add randomness and mean reversion
    const dailyVolatility = (volatility / Math.sqrt(365)) * currentValue;
    const randomWalk = (Math.random() - 0.5) * 2 * dailyVolatility;
    const meanReversion = 0.002 * (baseValue - currentValue);
    
    // Update value
    currentValue = currentValue * (1 + trendStrength) + randomWalk + meanReversion;
    
    // Add occasional sector-specific events
    if (Math.random() < 0.002) { // 0.2% chance of sector news impact
      currentValue *= (1 + (Math.random() - 0.5) * 0.08); // ±4% impact
    }

    data.push({
      name: date.toISOString().split('T')[0],
      value: Number(currentValue.toFixed(2))
    });
  }

  return data;
};
