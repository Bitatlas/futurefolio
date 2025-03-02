import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { styled } from '@mui/material/styles';

export interface StatsCardProps {
  title: string;
  value: number;
  change: number;
  percentChange: number;
}

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

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  percentChange,
}) => {
  const theme = useTheme();
  const isPositive = percentChange >= 0;

  return (
    <StyledCard>
      <CardContent>
        <Typography 
          variant="subtitle2" 
          color="textSecondary" 
          gutterBottom
          sx={{
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.1px',
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h4" 
          component="div" 
          gutterBottom
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            mb: 2,
          }}
        >
          {value.toFixed(2)}
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          p: 1,
          borderRadius: 1,
          bgcolor: `${isPositive ? 'success' : 'error'}.main`,
          opacity: 0.1,
        }}>
          {isPositive ? (
            <TrendingUpIcon
              sx={{ 
                color: theme.palette.success.main,
                mr: 1,
                fontSize: '1.25rem',
              }}
            />
          ) : (
            <TrendingDownIcon
              sx={{ 
                color: theme.palette.error.main,
                mr: 1,
                fontSize: '1.25rem',
              }}
            />
          )}
          <Typography
            variant="body2"
            sx={{
              color: isPositive
                ? theme.palette.success.main
                : theme.palette.error.main,
              fontWeight: 600,
            }}
          >
            {isPositive ? '+' : ''}
            {percentChange.toFixed(2)}%
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default StatsCard;
