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
  | 'mobility'
  | 'all';

// Mock recommendations data for each sector
const mockRecommendations: Record<SectorType, Recommendation[]> = {
  ai: [
    {
      ticker: 'NVDA',
      companyName: 'NVIDIA Corporation',
      price: 950.25,
      change: 3.75,
      rating: 'Strong Buy',
      targetPrice: 1200.00,
      upside: 26.28,
      analystName: 'Sarah Chen',
      date: '2025-02-28',
      summary: 'NVIDIA continues to dominate the AI chip market with its cutting-edge GPUs and AI accelerators. The company is well-positioned to benefit from the growing demand for AI infrastructure.',
      keyPoints: [
        'Market leader in AI chips with over 80% market share in training GPUs',
        'Strong growth in data center revenue, up 78% year-over-year',
        'Expanding software ecosystem with CUDA and AI Enterprise suite',
        'New Blackwell architecture provides 4x performance improvement over previous generation'
      ],
      risks: [
        'Increasing competition from AMD, Intel, and custom AI chips',
        'High valuation with P/E ratio above industry average',
        'Potential slowdown in consumer GPU demand'
      ]
    },
    {
      ticker: 'GOOG',
      companyName: 'Alphabet Inc.',
      price: 187.45,
      change: 1.25,
      rating: 'Buy',
      targetPrice: 225.00,
      upside: 20.03,
      analystName: 'Michael Johnson',
      date: '2025-02-25',
      summary: 'Google\'s Gemini AI models are showing strong performance against competitors, and the company is effectively monetizing AI across its product suite.',
      keyPoints: [
        'Gemini Ultra outperforms competitors in most AI benchmarks',
        'Successfully integrating AI features across Google Workspace and Search',
        'Google Cloud growing at 35% with AI services driving adoption',
        'Strong balance sheet with over $100B in cash'
      ],
      risks: [
        'Regulatory scrutiny and potential antitrust actions',
        'Increasing competition in the AI space from Microsoft and OpenAI',
        'Ad revenue growth may slow in economic downturn'
      ]
    },
    {
      ticker: 'AMD',
      companyName: 'Advanced Micro Devices, Inc.',
      price: 205.78,
      change: -1.45,
      rating: 'Buy',
      targetPrice: 250.00,
      upside: 21.49,
      analystName: 'David Kim',
      date: '2025-02-20',
      summary: 'AMD is gaining market share in the AI chip space with its MI300 accelerators, while continuing to perform well in CPUs against Intel.',
      keyPoints: [
        'MI300 accelerators showing strong performance in inference workloads',
        'Expanding partnerships with major cloud providers',
        'EPYC server CPUs continue to gain market share from Intel',
        'Diversified revenue streams across consumer, enterprise, and embedded markets'
      ],
      risks: [
        'Intense competition from NVIDIA in the AI accelerator market',
        'Potential cyclical downturn in semiconductor industry',
        'Supply chain constraints could limit growth'
      ]
    }
  ],
  blockchain: [
    {
      ticker: 'COIN',
      companyName: 'Coinbase Global, Inc.',
      price: 315.67,
      change: 5.32,
      rating: 'Buy',
      targetPrice: 380.00,
      upside: 20.38,
      analystName: 'Jessica Wong',
      date: '2025-02-27',
      summary: 'Coinbase is benefiting from increased institutional adoption of cryptocurrencies and growing revenue from staking and other services beyond trading.',
      keyPoints: [
        'Institutional trading volume up 120% year-over-year',
        'Diversifying revenue with staking, custody, and Coinbase Cloud',
        'Strong regulatory position compared to competitors',
        'Growing user base with over 110 million verified users'
      ],
      risks: [
        'Regulatory uncertainty in key markets',
        'Trading volume highly dependent on crypto market volatility',
        'Increasing competition from traditional financial institutions'
      ]
    },
    {
      ticker: 'SQ',
      companyName: 'Block, Inc.',
      price: 87.45,
      change: 2.15,
      rating: 'Buy',
      targetPrice: 110.00,
      upside: 25.79,
      analystName: 'Robert Chen',
      date: '2025-02-22',
      summary: 'Block\'s Cash App and TBD division are making significant strides in cryptocurrency adoption and blockchain infrastructure development.',
      keyPoints: [
        'Cash App Bitcoin revenue growing at 25% annually',
        'TBD building open developer platform for decentralized finance',
        'Strong synergies between traditional fintech and crypto offerings',
        'Strategic bitcoin reserves providing balance sheet strength'
      ],
      risks: [
        'Regulatory challenges in cryptocurrency operations',
        'Intense competition in payment processing space',
        'Economic downturn could impact small business customers'
      ]
    },
    {
      ticker: 'MSTR',
      companyName: 'MicroStrategy Incorporated',
      price: 1450.25,
      change: -25.75,
      rating: 'Hold',
      targetPrice: 1500.00,
      upside: 3.43,
      analystName: 'Thomas Wilson',
      date: '2025-02-18',
      summary: 'MicroStrategy continues its bitcoin acquisition strategy while maintaining its enterprise software business. The stock remains highly correlated with bitcoin price movements.',
      keyPoints: [
        'Holds over 200,000 bitcoins on balance sheet',
        'Software business provides stable cash flow',
        'Strong liquidity position with recent convertible note offerings',
        'Management committed to long-term bitcoin strategy'
      ],
      risks: [
        'Extreme exposure to bitcoin price volatility',
        'Potential impairment charges during crypto market downturns',
        'Core software business growing slower than competitors',
        'Regulatory uncertainty around corporate bitcoin holdings'
      ]
    }
  ],
  robotics: [
    {
      ticker: 'ABB',
      companyName: 'ABB Ltd',
      price: 47.85,
      change: 0.95,
      rating: 'Buy',
      targetPrice: 58.00,
      upside: 21.21,
      analystName: 'Emma Schmidt',
      date: '2025-02-26',
      summary: 'ABB is a global leader in industrial automation and robotics, well-positioned to benefit from the growing trend of factory automation and reshoring.',
      keyPoints: [
        'Strong portfolio of collaborative robots for manufacturing',
        'Growing service revenue providing recurring income',
        'Benefiting from reshoring trends in North America and Europe',
        'Leading position in industrial automation software'
      ],
      risks: [
        'Cyclical exposure to industrial capital expenditure',
        'Increasing competition from Chinese robotics manufacturers',
        'Supply chain constraints affecting delivery times'
      ]
    },
    {
      ticker: 'ISRG',
      companyName: 'Intuitive Surgical, Inc.',
      price: 425.30,
      change: 7.85,
      rating: 'Strong Buy',
      targetPrice: 520.00,
      upside: 22.27,
      analystName: 'Dr. James Miller',
      date: '2025-02-24',
      summary: 'Intuitive Surgical maintains its dominant position in robotic surgery with its da Vinci systems, with growing procedure volumes and expanding applications.',
      keyPoints: [
        'Installed base of over 8,500 da Vinci systems globally',
        'Procedure volume growing at 15% annually',
        'High barriers to entry due to regulatory approvals and surgeon training',
        'Expanding into new surgical specialties beyond core applications'
      ],
      risks: [
        'High valuation compared to medical device peers',
        'Emerging competition from Medtronic and Johnson & Johnson',
        'Potential pricing pressure from hospital consolidation'
      ]
    },
    {
      ticker: 'ROK',
      companyName: 'Rockwell Automation, Inc.',
      price: 310.45,
      change: -2.35,
      rating: 'Buy',
      targetPrice: 360.00,
      upside: 15.96,
      analystName: 'Patricia Lee',
      date: '2025-02-20',
      summary: 'Rockwell Automation is benefiting from the industrial IoT trend and increased demand for smart manufacturing solutions.',
      keyPoints: [
        'Leading provider of industrial automation and information solutions',
        'Growing software and services revenue with higher margins',
        'Strong position in industrial IoT with FactoryTalk platform',
        'Benefiting from Industry 4.0 adoption and reshoring trends'
      ],
      risks: [
        'Cyclical exposure to manufacturing capital expenditure',
        'Increasing competition in industrial software',
        'Potential slowdown in key verticals like automotive'
      ]
    }
  ],
  genomics: [
    {
      ticker: 'CRSP',
      companyName: 'CRISPR Therapeutics AG',
      price: 87.65,
      change: 4.25,
      rating: 'Strong Buy',
      targetPrice: 120.00,
      upside: 36.91,
      analystName: 'Dr. Sarah Johnson',
      date: '2025-02-28',
      summary: 'CRISPR Therapeutics is at the forefront of gene editing technology with multiple programs in clinical trials and a recently approved therapy for sickle cell disease.',
      keyPoints: [
        'First approved CRISPR-based therapy with Vertex for sickle cell disease',
        'Strong pipeline of wholly-owned immuno-oncology programs',
        'Robust intellectual property position in CRISPR/Cas9 technology',
        'Healthy balance sheet with over $2B in cash'
      ],
      risks: [
        'Clinical trial risks for pipeline programs',
        'Competitive landscape in gene editing is intensifying',
        'Regulatory and ethical challenges with new genetic technologies'
      ]
    },
    {
      ticker: 'ILMN',
      companyName: 'Illumina, Inc.',
      price: 145.30,
      change: -3.45,
      rating: 'Buy',
      targetPrice: 180.00,
      upside: 23.88,
      analystName: 'Michael Chen',
      date: '2025-02-25',
      summary: 'Illumina maintains its leadership in DNA sequencing technology with new platforms offering lower costs and higher throughput.',
      keyPoints: [
        'Market leader in next-generation sequencing with over 70% market share',
        'New NovaSeq X platform reducing sequencing costs significantly',
        'Growing clinical applications in oncology and reproductive health',
        'Expanding into long-read sequencing technology'
      ],
      risks: [
        'Increasing competition from Oxford Nanopore and PacBio',
        'Regulatory challenges with Grail acquisition',
        'Potential pricing pressure as sequencing becomes commoditized'
      ]
    },
    {
      ticker: 'PACB',
      companyName: 'Pacific Biosciences of California, Inc.',
      price: 3.85,
      change: 0.15,
      rating: 'Buy',
      targetPrice: 5.50,
      upside: 42.86,
      analystName: 'Jennifer Kim',
      date: '2025-02-22',
      summary: 'PacBio is gaining traction with its long-read sequencing technology, which complements short-read approaches for more comprehensive genomic analysis.',
      keyPoints: [
        'Leader in long-read sequencing technology',
        'New Revio system increases throughput while lowering costs',
        'Growing adoption in research and clinical settings',
        'Strategic partnership with Invitae for clinical applications'
      ],
      risks: [
        'History of operating losses and cash burn',
        'Competition from Illumina moving into long-read space',
        'Technology adoption slower than short-read sequencing'
      ]
    }
  ],
  space: [
    {
      ticker: 'SPCE',
      companyName: 'Virgin Galactic Holdings, Inc.',
      price: 1.85,
      change: -0.15,
      rating: 'Hold',
      targetPrice: 2.00,
      upside: 8.11,
      analystName: 'James Wilson',
      date: '2025-02-27',
      summary: 'Virgin Galactic is working to scale its suborbital space tourism operations while facing challenges in achieving profitability and regular flight cadence.',
      keyPoints: [
        'Successfully launched commercial space tourism operations',
        'Building second generation of spacecraft for improved economics',
        'Strong brand recognition in space tourism market',
        'Potential for high-margin revenue from space tourism'
      ],
      risks: [
        'Significant cash burn with uncertain path to profitability',
        'Safety concerns could impact operations',
        'Competition from Blue Origin in suborbital tourism',
        'Limited addressable market at current pricing'
      ]
    },
    {
      ticker: 'RKLB',
      companyName: 'Rocket Lab USA, Inc.',
      price: 5.25,
      change: 0.35,
      rating: 'Buy',
      targetPrice: 8.00,
      upside: 52.38,
      analystName: 'Thomas Lee',
      date: '2025-02-25',
      summary: 'Rocket Lab is establishing itself as a leader in the small satellite launch market while expanding into spacecraft components and medium-lift rockets.',
      keyPoints: [
        'Reliable small satellite launch provider with Electron rocket',
        'Expanding into medium-lift market with Neutron rocket',
        'Growing space systems business with high margins',
        'Vertical integration strategy reducing costs'
      ],
      risks: [
        'Increasing competition in small satellite launch market',
        'Development risks with new Neutron rocket',
        'Potential slowdown in satellite constellation deployments',
        'Still operating at a loss with significant R&D expenses'
      ]
    },
    {
      ticker: 'MAXR',
      companyName: 'Maxar Technologies Inc.',
      price: 52.75,
      change: 1.25,
      rating: 'Buy',
      targetPrice: 65.00,
      upside: 23.22,
      analystName: 'Emily Chen',
      date: '2025-02-20',
      summary: 'Maxar is a leading provider of Earth intelligence and space infrastructure, with strong government relationships and growing commercial opportunities.',
      keyPoints: [
        'Leading provider of high-resolution satellite imagery',
        'Strong backlog of government contracts',
        'WorldView Legion constellation expanding capacity',
        'Diversified revenue across Earth intelligence and space infrastructure'
      ],
      risks: [
        'High debt levels from previous acquisitions',
        'Increasing competition in Earth observation market',
        'Execution risks with new satellite deployments',
        'Government budget constraints could impact contracts'
      ]
    }
  ],
  manufacturing: [
    {
      ticker: 'DDD',
      companyName: '3D Systems Corporation',
      price: 5.85,
      change: 0.25,
      rating: 'Hold',
      targetPrice: 7.00,
      upside: 19.66,
      analystName: 'Robert Johnson',
      date: '2025-02-28',
      summary: '3D Systems is focusing on healthcare and industrial applications for its 3D printing technology, with a strategic shift toward higher-margin opportunities.',
      keyPoints: [
        'Strong position in healthcare 3D printing applications',
        'Expanding materials portfolio for industrial applications',
        'Strategic focus on higher-margin verticals',
        'New manufacturing partnerships expanding reach'
      ],
      risks: [
        'History of inconsistent financial performance',
        'Intense competition in industrial 3D printing',
        'Slower than expected adoption in manufacturing',
        'Potential dilution from equity raises'
      ]
    },
    {
      ticker: 'XMTR',
      companyName: 'Xometry, Inc.',
      price: 22.45,
      change: -0.75,
      rating: 'Buy',
      targetPrice: 30.00,
      upside: 33.63,
      analystName: 'Jennifer Smith',
      date: '2025-02-25',
      summary: 'Xometry\'s AI-powered marketplace for on-demand manufacturing is disrupting traditional supply chains and benefiting from reshoring trends.',
      keyPoints: [
        'AI-powered marketplace connecting customers with manufacturing partners',
        'Growing supplier network with diverse capabilities',
        'Expanding into new manufacturing processes and materials',
        'Benefiting from supply chain resilience and reshoring trends'
      ],
      risks: [
        'Path to profitability still uncertain',
        'Cyclical exposure to industrial economy',
        'Competition from other digital manufacturing platforms',
        'Supplier quality control challenges'
      ]
    },
    {
      ticker: 'DM',
      companyName: 'Desktop Metal, Inc.',
      price: 0.85,
      change: 0.05,
      rating: 'Hold',
      targetPrice: 1.20,
      upside: 41.18,
      analystName: 'Michael Zhang',
      date: '2025-02-20',
      summary: 'Desktop Metal is working to commercialize its mass production 3D printing systems while facing financial challenges and competitive pressures.',
      keyPoints: [
        'Production System P-50 offers high-speed metal 3D printing',
        'Diverse portfolio of additive manufacturing technologies',
        'Growing materials library expanding applications',
        'Strategic focus on mass production applications'
      ],
      risks: [
        'Significant cash burn and uncertain path to profitability',
        'Integration challenges from multiple acquisitions',
        'Slower than expected adoption of production systems',
        'Intense competition in additive manufacturing'
      ]
    }
  ],
  fintech: [
    {
      ticker: 'SQ',
      companyName: 'Block, Inc.',
      price: 87.45,
      change: 2.15,
      rating: 'Buy',
      targetPrice: 110.00,
      upside: 25.79,
      analystName: 'Robert Chen',
      date: '2025-02-28',
      summary: 'Block continues to innovate across its ecosystem with Cash App, Square, and TIDAL, while expanding its cryptocurrency and blockchain initiatives.',
      keyPoints: [
        'Cash App growing user base and increasing monetization',
        'Square seller ecosystem expanding upmarket',
        'Strategic bitcoin investments providing upside exposure',
        'Strong position in both consumer and merchant fintech'
      ],
      risks: [
        'Increasing competition in payment processing and digital banking',
        'Regulatory scrutiny of cryptocurrency operations',
        'Economic downturn could impact small business customers',
        'High valuation compared to traditional financial services'
      ]
    },
    {
      ticker: 'PYPL',
      companyName: 'PayPal Holdings, Inc.',
      price: 75.30,
      change: -1.25,
      rating: 'Buy',
      targetPrice: 95.00,
      upside: 26.16,
      analystName: 'Sarah Miller',
      date: '2025-02-25',
      summary: 'PayPal is focusing on improving operating efficiency while expanding its digital wallet capabilities and checkout solutions.',
      keyPoints: [
        'Large user base with over 400 million active accounts',
        'Improving operating margins through cost optimization',
        'Venmo monetization accelerating',
        'Strong position in online checkout with PayPal and Braintree'
      ],
      risks: [
        'Increasing competition from Apple Pay and other digital wallets',
        'eBay transition impact on transaction volume',
        'Regulatory challenges in multiple jurisdictions',
        'Potential margin pressure from competitive pricing'
      ]
    },
    {
      ticker: 'SOFI',
      companyName: 'SoFi Technologies, Inc.',
      price: 9.85,
      change: 0.45,
      rating: 'Buy',
      targetPrice: 14.00,
      upside: 42.13,
      analystName: 'David Wilson',
      date: '2025-02-22',
      summary: 'SoFi is successfully executing its financial services super-app strategy with growing membership and product adoption across lending and financial services.',
      keyPoints: [
        'Growing member base with strong cross-selling metrics',
        'Bank charter enabling deposit funding and improved economics',
        'Galileo technology platform providing B2B revenue stream',
        'Diversified revenue beyond student loan refinancing'
      ],
      risks: [
        'Intense competition in digital banking',
        'Credit quality concerns in economic downturn',
        'Regulatory uncertainty in fintech lending',
        'High marketing costs for customer acquisition'
      ]
    }
  ],
  internet: [
    {
      ticker: 'AMZN',
      companyName: 'Amazon.com, Inc.',
      price: 185.75,
      change: 3.25,
      rating: 'Strong Buy',
      targetPrice: 230.00,
      upside: 23.82,
      analystName: 'Jennifer Lee',
      date: '2025-02-28',
      summary: 'Amazon continues to dominate e-commerce and cloud computing while expanding its advertising business and integrating AI across its ecosystem.',
      keyPoints: [
        'AWS maintaining leadership in cloud computing with AI services',
        'Advertising business growing rapidly with high margins',
        'Improving e-commerce profitability through operational efficiency',
        'Strong position in multiple high-growth markets'
      ],
      risks: [
        'Increasing competition in cloud from Microsoft and Google',
        'Regulatory scrutiny and potential antitrust actions',
        'International expansion challenges in key markets',
        'High capital expenditure requirements'
      ]
    },
    {
      ticker: 'GOOGL',
      companyName: 'Alphabet Inc.',
      price: 187.45,
      change: 1.25,
      rating: 'Buy',
      targetPrice: 225.00,
      upside: 20.03,
      analystName: 'Michael Johnson',
      date: '2025-02-25',
      summary: 'Google is effectively monetizing AI across its product suite while maintaining dominance in search and growing its cloud business.',
      keyPoints: [
        'Search advertising remains highly profitable with AI enhancements',
        'YouTube growing with subscription and advertising revenue',
        'Google Cloud gaining market share with AI differentiation',
        'Strong balance sheet with over $100B in cash'
      ],
      risks: [
        'Regulatory challenges globally',
        'Increasing competition in digital advertising',
        'Privacy changes impacting ad targeting capabilities',
        'High investments in moonshot projects with uncertain returns'
      ]
    },
    {
      ticker: 'META',
      companyName: 'Meta Platforms, Inc.',
      price: 485.30,
      change: 7.85,
      rating: 'Buy',
      targetPrice: 550.00,
      upside: 13.33,
      analystName: 'Thomas Brown',
      date: '2025-02-22',
      summary: 'Meta is successfully navigating privacy challenges while growing its advertising business and making strategic investments in AI and the metaverse.',
      keyPoints: [
        'Strong engagement across Facebook, Instagram, and WhatsApp',
        'Reels monetization improving with AI-driven recommendations',
        'Operational efficiency initiatives improving margins',
        'Strategic AI investments enhancing advertising effectiveness'
      ],
      risks: [
        'Regulatory scrutiny and potential antitrust actions',
        'Competition for user attention from TikTok and others',
        'High metaverse investments with uncertain returns',
        'Privacy changes impacting ad targeting capabilities'
      ]
    }
  ],
  mobility: [
    {
      ticker: 'TSLA',
      companyName: 'Tesla, Inc.',
      price: 225.45,
      change: 5.75,
      rating: 'Buy',
      targetPrice: 275.00,
      upside: 21.98,
      analystName: 'David Chen',
      date: '2025-02-28',
      summary: 'Tesla maintains its leadership in electric vehicles while expanding into energy storage, AI, and robotics with its strong technology platform.',
      keyPoints: [
        'Industry-leading margins in electric vehicles',
        'FSD technology advancing with neural network improvements',
        'Energy business growing with Megapack demand',
        'Optimus robot showing promising development progress'
      ],
      risks: [
        'Increasing competition in electric vehicles globally',
        'Production ramp challenges for new products',
        'Regulatory scrutiny of autonomous driving claims',
        'Key person risk with CEO Elon Musk'
      ]
    },
    {
      ticker: 'LCID',
      companyName: 'Lucid Group, Inc.',
      price: 3.25,
      change: -0.15,
      rating: 'Hold',
      targetPrice: 4.00,
      upside: 23.08,
      analystName: 'Sarah Wilson',
      date: '2025-02-25',
      summary: 'Lucid is working to scale production of its luxury electric vehicles while facing challenges in demand generation and cash management.',
      keyPoints: [
        'Industry-leading EV technology with best-in-class efficiency',
        'Expanding product lineup with Gravity SUV',
        'Strong technology licensing opportunities',
        'Saudi backing providing financial stability'
      ],
      risks: [
        'Production ramp challenges affecting delivery targets',
        'Cash burn with uncertain path to profitability',
        'Luxury EV market facing increasing competition',
        'Potential dilution from additional capital raises'
      ]
    },
    {
      ticker: 'LAZR',
      companyName: 'Luminar Technologies, Inc.',
      price: 2.85,
      change: 0.25,
      rating: 'Buy',
      targetPrice: 5.00,
      upside: 75.44,
      analystName: 'Michael Zhang',
      date: '2025-02-22',
      summary: 'Luminar is securing production wins for its lidar technology with major automakers as advanced driver assistance systems become more widespread.',
      keyPoints: [
        'Production contracts with multiple major automakers',
        'Industry-leading lidar technology for autonomous vehicles',
        'Vertical integration improving cost structure',
        'Software strategy expanding addressable market'
      ],
      risks: [
        'Significant cash burn with delayed path to profitability',
        'Technology risk from alternative sensing approaches',
        'Automotive industry production delays affecting revenue',
        'Potential dilution from additional capital raises'
      ]
    }
  ],
  all: [] // This will be populated with recommendations from all sectors
};

// Populate the 'all' category with recommendations from all sectors
mockRecommendations.all = [
  ...mockRecommendations.ai,
  ...mockRecommendations.blockchain,
  ...mockRecommendations.robotics,
  ...mockRecommendations.genomics,
  ...mockRecommendations.space,
  ...mockRecommendations.manufacturing,
  ...mockRecommendations.fintech,
  ...mockRecommendations.internet,
  ...mockRecommendations.mobility,
].sort((a, b) => {
  // Sort by rating priority (Strong Buy > Buy > Hold > Sell > Strong Sell)
  const ratingPriority: Record<RecommendationRating, number> = {
    'Strong Buy': 5,
    'Buy': 4,
    'Hold': 3,
    'Sell': 2,
    'Strong Sell': 1,
  };
  
  return ratingPriority[b.rating] - ratingPriority[a.rating];
});

/**
 * Get recommendations for a specific sector
 * @param sector The sector to get recommendations for
 * @param limit Optional limit on the number of recommendations to return
 * @returns Array of recommendations for the specified sector
 */
export const getRecommendations = (sector: SectorType, limit?: number): Recommendation[] => {
  const recommendations = mockRecommendations[sector] || [];
  return limit ? recommendations.slice(0, limit) : recommendations;
};

/**
 * Get top recommendations across all sectors
 * @param limit Optional limit on the number of recommendations to return
 * @returns Array of top recommendations
 */
export const getTopRecommendations = (limit: number = 5): Recommendation[] => {
  // Filter for Strong Buy and Buy ratings, then take the top N
  const topPicks = mockRecommendations.all
    .filter(rec => rec.rating === 'Strong Buy' || rec.rating === 'Buy')
    .slice(0, limit);
  
  return topPicks;
};

/**
 * Get recommendations for a specific stock symbol
 * @param symbol The stock symbol to get recommendations for
 * @returns Recommendation for the specified stock or undefined if not found
 */
export const getRecommendationBySymbol = (symbol: string): Recommendation | undefined => {
  return mockRecommendations.all.find(rec => rec.ticker === symbol.toUpperCase());
};

export default {
  getRecommendations,
  getTopRecommendations,
  getRecommendationBySymbol,
};
