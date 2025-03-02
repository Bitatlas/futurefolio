import React from 'react';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export type TimeRange = '6m' | '1y' | '5y';

interface TimeRangeSelectorProps {
  value: TimeRange;
  onChange: (value: TimeRange) => void;
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  borderRadius: theme.shape.borderRadius,
  padding: '4px',
  gap: '4px',
  '& .MuiToggleButton-root': {
    border: 'none',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    fontSize: '0.875rem',
    fontWeight: 600,
    padding: '6px 16px',
    minWidth: '48px',
    textTransform: 'none',
    transition: theme.transitions.create(['background-color', 'color', 'box-shadow'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      backgroundColor: 'rgba(255, 215, 0, 0.08)',
      color: theme.palette.primary.light,
    },
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      backgroundColor: 'rgba(255, 215, 0, 0.12)',
      boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
      '&:hover': {
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        boxShadow: `0 0 0 1px ${theme.palette.primary.light}`,
      },
    },
  },
}));

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ value, onChange }) => {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: TimeRange | null
  ) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
      <StyledToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}
        aria-label="time range"
        size="small"
      >
        <ToggleButton value="6m" aria-label="6 months">
          6M
        </ToggleButton>
        <ToggleButton value="1y" aria-label="1 year">
          1Y
        </ToggleButton>
        <ToggleButton value="5y" aria-label="5 years">
          5Y
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
};

export default TimeRangeSelector;
