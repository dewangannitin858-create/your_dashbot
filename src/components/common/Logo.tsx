import { Box } from '@mantine/core';

type LogoProps = {
    size?: number;
    onDark?: boolean;
};

const Logo = ({ size = 32 }: LogoProps) => (
    <Box component="span" lh={0} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="32" height="32" rx="9" fill="url(#dashbot_grad)" />
            <rect x="7" y="7" width="8" height="8" rx="2.5" fill="white" fillOpacity="0.95" />
            <rect x="17" y="7" width="8" height="5" rx="2" fill="white" fillOpacity="0.6" />
            <rect x="17" y="14" width="8" height="11" rx="2.5" fill="white" fillOpacity="0.95" />
            <rect x="7" y="17" width="8" height="8" rx="2.5" fill="white" fillOpacity="0.6" />
            <defs>
                <linearGradient id="dashbot_grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6" />
                    <stop offset="0.5" stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#14B8A6" />
                </linearGradient>
            </defs>
        </svg>
    </Box>
);

export default Logo;