import React from 'react';
import CheckIcon from './icons/CheckIcon';
import useFilterStore from '../store/filter';
import {CURRENCIES, FILTERS_OPTIONS} from '../constants';

const Filters = () => {
    const filters = useFilterStore((state) => state.filters);
    const toggleFilter = useFilterStore((state) => state.toggleFilter);
    const selectOnlyOneFilter = useFilterStore((state) => state.selectOnlyOneFilter);
    const setCurrency = useFilterStore((state) => state.setCurrency);
    const currency = useFilterStore((state) => state.currency);
    const [selectedCurrency, setSelectedCurrency] = React.useState<string | null>(currency);

    return (
        <div className="rounded bg-white w-full h-full p-4">
            <div>
                <h3 className='uppercase text-dark-gray text-sm font-bold text-left'>Валюта</h3>
                <div className="flex text-xs mt-2 text-blue font-bold">
                    {CURRENCIES.map((currency) => (
                        <button
                            key={currency}
                            className={`uppercase border first:rounded-l last:rounded-r first:border-r-0 last:border-l-0 border-light-gray-2 p-2 px-4 ${
                                selectedCurrency === currency ? 'bg-blue text-white border-blue' : 'hover:bg-transparent-blue hover:border-blue'
                            }`}
                            onClick={() => {
                                setSelectedCurrency(currency);
                                setCurrency(currency);
                            }}
                        >
                            {currency}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <h3 className="uppercase text-dark-gray text-sm font-bold text-left">количество пересадок</h3>
                <div className="flex flex-col text-xs mt-2">
                    {FILTERS_OPTIONS.map((filter) => (
                        <label key={filter} className="flex gap-2 items-center cursor-pointer p-2 px-0 relative peer">
                            <input
                                type="checkbox"
                                className="peer appearance-none w-4 h-4 z-10 rounded border border-light-gray-2 checked:border-blue checked:bg-transparent-blue forced-colors:appearance-auto peer/draft cursor-pointer"
                                checked={filters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                            />
                            {filters.includes(filter) && (
                                <CheckIcon className="invisible z-10 peer-checked:visible absolute w-4 h-4 stroke-blue forced-colors:hidden ml-0.5 mt-0.5" />
                            )}

                            <span className='z-10'>{filter}</span>
                            <span className="absolute inset-0 bg-transparent-blue opacity-0 transition-opacity duration-300 peer-hover:opacity-100 -left-4 -right-4"></span>

                            {filter !== FILTERS_OPTIONS[0] && <a 
                                className='font-bold text-blue uppercase text-[10px] opacity-0 peer-hover:opacity-100 mt-0.5 z-10 flex ml-auto mr-0'
                                onClick={(e) => {
                                    e.preventDefault();
                                    selectOnlyOneFilter(filter);
                                }}
                            >
                                только
                            </a>
                            }
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filters;