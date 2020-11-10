import React, { useState } from 'react';
import { EmptyState, Layout, Page } from "@shopify/polaris";
import { ResourcePicker } from '@shopify/app-bridge-react';

function Index() {

    const [model, setModel] = useState({ open: false })

    return(
        <Page>
            <ResourcePicker
            resourceType="Product"
            showVariants={false}
            open={model.open}
            onCancel={() => setModel({ open: false })} 
            />
            <Layout>
                <EmptyState
                heading="Manage your inventory transfers"
                action={{ 
                    content: 'Select Products',
                    onAction: () => setModel({ open: true })
                }}
                secondaryAction={{ content: 'Learn more', url: 'https://help.shopify.com'}}
                image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg">
                    <p>Select Products</p>
                </EmptyState>
            </Layout>
        </Page>
    )
}

export default Index;