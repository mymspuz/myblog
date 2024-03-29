import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material'

import { useResponsive } from 'presentation/hooks'
import { Logo, Scrollbar, NavSection } from 'presentation/components'
import navConfig from './config'

const NAV_WIDTH = 280

const StyledAccount = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.grey[500], 0.12),
}))

type NavProps = {
    openNav: boolean
    onCloseNav: () => void
}

const Nav: React.FC<NavProps> = ({ openNav, onCloseNav }: NavProps) => {
    const { pathname } = useLocation()

    const isDesktop = useResponsive('up', 'lg', 'xl')

    const account = {
        displayName: 'Jaydon Frankie',
        email: 'demo@minimals.cc',
        photoURL: '/assets/images/avatars/avatar_default.jpg',
        role: 'admin'
    }

    useEffect(() => {
        if (openNav) {
            onCloseNav()
        }
    }, [pathname])

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
            }}
        >
            <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
                <Logo disabledLink={false}  sx={{}}/>
            </Box>

            <Box sx={{ mb: 5, mx: 2.5 }}>
                <Link underline="none">
                    <StyledAccount>
                        <Avatar src={account.photoURL} alt="photoURL" />

                        <Box sx={{ ml: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                                {account.displayName}
                            </Typography>

                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {account.role}
                            </Typography>
                        </Box>
                    </StyledAccount>
                </Link>
            </Box>

            <NavSection data={navConfig} />

            <Box sx={{ flexGrow: 1 }} />

        </Scrollbar>
    )

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV_WIDTH },
            }}
        >
            {isDesktop ? (
                <Drawer
                    open
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            width: NAV_WIDTH,
                            bgcolor: 'background.default',
                            borderRightStyle: 'dashed',
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            ) : (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    PaperProps={{
                        sx: { width: NAV_WIDTH },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </Box>
    )
}

export default Nav