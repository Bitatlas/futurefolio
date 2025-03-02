import { Recommendation, RecommendationRating } from '../components/Cards/RecommendationCard';

// Define sector types
export type SectorType = 
  | 'ai'
  | 'blockchain'
  | 'robotics'
  | 'genomics'
  | 'space'
  | 'manufacturing'
  | 'fintech'
  | 'internet'
  | 'mobility';

const mockRecommendations: Record<SectorType | 'all', Recommendation[]> = {
  ai: [
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      sector: 'AI & Machine Learning',
      rating: 'Strong Buy',
      priceTarget: 1200.00,
      currentPrice: 950.25,
      return: 26.28,
      analysis: 'Leading AI chip manufacturer with dominant market position',
    },
    {
      symbol: 'GOOG',
      name: 'Alphabet Inc.',
      sector: 'AI & Machine Learning',
      rating: 'Buy',
      priceTarget: 220.00,
      currentPrice: 187.45,
      return: 17.36,
      analysis: 'Strong AI capabilities with diverse revenue streams',
    },
    {
      symbol: 'AMD',
      name: 'Advanced Micro Devices Inc.',
      sector: 'AI & Machine Learning',
      rating: 'Buy',
      priceTarget: 250.00,
      currentPrice: 205.78,
      return: 21.49,
      analysis: 'Growing AI chip market share with competitive products',
    }
  ],
  blockchain: [
    {
      symbol: 'COIN',
      name: 'Coinbase Global Inc.',
      sector: 'Blockchain & Digital Assets',
      rating: 'Buy',
      priceTarget: 400.00,
      currentPrice: 315.67,
      return: 26.71,
      analysis: 'Leading cryptocurrency exchange with strong institutional focus',
    }
  ],
  robotics: [
    {
      symbol: 'ABB',
      name: 'ABB Ltd',
      sector: 'Robotics & Automation',
      rating: 'Buy',
      priceTarget: 55.00,
      currentPrice: 47.85,
      return: 14.94,
      analysis: 'Global leader in industrial robotics and automation',
    }
  ],
  genomics: [
    {
      symbol: 'CRSP',
      name: 'CRISPR Therapeutics AG',
      sector: 'Genomic Revolution',
      rating: 'Strong Buy',
      priceTarget: 110.00,
      currentPrice: 87.65,
      return: 25.50,
      analysis: 'Pioneer in CRISPR gene editing technology',
    }
  ],
  space: [
    {
      symbol: 'SPCE',
      name: 'Virgin Galactic Holdings Inc.',
      sector: 'Space Exploration',
      rating: 'Hold',
      priceTarget: 2.00,
      currentPrice: 1.85,
      return: 8.11,
      analysis: 'Early mover in space tourism with significant challenges',
    }
  ],
  manufacturing: [
    {
      symbol: 'DDD',
      name: '3D Systems Corporation',
      sector: 'Advanced Manufacturing',
      rating: 'Hold',
      priceTarget: 7.00,
      currentPrice: 5.85,
      return: 19.66,
      analysis: 'Established player in 3D printing with diverse applications',
    }
  ],
  fintech: [
    {
      symbol: 'SQ',
      name: 'Block Inc.',
      sector: 'Fintech & Digital Payments',
      rating: 'Buy',
      priceTarget: 100.00,
      currentPrice: 87.45,
      return: 14.35,
      analysis: 'Innovative fintech leader with strong ecosystem',
    }
  ],
  internet: [
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      sector: 'Next-Generation Internet',
      rating: 'Strong Buy',
      priceTarget: 220.00,
      currentPrice: 185.75,
      return: 18.44,
      analysis: 'E-commerce and cloud computing giant with AI integration',
    }
  ],
  mobility: [
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      sector: 'Autonomous Mobility',
      rating: 'Buy',
      priceTarget: 275.00,
      currentPrice: 225.45,
      return: 21.98,
      analysis: 'Leader in electric vehicles with strong autonomous capabilities',
    }
  ],
  all: [] // Will be populated in initialization
};

// Populate the 'all' array with all recommendations
mockRecommendations.all = Object.values(mockRecommendations)
  .filter(arr => arr !== mockRecommendations.all)
  .flat();

export const getRecommendationsBySector = (sector: SectorType): Recommendation[] => {
  return mockRecommendations[sector];
};

export const getRecommendationBySymbol = (symbol: string): Recommendation | undefined => {
  return mockRecommendations.all.find(rec => rec.symbol === symbol.toUpperCase());
};

export default {
  getRecommendationsBySector,
  getRecommendationBySymbol,
};
