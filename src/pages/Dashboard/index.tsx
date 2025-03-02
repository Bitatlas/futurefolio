import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LineChart from '../../components/Charts/LineChart';
import StatsCard from '../../components/Cards/StatsCard';
import RecommendationCard from '../../components/Cards/RecommendationCard';
import { TimeRange } from '../../components/UI/TimeRangeSelector';
import {
  getMarketPerformance,
  getSectorPerformance,
  getStockPicks
} from '../../services/stockService';

const Dashboard = () => {
  const theme = useTheme();
  const [timeRange, setTimeRange] = useState<TimeRange>('1y');

  const marketData = getMarketPerformance(timeRange);
  const sectorPerformance = getSectorPerformance();
  const topPicks = getStockPicks()
    .sort((a, b) => b.return - a.return)
    .slice(0, 5);

  return (
    <Box sx={{ p: 3 }}>
      {/* Promotional Banner */}
      <Card sx={{ 
        mb: 4, 
        background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      }}>
        <CardContent>
          <Typography variant="h4" component="div" color="primary.contrastText" gutterBottom>
            Welcome to FutureFolio Premium
          </Typography>
          <Typography variant="h6" color="primary.contrastText" sx={{ mb: 2, opacity: 0.9 }}>
            Your Gateway to High-Performance Stock Picks
          </Typography>
          <Typography variant="body1" color="primary.contrastText" sx={{ mb: 2, opacity: 0.8 }}>
            Our top pick PLTR delivered an impressive 1,087% return, while our AI & Machine Learning sector picks averaged over 300% returns. Join FutureFolio to access our latest investment recommendations and comprehensive market analysis.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 4, 
            mt: 3,
            flexWrap: 'wrap',
            '& > div': {
              flex: '1 1 auto',
              minWidth: '150px',
              textAlign: 'center',
              p: 2,
              borderRadius: 1,
              backgroundColor: 'rgba(0,0,0,0.1)',
            }
          }}>
            <Box>
              <Typography variant="h3" color="primary.contrastText" sx={{ fontWeight: 'bold' }}>
                1,087%
              </Typography>
              <Typography variant="body2" color="primary.contrastText" sx={{ opacity: 0.8 }}>
                Top Pick Return
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" color="primary.contrastText" sx={{ fontWeight: 'bold' }}>
                15+
              </Typography>
              <Typography variant="body2" color="primary.contrastText" sx={{ opacity: 0.8 }}>
                Winning Picks
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" color="primary.contrastText" sx={{ fontWeight: 'bold' }}>
                9
              </Typography>
              <Typography variant="body2" color="primary.contrastText" sx={{ opacity: 0.8 }}>
                Sectors Covered
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Market Performance Chart */}
        <Grid item xs={12}>
          <LineChart
            title="Market Performance"
            subtitle="S&P 500 Index Performance"
            data={marketData}
            dataKeys={[
              { key: 'SP500', color: theme.palette.primary.main, name: 'S&P 500' }
            ]}
            height={400}
            showTimeRangeSelector
            timeRange={timeRange}
            onTimeRangeChange={setTimeRange}
          />
        </Grid>

        {/* Sector Performance */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ 
            pl: 1,
            borderLeft: `4px solid ${theme.palette.primary.main}`,
          }}>
            Sector Performance
          </Typography>
          <Grid container spacing={2}>
            {sectorPerformance.map((sector) => (
              <Grid item xs={12} sm={6} md={4} key={sector.name}>
                <StatsCard
                  title={sector.name}
                  value={sector.value}
                  change={sector.change}
                  percentChange={sector.percentChange}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Top Stock Picks */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ 
            pl: 1,
            borderLeft: `4px solid ${theme.palette.primary.main}`,
          }}>
            Top Performing Stock Picks
          </Typography>
          <Grid container spacing={2}>
            {topPicks.map((pick) => (
              <Grid item xs={12} sm={6} md={4} key={pick.symbol}>
                <RecommendationCard
                  title={pick.symbol}
                  subtitle={pick.sector}
                  return={pick.return}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
