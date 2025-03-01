import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  Tooltip,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  SmartToy as AIIcon,
  Link as BlockchainIcon,
  PrecisionManufacturing as RoboticsIcon,
  Biotech as GenomicsIcon,
  Rocket as SpaceIcon,
  Print as ManufacturingIcon,
  Payments as FintechIcon,
  Language as InternetIcon,
  DirectionsCar as MobilityIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Define the drawer width
const drawerWidth = 240;

// Styled components
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

// Define the navigation items
const navItems = [
  { name: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { name: 'AI & Machine Learning', path: '/ai', icon: <AIIcon /> },
  { name: 'Blockchain & Digital Assets', path: '/blockchain', icon: <BlockchainIcon /> },
  { name: 'Robotics & Automation', path: '/robotics', icon: <RoboticsIcon /> },
  { name: 'Genomic Revolution', path: '/genomics', icon: <GenomicsIcon /> },
  { name: 'Space Exploration', path: '/space', icon: <SpaceIcon /> },
  { name: 'Advanced Manufacturing', path: '/manufacturing', icon: <ManufacturingIcon /> },
  { name: 'Fintech & Digital Payments', path: '/fintech', icon: <FintechIcon /> },
  { name: 'Next-Generation Internet', path: '/internet', icon: <InternetIcon /> },
  { name: 'Autonomous Mobility', path: '/mobility', icon: <MobilityIcon /> },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, onToggle }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handle navigation
  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={onClose}
      sx={{
        width: open ? drawerWidth : theme.spacing(7),
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : theme.spacing(7),
          boxSizing: 'border-box',
          borderRight: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.default,
          transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
        },
      }}
    >
      <DrawerHeader>
        {open && (
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', pl: 2 }}>
            <Typography variant="h6" color="primary" fontWeight="bold" noWrap>
              FutureFolio
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
              by Be Limitless
            </Typography>
          </Box>
        )}
        <IconButton onClick={onToggle} sx={{ color: theme.palette.primary.main }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ pt: 1 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.path} disablePadding sx={{ display: 'block', mb: 0.5 }}>
              <Tooltip title={open ? '' : item.name} placement="right">
                <ListItemButton
                  selected={isActive}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    mx: 1,
                    borderRadius: '8px',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(255, 215, 0, 0.15)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 215, 0, 0.25)',
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : 'auto',
                      justifyContent: 'center',
                      color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: open ? 1 : 0,
                      '& .MuiTypography-root': {
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                      },
                    }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
