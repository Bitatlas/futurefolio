import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  useTheme,
  Chip,
  Tab,
  Tabs,
  Paper,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  ShowChart as ShowChartIcon,
  SmartToy as AIIcon,
} from '@mui/icons-material';

import StatsCard from '../../components/Cards/StatsCard';
import LineChart, { DataPoint } from '../../components/Charts/LineChart';
import RecommendationCard from '../../components/Cards/RecommendationCard';
import stockService, { HistoricalData } from '../../services/stockService';
import recommendationService from '../../services/recommendationService';

// Define interface for tab panel props
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Tab Panel component
const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`sector-tabpanel-${index}`}
      aria-labelledby={`sector-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const AIPage: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [historicalData, setHistoricalData] = useState<DataPoint[]>([]);
  const [recommendations, setRecommendations] = useState(recommendationService.getRecommendations('ai'));
  const [stockData, setStockData] = useState<{ [key: string]: HistoricalData[] }>({});

  // Generate mock historical data
  useEffect(() => {
    // Generate sector performance data for the past 30 days
    const generateSectorData = () => {
      const data: DataPoint[] = [];
      const today = new Date();
      let sectorValue = 100; // Starting value
      let marketValue = 100; // Starting value
      
      for (let i = 180; i >= 0; i--) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        
        // Random daily changes with sector outperforming market
        sectorValue = sectorValue * (1 + (Math.random() * 0.03 - 0.01));
        marketValue = marketValue * (1 + (Math.random() * 0.02 - 0.01));
        
        data.push({
          name: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          sector: parseFloat(sectorValue.toFixed(2)),
          market: parseFloat(marketValue.toFixed(2)),
        });
      }
      
      return data;
    };
    
    // Generate stock data for key companies in the sector
    const generateStockData = () => {
      const stocks: { [key: string]: HistoricalData[] } = {};
      const symbols = ['NVDA', 'GOOG', 'AMD'];
      
      symbols.forEach(symbol => {
        stocks[symbol] = stockService.getMockHistoricalData(symbol, 30);
      });
      
      return stocks;
    };
    
    setHistoricalData(generateSectorData());
    setStockData(generateStockData());
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Convert stock data to chart format
  const getStockChartData = (symbol: string): DataPoint[] => {
    if (!stockData[symbol]) return [];
    
    return stockData[symbol].map(item => ({
      name: item.date,
      price: item.close,
    }));
  };

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <AIIcon sx={{ color: '#7B68EE', mr: 1, fontSize: 32 }} />
          <Typography variant="h4" component="h1" fontWeight="bold">
            AI & Machine Learning
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="text.secondary">
          Artificial Intelligence and Machine Learning technologies are transforming industries through automation, data analysis, and predictive capabilities.
        </Typography>
      </Box>

      {/* Sector Overview Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <LineChart
            title="Sector Performance"
            subtitle="AI & Machine Learning vs. Overall Market (6 Months)"
            data={historicalData}
            dataKeys={[
              { key: 'sector', name: 'AI & ML Sector', color: '#7B68EE' },
              { key: 'market', name: 'Overall Market', color: theme.palette.success.main },
            ]}
            height={350}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StatsCard
                title="Sector Performance (YTD)"
                value="+32.8%"
                change={32.8}
                icon={<TrendingUpIcon />}
                color="#7B68EE"
              />
            </Grid>
            <Grid item xs={12}>
              <StatsCard
                title="Market Share"
                value="$1.2T"
                change={5.4}
                icon={<ShowChartIcon />}
                color="#7B68EE"
              />
            </Grid>
            <Grid item xs={12}>
              <StatsCard
                title="Growth Forecast"
                value="High"
                icon={<TrendingUpIcon />}
                color="#7B68EE"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Sector Details Tabs */}
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ borderRadius: 2 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 'medium',
                textTransform: 'none',
                minHeight: 48,
              },
              '& .Mui-selected': {
                color: '#7B68EE',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#7B68EE',
              },
            }}
          >
            <Tab label="Investment Thesis" />
            <Tab label="Key Companies" />
            <Tab label="Industry Trends" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Investment Thesis
              </Typography>
              <Typography variant="body1" paragraph>
                Artificial Intelligence and Machine Learning represent one of the most transformative technological shifts of our time. Companies in this sector are developing technologies that will fundamentally change how businesses operate, how consumers interact with products, and how society functions.
              </Typography>
              <Typography variant="body1" paragraph>
                The AI market is projected to grow from $150 billion in 2023 to over $1.3 trillion by 2030, representing a CAGR of over 35%. This growth is driven by increasing adoption across industries, advancements in computing power, and the proliferation of data.
              </Typography>
              
              <Box sx={{ my: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Key Investment Drivers
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                          Infrastructure
                        </Typography>
                        <Typography variant="body2">
                          Companies providing the hardware and infrastructure necessary for AI development and deployment, including semiconductors, cloud computing, and specialized AI accelerators.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                          Software & Platforms
                        </Typography>
                        <Typography variant="body2">
                          Companies developing AI software, platforms, and tools that enable businesses to implement AI solutions, including machine learning frameworks, AI development platforms, and specialized applications.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                          AI-First Applications
                        </Typography>
                        <Typography variant="body2">
                          Companies leveraging AI as a core component of their products and services, creating new markets or disrupting existing ones through AI-powered solutions.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
              
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Risk Factors
              </Typography>
              <Typography variant="body1" paragraph>
                While the AI sector presents significant growth opportunities, investors should be aware of key risks including regulatory challenges, ethical concerns, competition, and the potential for technological limitations or setbacks.
              </Typography>
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Key Companies
              </Typography>
              <Typography variant="body1" paragraph>
                The AI & Machine Learning sector includes a diverse range of companies, from established tech giants to specialized startups. Here are some of the key players driving innovation in this space:
              </Typography>
              
              <Grid container spacing={3}>
                {Object.keys(stockData).map((symbol) => (
                  <Grid item xs={12} key={symbol}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Box>
                            <Typography variant="h6" fontWeight="bold">
                              {symbol}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {symbol === 'NVDA' ? 'NVIDIA Corporation' : 
                               symbol === 'GOOG' ? 'Alphabet Inc.' : 
                               symbol === 'AMD' ? 'Advanced Micro Devices, Inc.' : ''}
                            </Typography>
                          </Box>
                          <Chip 
                            label={symbol === 'NVDA' ? 'Strong Buy' : 'Buy'} 
                            sx={{ 
                              backgroundColor: symbol === 'NVDA' ? 
                                `${theme.palette.success.main}20` : 
                                `${theme.palette.success.light}20`,
                              color: symbol === 'NVDA' ? 
                                theme.palette.success.main : 
                                theme.palette.success.light,
                              fontWeight: 'bold',
                            }} 
                          />
                        </Box>
                        
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={8}>
                            <Box sx={{ height: 200 }}>
                              <LineChart
                                title=""
                                data={getStockChartData(symbol)}
                                dataKeys={[
                                  { key: 'price', color: '#7B68EE' },
                                ]}
                                height={200}
                                showLegend={false}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary">
                                  Current Price
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                  ${symbol === 'NVDA' ? '950.25' : 
                                    symbol === 'GOOG' ? '187.45' : 
                                    symbol === 'AMD' ? '205.78' : '0.00'}
                                </Typography>
                              </Box>
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary">
                                  Target Price
                                </Typography>
                                <Typography variant="h6" fontWeight="bold" color="success.main">
                                  ${symbol === 'NVDA' ? '1,200.00' : 
                                    symbol === 'GOOG' ? '225.00' : 
                                    symbol === 'AMD' ? '250.00' : '0.00'}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography variant="body2" color="text.secondary">
                                  Upside
                                </Typography>
                                <Typography variant="h6" fontWeight="bold" color="success.main">
                                  {symbol === 'NVDA' ? '+26.28%' : 
                                    symbol === 'GOOG' ? '+20.03%' : 
                                    symbol === 'AMD' ? '+21.49%' : '0.00%'}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Industry Trends
              </Typography>
              <Typography variant="body1" paragraph>
                The AI & Machine Learning industry is evolving rapidly, with several key trends shaping its development and future growth potential:
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        Generative AI
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Generative AI models like GPT-4, Claude, and Gemini are transforming content creation, coding, and creative work. This technology is being integrated into products across industries, creating new markets and disrupting existing ones.
                      </Typography>
                      <Typography variant="body2">
                        Market Size: $13.8B (2023) → $110.8B (2030)
                      </Typography>
                      <Typography variant="body2">
                        CAGR: 34.3%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        AI Chips & Infrastructure
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Specialized AI accelerators and chips designed for machine learning workloads are seeing explosive growth. Companies are investing heavily in AI-specific hardware to gain competitive advantages in training and inference.
                      </Typography>
                      <Typography variant="body2">
                        Market Size: $42.5B (2023) → $207.9B (2030)
                      </Typography>
                      <Typography variant="body2">
                        CAGR: 25.4%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        Enterprise AI Adoption
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Businesses across industries are implementing AI solutions to improve efficiency, reduce costs, and create new products and services. This trend is accelerating as AI becomes more accessible and demonstrably valuable.
                      </Typography>
                      <Typography variant="body2">
                        Market Size: $58.2B (2023) → $301.4B (2030)
                      </Typography>
                      <Typography variant="body2">
                        CAGR: 26.5%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        AI Regulation & Ethics
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Governments worldwide are developing regulatory frameworks for AI, focusing on safety, transparency, and ethical use. Companies that proactively address these concerns may gain competitive advantages.
                      </Typography>
                      <Typography variant="body2">
                        Key Developments: EU AI Act, US Executive Order on AI, China's AI regulations
                      </Typography>
                      <Typography variant="body2">
                        Impact: High (potential to reshape competitive landscape)
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </Paper>
      </Box>

      {/* Recommendations Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" fontWeight="bold">
            Investment Recommendations
          </Typography>
          <Chip
            label="Premium Content"
            color="primary"
            size="small"
            sx={{ fontWeight: 'medium' }}
          />
        </Box>
        <Grid container spacing={3}>
          {recommendations.map((recommendation, index) => (
            <Grid item xs={12} md={4} key={index}>
              <RecommendationCard recommendation={recommendation} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AIPage;
