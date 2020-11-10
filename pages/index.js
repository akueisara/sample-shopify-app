import React, { useState } from 'react';
import { EmptyState, Layout, Page } from "@shopify/polaris";
import { ResourcePicker } from '@shopify/app-bridge-react';
import store from 'store-js';

function Index() {

    const [model, setModel] = useState({ open: false })
    const emptyState = !store.get('ids');

    function handleSelection(resources) {
        const idsFromResources = resources.selection.map((product) => product.id);
        setModel({ open: false });
        store.set('ids', idsFromResources);
        console.log('this is product ids', store.get('ids'))
    }

    return(
        <Page>
            <ResourcePicker
            resourceType="Product"
            showVariants={false}
            open={model.open}
            onCancel={() => setModel({ open: false })}
            onSelection={(resources) => handleSelection(resources)} 
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