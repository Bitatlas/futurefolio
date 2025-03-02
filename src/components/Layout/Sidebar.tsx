import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Psychology as AIIcon,
  CurrencyBitcoin as BlockchainIcon,
  SmartToy as RoboticsIcon,
  Biotech as GenomicsIcon,
  Rocket as SpaceIcon,
  Factory as ManufacturingIcon,
  AccountBalance as FintechIcon,
  Language as InternetIcon,
  DirectionsCar as MobilityIcon,
} from '@mui/icons-material';

export interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
  onToggle?: () => void;
}

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'AI & Machine Learning', icon: <AIIcon />, path: '/ai' },
  { text: 'Blockchain & Digital Assets', icon: <BlockchainIcon />, path: '/blockchain' },
  { text: 'Robotics & Automation', icon: <RoboticsIcon />, path: '/robotics' },
  { text: 'Genomic Revolution', icon: <GenomicsIcon />, path: '/genomics' },
  { text: 'Space Exploration', icon: <SpaceIcon />, path: '/space' },
  { text: 'Advanced Manufacturing', icon: <ManufacturingIcon />, path: '/manufacturing' },
  { text: 'Fintech & Digital Payments', icon: <FintechIcon />, path: '/fintech' },
  { text: 'Next-Generation Internet', icon: <InternetIcon />, path: '/internet' },
  { text: 'Autonomous Mobility', icon: <MobilityIcon />, path: '/mobility' },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ px: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          FutureFolio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Premium Stock Picks
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
              sx={{
                mx: 1,
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 215, 0, 0.2)',
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
