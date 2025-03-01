import React from 'react';
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  TooltipProps,
} from 'recharts';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define the data point interface
export interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface LineChartProps {
  title: string;
  subtitle?: string;
  data: DataPoint[];
  dataKeys: { key: string; color?: string; name?: string }[];
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
}

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  const theme = useTheme();
  
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          backgroundColor: 'rgba(30, 30, 30, 0.9)',
          border: `1px solid ${theme.palette.divider}`,
          p: 1.5,
          borderRadius: 1,
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {label}
        </Typography>
        {payload.map((entry, index) => (
          <Box key={`tooltip-item-${index}`} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
            <Box
              component="span"
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: entry.color,
                mr: 1,
              }}
            />
            <Typography variant="body2" component="span" color="text.primary">
              {entry.name}: 
            </Typography>
            <Typography variant="body2" component="span" color="primary" fontWeight="bold" sx={{ ml: 0.5 }}>
              {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  }

  return null;
};

const LineChart: React.FC<LineChartProps> = ({
  title,
  subtitle,
  data,
  dataKeys,
  height = 400,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  showXAxis = true,
  showYAxis = true,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
        <Box sx={{ width: '100%', height }}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {showGrid && (
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={theme.palette.divider}
                  vertical={false}
                />
              )}
              {showXAxis && (
                <XAxis
                  dataKey="name"
                  tick={{ fill: theme.palette.text.secondary }}
                  axisLine={{ stroke: theme.palette.divider }}
                  tickLine={{ stroke: theme.palette.divider }}
                />
              )}
              {showYAxis && (
                <YAxis
                  tick={{ fill: theme.palette.text.secondary }}
                  axisLine={{ stroke: theme.palette.divider }}
                  tickLine={{ stroke: theme.palette.divider }}
                />
              )}
              {showTooltip && <Tooltip content={<CustomTooltip />} />}
              {showLegend && (
                <Legend
                  wrapperStyle={{
                    paddingTop: 20,
                    color: theme.palette.text.primary,
                  }}
                />
              )}
              {dataKeys.map((dataKey, index) => (
                <Line
                  key={`line-${index}`}
                  type="monotone"
                  dataKey={dataKey.key}
                  name={dataKey.name || dataKey.key}
                  stroke={dataKey.color || theme.palette.primary.main}
                  strokeWidth={2}
                  dot={{
                    r: 4,
                    strokeWidth: 2,
                    fill: theme.palette.background.paper,
                    stroke: dataKey.color || theme.palette.primary.main,
                  }}
                  activeDot={{
                    r: 6,
                    strokeWidth: 0,
                    fill: dataKey.color || theme.palette.primary.main,
                  }}
                />
              ))}
            </RechartsLineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LineChart;
