import axios from 'axios';

// Define interfaces for stock data
export interface StockQuote {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  dayHigh: number;
  dayLow: number;
  volume: number;
  marketCap?: number;
  previousClose: number;
}

export interface HistoricalData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// Yahoo Finance API endpoints
const YAHOO_FINANCE_API = 'https://query1.finance.yahoo.com/v8/finance/chart';

/**
 * Fetch current stock quote data
 * @param symbol Stock symbol (e.g., AAPL, MSFT)
 * @returns Promise with stock quote data
 */
export const getStockQuote = async (symbol: string): Promise<StockQuote> => {
  try {
    const response = await axios.get(`${YAHOO_FINANCE_API}/${symbol}`, {
      params: {
        interval: '1d',
        range: '1d',
      },
    });

    const data = response.data.chart.result[0];
    const quote = data.indicators.quote[0];
    const meta = data.meta;
    const timestamp = data.timestamp[data.timestamp.length - 1];
    const currentPrice = quote.close[quote.close.length - 1];
    const previousClose = meta.previousClose;
    const change = currentPrice - previousClose;
    const changePercent = (change / previousClose) * 100;

    return {
      symbol: meta.symbol,
      price: currentPrice,
      change,
      changePercent,
      dayHigh: quote.high[quote.high.length - 1],
      dayLow: quote.low[quote.low.length - 1],
      volume: quote.volume[quote.volume.length - 1],
      marketCap: meta.marketCap,
      previousClose,
    };
  } catch (error) {
    console.error(`Error fetching stock quote for ${symbol}:`, error);
    throw new Error(`Failed to fetch stock quote for ${symbol}`);
  }
};

/**
 * Fetch historical stock data
 * @param symbol Stock symbol (e.g., AAPL, MSFT)
 * @param range Time range (e.g., 1d, 5d, 1mo, 3mo, 6mo, 1y, 5y, max)
 * @param interval Time interval (e.g., 1m, 5m, 15m, 1d, 1wk, 1mo)
 * @returns Promise with historical stock data
 */
export const getHistoricalData = async (
  symbol: string,
  range: string = '1mo',
  interval: string = '1d'
): Promise<HistoricalData[]> => {
  try {
    const response = await axios.get(`${YAHOO_FINANCE_API}/${symbol}`, {
      params: {
        interval,
        range,
      },
    });

    const data = response.data.chart.result[0];
    const quote = data.indicators.quote[0];
    const timestamps = data.timestamp;

    return timestamps.map((timestamp: number, index: number) => ({
      date: new Date(timestamp * 1000).toISOString().split('T')[0],
      open: quote.open[index],
      high: quote.high[index],
      low: quote.low[index],
      close: quote.close[index],
      volume: quote.volume[index],
    }));
  } catch (error) {
    console.error(`Error fetching historical data for ${symbol}:`, error);
    throw new Error(`Failed to fetch historical data for ${symbol}`);
  }
};

/**
 * Fetch multiple stock quotes at once
 * @param symbols Array of stock symbols
 * @returns Promise with array of stock quotes
 */
export const getMultipleStockQuotes = async (symbols: string[]): Promise<StockQuote[]> => {
  try {
    const promises = symbols.map((symbol) => getStockQuote(symbol));
    return await Promise.all(promises);
  } catch (error) {
    console.error('Error fetching multiple stock quotes:', error);
    throw new Error('Failed to fetch multiple stock quotes');
  }
};

/**
 * Generate mock stock data for demo purposes
 * @param symbol Stock symbol
 * @returns Mock stock quote data
 */
export const getMockStockQuote = (symbol: string): StockQuote => {
  const price = Math.random() * 1000 + 50;
  const previousClose = price * (1 + (Math.random() * 0.1 - 0.05));
  const change = price - previousClose;
  const changePercent = (change / previousClose) * 100;

  return {
    symbol,
    price,
    change,
    changePercent,
    dayHigh: price * 1.02,
    dayLow: price * 0.98,
    volume: Math.floor(Math.random() * 10000000),
    marketCap: price * 1000000000,
    previousClose,
  };
};

/**
 * Generate mock historical data for demo purposes
 * @param symbol Stock symbol
 * @param days Number of days of data to generate
 * @returns Array of mock historical data points
 */
export const getMockHistoricalData = (symbol: string, days: number = 30): HistoricalData[] => {
  const data: HistoricalData[] = [];
  let price = Math.random() * 1000 + 50;

  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];

    // Random price movement
    price = price * (1 + (Math.random() * 0.06 - 0.03));
    const open = price * (1 + (Math.random() * 0.02 - 0.01));
    const high = Math.max(open, price) * (1 + Math.random() * 0.02);
    const low = Math.min(open, price) * (1 - Math.random() * 0.02);
    const volume = Math.floor(Math.random() * 10000000);

    data.push({
      date: dateStr,
      open,
      high,
      low,
      close: price,
      volume,
    });
  }

  return data;
};

export default {
  getStockQuote,
  getHistoricalData,
  getMultipleStockQuotes,
  getMockStockQuote,
  getMockHistoricalData,
};
