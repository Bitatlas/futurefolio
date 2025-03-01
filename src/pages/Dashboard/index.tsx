import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Divider,
  useTheme,
  Chip,
  Avatar,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  ShowChart as ShowChartIcon,
  SmartToy as AIIcon,
  Link as BlockchainIcon,
  PrecisionManufacturing as RoboticsIcon,
  Biotech as GenomicsIcon,
  Rocket as SpaceIcon,
  Print as ManufacturingIcon,
  Payments as FintechIcon,
  Language as InternetIcon,
  DirectionsCar as MobilityIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

import StatsCard from '../../components/Cards/StatsCard';
import LineChart, { DataPoint } from '../../components/Charts/LineChart';
import RecommendationCard from '../../components/Cards/RecommendationCard';
import stockService from '../../services/stockService';
import recommendationService, { SectorType } from '../../services/recommendationService';

// Define sector data
const sectors = [
  { id: 'ai', name: 'AI & Machine Learning', icon: <AIIcon />, color: '#7B68EE' },
  { id: 'blockchain', name: 'Blockchain & Digital Assets', icon: <BlockchainIcon />, color: '#FF8C00' },
  { id: 'robotics', name: 'Robotics & Automation', icon: <RoboticsIcon />, color: '#4682B4' },
  { id: 'genomics', name: 'Genomic Revolution', icon: <GenomicsIcon />, color: '#2E8B57' },
  { id: 'space', name: 'Space Exploration', icon: <SpaceIcon />, color: '#9370DB' },
  { id: 'manufacturing', name: 'Advanced Manufacturing', icon: <ManufacturingIcon />, color: '#CD5C5C' },
  { id: 'fintech', name: 'Fintech & Digital Payments', icon: <FintechIcon />, color: '#20B2AA' },
  { id: 'internet', name: 'Next-Generation Internet', icon: <InternetIcon />, color: '#4169E1' },
  { id: 'mobility', name: 'Autonomous Mobility', icon: <MobilityIcon />, color: '#FF6347' },
];

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [marketData, setMarketData] = useState<DataPoint[]>([]);
  const [sectorPerformance, setSectorPerformance] = useState<{ name: string; value: number; change: number }[]>([]);
  const [topRecommendations, setTopRecommendations] = useState(recommendationService.getTopRecommendations(3));

  // Generate mock market data
  useEffect(() => {
    // Generate market data for the past 30 days
    const generateMarketData = () => {
      const data: DataPoint[] = [];
      const today = new Date();
      let spValue = 5000; // Starting S&P 500 value
      let arkValue = 50; // Starting ARK Innovation ETF value
      
      for (let i = 30; i >= 0; i--) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        
        // Random daily changes
        spValue = spValue * (1 + (Math.random() * 0.02 - 0.01));
        arkValue = arkValue * (1 + (Math.random() * 0.04 - 0.015));
        
        data.push({
          name: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          sp500: parseFloat(spValue.toFixed(2)),
          arkk: parseFloat(arkValue.toFixed(2)),
        });
      }
      
      return data;
    };
    
    // Generate sector performance data
    const generateSectorPerformance = () => {
      return sectors.map(sector => ({
        name: sector.name,
        value: parseFloat((Math.random() * 100 + 50).toFixed(2)),
        change: parseFloat((Math.random() * 20 - 5).toFixed(2)),
      })).sort((a, b) => b.change - a.change);
    };
    
    setMarketData(generateMarketData());
    setSectorPerformance(generateSectorPerformance());
  }, []);

  const handleSectorClick = (sectorId: string) => {
    navigate(`/${sectorId}`);
  };

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Market Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Overview of market performance and top investment opportunities across innovative sectors
        </Typography>
      </Box>

      {/* Market Overview Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <LineChart
            title="Market Performance"
            subtitle="S&P 500 vs. ARK Innovation ETF"
            data={marketData}
            dataKeys={[
              { key: 'sp500', name: 'S&P 500', color: theme.palette.success.main },
              { key: 'arkk', name: 'ARKK', color: theme.palette.primary.main },
            ]}
            height={350}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StatsCard
                title="S&P 500"
                value="5,128.45"
                change={1.2}
                icon={<ShowChartIcon />}
                color={theme.palette.success.main}
              />
            </Grid>
            <Grid item xs={12}>
              <StatsCard
                title="ARKK ETF"
                value="52.87"
                change={2.8}
                icon={<TrendingUpIcon />}
                color={theme.palette.primary.main}
              />
            </Grid>
            <Grid item xs={12}>
              <StatsCard
                title="Market Volatility"
                value="Low"
                icon={<ShowChartIcon />}
                color={theme.palette.info.main}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Sector Performance Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Sector Performance
        </Typography>
        <Grid container spacing={3}>
          {sectors.map((sector) => (
            <Grid item xs={12} sm={6} md={4} key={sector.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 20px 0 rgba(0, 0, 0, 0.2)',
                  },
                }}
                onClick={() => handleSectorClick(sector.id)}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: `${sector.color}20`,
                        color: sector.color,
                        mr: 2,
                      }}
                    >
                      {sector.icon}
                    </Avatar>
                    <Typography variant="h6" fontWeight="medium">
                      {sector.name}
                    </Typography>
                  </Box>
                  
                  {sectorPerformance
                    .filter(item => item.name === sector.name)
                    .map((item, index) => {
                      const isPositive = item.change > 0;
                      return (
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            YTD Performance
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {isPositive ? (
                              <TrendingUpIcon
                                fontSize="small"
                                sx={{ color: theme.palette.success.main, mr: 0.5 }}
                              />
                            ) : (
                              <TrendingUpIcon
                                fontSize="small"
                                sx={{ color: theme.palette.error.main, mr: 0.5, transform: 'rotate(180deg)' }}
                              />
                            )}
                            <Typography
                              variant="body1"
                              fontWeight="bold"
                              color={isPositive ? 'success.main' : 'error.main'}
                            >
                              {isPositive ? '+' : ''}
                              {item.change}%
                            </Typography>
                          </Box>
                        </Box>
                      );
                    })}
                  
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 2, color: sector.color }}
                    onClick={() => handleSectorClick(sector.id)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Top Recommendations Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" fontWeight="bold">
            Top Recommendations
          </Typography>
          <Chip
            label="Premium Content"
            color="primary"
            size="small"
            sx={{ fontWeight: 'medium' }}
          />
        </Box>
        <Grid container spacing={3}>
          {topRecommendations.map((recommendation, index) => (
            <Grid item xs={12} md={4} key={index}>
              <RecommendationCard recommendation={recommendation} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
