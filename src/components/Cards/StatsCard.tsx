import React from 'react';
import { Card, CardContent, Typography, Box, useTheme, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactElement<SvgIconProps>;
  color?: string;
}

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: '50%',
  marginBottom: theme.spacing(2),
}));

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon, color }) => {
  const theme = useTheme();
  const isPositive = change && change > 0;
  const defaultColor = theme.palette.primary.main;
  const iconColor = color || defaultColor;

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" component="div" fontWeight="bold" sx={{ mb: 1 }}>
              {value}
            </Typography>
            {change !== undefined && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {isPositive ? (
                  <TrendingUp
                    fontSize="small"
                    sx={{ color: theme.palette.success.main, mr: 0.5 }}
                  />
                ) : (
                  <TrendingDown
                    fontSize="small"
                    sx={{ color: theme.palette.error.main, mr: 0.5 }}
                  />
                )}
                <Typography
                  variant="body2"
                  color={isPositive ? 'success.main' : 'error.main'}
                  fontWeight="medium"
                >
                  {isPositive ? '+' : ''}
                  {change}%
                </Typography>
              </Box>
            )}
          </Box>
          {icon && (
            <IconWrapper
              sx={{
                backgroundColor: `${iconColor}20`, // 20% opacity
                color: iconColor,
              }}
            >
              {React.cloneElement(icon, { fontSize: 'medium' })}
            </IconWrapper>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
