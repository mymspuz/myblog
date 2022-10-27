import { NavLink as RouterLink } from 'react-router-dom'
import { Box, List, ListItemText } from '@mui/material'

import { StyledNavItem, StyledNavItemIcon } from './styles'

type NavSectionProps = {
    data: NavItemProps[]
}

type NavItemProps = {
    item: {
        title: string
        path: string
        icon: any
        info?: any
    }
}

const NavItem = ({ item }: NavItemProps) => {
    const { title, path, icon, info } = item

    return (
        <StyledNavItem
            component={RouterLink}
            to={path}
            sx={{
                '&.active': {
                    color: 'text.primary',
                    bgcolor: 'action.selected',
                    fontWeight: 'fontWeightBold',
                },
            }}
        >
            <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

            <ListItemText disableTypography primary={title} />

            {info && info}
        </StyledNavItem>
    )
}

const NavSection = ({ data }: NavSectionProps) => {
    return (
        <Box>
            <List disablePadding sx={{ p: 1 }}>
                {data.map((item) => (
                    <NavItem item={item.item} key={item.item.title} />
                ))}
            </List>
        </Box>
    )
}

export default NavSection