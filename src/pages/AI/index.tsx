import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LineChart from '../../components/Charts/LineChart';
import RecommendationCard from '../../components/Cards/RecommendationCard';
import { TimeRange } from '../../components/UI/TimeRangeSelector';
import {
  getSectorData,
  getStockPicksBySector
} from '../../services/stockService';

const AIPage = () => {
  const theme = useTheme();
  const [timeRange, setTimeRange] = useState<TimeRange>('1y');

  const sectorData = getSectorData('AI & Machine Learning', timeRange);
  const stockPicks = getStockPicksBySector('AI & Machine Learning')
    .sort((a, b) => b.return - a.return);

  return (
    <Box sx={{ p: 3 }}>
      {/* Sector Overview */}
      <Card sx={{ 
        mb: 4, 
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      }}>
        <CardContent sx={{ py: 4 }}>
          <Typography variant="h4" component="div" color="primary.contrastText" gutterBottom>
            AI & Machine Learning
          </Typography>
          <Typography variant="body1" color="primary.contrastText" sx={{ mb: 4, opacity: 0.9, maxWidth: 800 }}>
            Our AI & Machine Learning picks have delivered exceptional returns, led by Palantir (PLTR) with a 1,087% return. 
            This sector continues to show strong growth potential as artificial intelligence transforms industries across the board.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 4, 
            flexWrap: 'wrap',
            '& > div': {
              flex: '1 1 auto',
              minWidth: '180px',
              textAlign: 'center',
              p: 2,
              borderRadius: 2,
              backgroundColor: 'rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
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
                300%+
              </Typography>
              <Typography variant="body2" color="primary.contrastText" sx={{ opacity: 0.8 }}>
                Average Return
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" color="primary.contrastText" sx={{ fontWeight: 'bold' }}>
                5
              </Typography>
              <Typography variant="body2" color="primary.contrastText" sx={{ opacity: 0.8 }}>
                Active Picks
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Sector Performance Chart */}
        <Grid item xs={12}>
          <LineChart
            title="AI & Machine Learning Sector Performance"
            subtitle="Historical sector performance"
            data={sectorData}
            dataKeys={[
              { key: 'value', color: theme.palette.primary.main, name: 'Sector Performance' }
            ]}
            height={400}
            showTimeRangeSelector
            timeRange={timeRange}
            onTimeRangeChange={setTimeRange}
          />
        </Grid>

        {/* Stock Picks */}
        <Grid item xs={12}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ 
              pl: 1,
              borderLeft: `4px solid ${theme.palette.primary.main}`,
            }}>
              Top Performing AI & Machine Learning Picks
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Our carefully selected AI & Machine Learning stocks have consistently outperformed the market
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {stockPicks.map((pick) => (
              <Grid item xs={12} sm={6} md={4} key={pick.symbol}>
                <RecommendationCard
                  title={pick.symbol}
                  subtitle="AI & Machine Learning"
                  return={pick.return}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Investment Thesis */}
        <Grid item xs={12}>
          <Card sx={{ 
            mt: 2,
            background: 'rgba(30, 30, 30, 0.6)',
            backdropFilter: 'blur(10px)',
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                Investment Thesis
              </Typography>
              <Typography variant="body1" paragraph>
                The AI & Machine Learning sector represents one of the most transformative technological shifts in history. 
                Our investment thesis focuses on companies that are not just developing AI technology, but are successfully 
                deploying it to solve real-world problems and create significant business value.
              </Typography>
              <Typography variant="body1" paragraph>
                Key investment criteria:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                {[
                  'Proprietary AI/ML Technology',
                  'Strong Data Moat',
                  'Proven Monetization',
                  'Network Effects',
                  'Market Leadership'
                ].map((criteria) => (
                  <Chip
                    key={criteria}
                    label={criteria}
                    sx={{
                      bgcolor: 'rgba(255, 215, 0, 0.1)',
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'rgba(255, 215, 0, 0.2)',
                      },
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AIPage;
