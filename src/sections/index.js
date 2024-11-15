import React from 'react';
import {
    Box,
    styled,
} from '@mui/material';
import { InView } from "react-intersection-observer";

const StyledSection = styled(Box)(({ theme }) => ({
    // minHeight: '60vh',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: '64px 10px 30px 10px',
}));

export function Sections( props ) {
    
    const sections = props.sections;
    
    return (
        <>
            {sections.map((section, index) => {
                const SectionComponent = section.component;
                const rootMargin = '-50% 0% -50% 0%';
                const style = ( index + 1 === sections.length ) ? { minHeight: '500px' }: {};
                return (
                    <InView onChange={props.setInView} rootMargin={rootMargin} key={index}>
                        {({ ref }) => {
                            return (
                                <StyledSection
                                    key={index}
                                    ref={ref}
                                    id={section.id}
                                    style={style}
                                >
                                    <SectionComponent/>
                                </StyledSection>
                            )
                        }}
                    </InView>
                )}
            )}

        </>
    )

}