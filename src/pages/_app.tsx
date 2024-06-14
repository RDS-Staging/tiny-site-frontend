import '@/styles/global.css';

import { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import CreateNew from '@/components/CreateNew';

interface MyAppProps {
    Component: React.FC<AppProps>;
    pageProps: AppProps;
}

export const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 3 } } });

export default function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <CreateNew />
        </QueryClientProvider>
    );
}
