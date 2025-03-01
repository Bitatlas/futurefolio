import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Button,
  Collapse,
  Divider,
  Grid,
  useTheme,
  Avatar,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

// Define the recommendation rating type
export type RecommendationRating = 'Strong Buy' | 'Buy' | 'Hold' | 'Sell' | 'Strong Sell';

// Define the recommendation interface
export interface Recommendation {
  ticker: string;
  companyName: string;
  price: number;
  change: number;
  rating: RecommendationRating;
  targetPrice: number;
  upside: number;
  analystName?: string;
  analystAvatar?: string;
  date: string;
  summary: string;
  keyPoints: string[];
  risks?: string[];
}

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Determine color based on rating
  const getRatingColor = (rating: RecommendationRating) => {
    switch (rating) {
      case 'Strong Buy':
        return theme.palette.success.main;
      case 'Buy':
        return theme.palette.success.light;
      case 'Hold':
        return theme.palette.warning.main;
      case 'Sell':
        return theme.palette.error.light;
      case 'Strong Sell':
        return theme.palette.error.main;
      default:
        return theme.palette.primary.main;
    }
  };

  const ratingColor = getRatingColor(recommendation.rating);
  const isPositiveChange = recommendation.change > 0;
  const isPositiveUpside = recommendation.upside > 0;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 20px 0 rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h5" component="div" fontWeight="bold">
              {recommendation.ticker}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {recommendation.companyName}
            </Typography>
          </Box>
          <Chip
            label={recommendation.rating}
            sx={{
              backgroundColor: `${ratingColor}20`,
              color: ratingColor,
              fontWeight: 'bold',
              borderRadius: '16px',
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography variant="h6" component="div">
              ${recommendation.price.toFixed(2)}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isPositiveChange ? (
                <TrendingUp fontSize="small" sx={{ color: theme.palette.success.main, mr: 0.5 }} />
              ) : (
                <TrendingDown fontSize="small" sx={{ color: theme.palette.error.main, mr: 0.5 }} />
              )}
              <Typography
                variant="body2"
                color={isPositiveChange ? 'success.main' : 'error.main'}
                fontWeight="medium"
              >
                {isPositiveChange ? '+' : ''}
                {recommendation.change.toFixed(2)}%
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="subtitle2" color="text.secondary">
              Target Price
            </Typography>
            <Typography variant="h6" component="div">
              ${recommendation.targetPrice.toFixed(2)}
            </Typography>
            <Typography
              variant="body2"
              color={isPositiveUpside ? 'success.main' : 'error.main'}
              fontWeight="medium"
            >
              {isPositiveUpside ? '+' : ''}
              {recommendation.upside.toFixed(2)}% Upside
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {recommendation.summary}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 2, pt: 0 }}>
        <Button
          onClick={handleExpandClick}
          endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ color: theme.palette.primary.main }}
        >
          {expanded ? 'Hide Details' : 'View Due Diligence'}
        </Button>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider sx={{ mx: 3 }} />
        <CardContent sx={{ px: 3, py: 2 }}>
          <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
            Investment Thesis
          </Typography>
          <Box sx={{ mb: 3 }}>
            {recommendation.keyPoints.map((point, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                <CheckCircleIcon
                  fontSize="small"
                  sx={{ color: theme.palette.success.main, mr: 1, mt: 0.3 }}
                />
                <Typography variant="body2">{point}</Typography>
              </Box>
            ))}
          </Box>

          {recommendation.risks && recommendation.risks.length > 0 && (
            <>
              <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                Risk Factors
              </Typography>
              <Box sx={{ mb: 3 }}>
                {recommendation.risks.map((risk, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                    <WarningIcon
                      fontSize="small"
                      sx={{ color: theme.palette.warning.main, mr: 1, mt: 0.3 }}
                    />
                    <Typography variant="body2">{risk}</Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 2,
              pt: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {recommendation.analystAvatar ? (
                <Avatar
                  src={recommendation.analystAvatar}
                  alt={recommendation.analystName}
                  sx={{ width: 32, height: 32, mr: 1 }}
                />
              ) : (
                <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: theme.palette.primary.main }}>
                  {recommendation.analystName?.charAt(0) || 'A'}
                </Avatar>
              )}
              <Box>
                <Typography variant="body2" fontWeight="medium">
                  {recommendation.analystName || 'FutureFolio Analyst'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {recommendation.date}
                </Typography>
              </Box>
            </Box>
            <Chip
              icon={<InfoIcon fontSize="small" />}
              label="Premium Content"
              size="small"
              sx={{
                backgroundColor: `${theme.palette.primary.main}20`,
                color: theme.palette.primary.main,
                fontWeight: 'medium',
              }}
            />
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecommendationCard;
