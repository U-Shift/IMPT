export type ViewLevel = 'hex' | 'freguesia' | 'municipality';

export type MetricDef = {
    id: string;
    label: string;
    category: string;
    icon?: string;
    description?: string;
    format: (v: number) => string;
    isDivergent?: boolean;
    higherTheBetter?: boolean;
    unit?: string;
    viewLevel?: 'municipality' | 'all'; // Restrict visibility
    isFake?: boolean; // Label as placeholder data
    showDetails?: boolean; // Show in "Area details" section
    showDetailsOnlyWhenSelected?: boolean; // Show in details only when active
};
