import React from 'react';
import {
    Typography,
    Avatar,
    Grid2,
    Box
} from '@mui/material';
import { ReactTyped } from 'react-typed';

import { styled } from '@mui/system';

const HeaderContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1
}));

const HeaderName = styled(Typography)(({theme}) => ({
    color: 'tomato'
}));

const HeaderTitle = styled(Typography)(({theme}) => ({
    color: 'tan',
    marginBottom: '3rem',
}));

const HeaderAvatar = styled(Avatar)(({theme}) => ({
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
}));

export function Header() {
    return (
        <Box>
            <Grid2 container>
                <HeaderAvatar src="" alt="HK"/>
            </Grid2>
            <HeaderName variant='h4'>
                <ReactTyped
                    strings={[ 'Hugh Kim' ]}
                    typeSpeed={40}
                />
            </HeaderName>
            <br/>
            <HeaderTitle variant='h5'>
                <ReactTyped
                    strings={[ 'Web Development', 'REST APIs', 'Unit Testing' ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </HeaderTitle>
        </Box>
    )
}