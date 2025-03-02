import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { styled } from '@mui/material/styles';

export interface RecommendationCardProps {
  title: string;
  subtitle: string;
  return: number;
}

export interface Recommendation {
  symbol: string;
  name: string;
  sector: string;
  rating: RecommendationRating;
  priceTarget: number;
  currentPrice: number;
  return: number;
  analysis: string;
}

export type RecommendationRating = 'Strong Buy' | 'Buy' | 'Hold' | 'Sell' | 'Strong Sell';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 24px rgba(0, 0, 0, 0.3)`,
    '&::after': {
      opacity: 1,
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out',
    pointerEvents: 'none',
  },
  position: 'relative',
}));

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  subtitle,
  return: returnValue,
}) => {
  const theme = useTheme();

  return (
    <StyledCard>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography 
              variant="h6" 
              component="div"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                mb: 0.5,
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary"
              sx={{
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1px',
              }}
            >
              {subtitle}
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            p: 1,
            borderRadius: 1,
            bgcolor: 'success.main',
            opacity: 0.1,
          }}>
            <TrendingUpIcon
              sx={{ 
                color: theme.palette.success.main,
                mr: 1,
                fontSize: '1.25rem',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.success.main,
                fontWeight: 600,
              }}
            >
              +{returnValue.toFixed(2)}%
            </Typography>
          </Box>
        </Box>
        <Chip
          label="Strong Buy"
          size="small"
          sx={{
            bgcolor: 'success.main',
            color: 'success.contrastText',
            fontWeight: 600,
            '& .MuiChip-label': {
              px: 2,
            },
          }}
        />
      </CardContent>
    </StyledCard>
  );
};

export default RecommendationCard;
