import { create } from 'zustand';

import { FILTERS_OPTIONS, CURRENCIES } from '../constants';
import { FilterStore } from '../models/ITickets';

const useFilterStore = create<FilterStore>((set) => ({
    filters: [],
    currency: CURRENCIES[0],
    
    toggleFilter: (filter) =>
        set((state) => {
            const allSelected = state.filters.includes(FILTERS_OPTIONS[0]);
            let updatedFilters = [];
    
            if (filter === FILTERS_OPTIONS[0]) {
                updatedFilters = allSelected ? [] : [FILTERS_OPTIONS[0], ...FILTERS_OPTIONS.slice(1)];
            } else {
                updatedFilters = state.filters.includes(filter)
                    ? state.filters.filter((f) => f !== filter) 
                    : [...state.filters, filter];
                
                if (allSelected) {
                    updatedFilters = updatedFilters.filter((f) => f !== FILTERS_OPTIONS[0]);
                }
            }
    
            return {
                filters: updatedFilters,
            };
        }),

    selectOnlyOneFilter: (filter) => {
        set((state) => ({
            filters: state.filters.filter((f) => f === filter)
        }));
    },

    setCurrency: (currency) => set({ currency }),
        
}));
  
  export default useFilterStore;