import countries_data from '../utils/countriesData';
import * as actions from '../actions/actionTypes';

const initalState = {
  sorting: '',
  search: '',
  chartPeriod: 'Last 7 Days',
  countries: countries_data.countries, // this is an []
  dataLoaded: false,
  countriesProcessed: 0
};

export default function (state = initalState, action) {
  switch (action.type) {
    // case actions.SET_COUNTRY_NAME:
    //   return {
    //     ...state,
    //     // Find the country whose code matches payload.countryId
    //     countries:
    //       state.countries.map( country => country.Slug === action.payload.countryId ? (country.name = action.payload.countryInfo[0].info.title, country) : country )
    //     }

    case actions.SET_COUNTRY_TODAY_DATA:
      return {
        ...state,
        countries:
          state.countries.map( country => country.ISO2 === action.payload.countryCode ? (country.todayData = action.payload.countryData, country) : country )
        }

    case actions.SET_COUNTRY_YESTERDAY_DATA:
      return {
        ...state,
        countries:
          state.countries.map( country => country.ISO2 === action.payload.countryCode ? (country.yesterdayData = action.payload.countryData, country) : country )
        }
    case actions.SET_COUNTRY_DAILY_CASES:

      return {
        ...state,
        countries:
          state.countries.map( country => country.ISO2 === action.payload.countryCode ? (country.dailyCases = action.payload.covidData.todayCases, country) : country )
        }

    case actions.SET_COUNTRY_DAILY_DEATHS:
      return {
        ...state,
        countries:
          state.countries.map( country => country.ISO2 === action.payload.countryCode ? (country.dailyDeaths = action.payload.covidData.todayDeaths, country) : country )
        }

    case actions.SET_COUNTRY_TOTAL_CASES:
      return {
        ...state,
        countries:
          state.countries.map( country => country.ISO2 === action.payload.countryCode ? (country.totalCases = action.payload.covidData.cases, country) : country )
        }

    case actions.SET_COUNTRY_TOTAL_DEATHS:
      return {
        ...state,
        countries:
          state.countries.map( country => country.ISO2 === action.payload.countryCode ? (country.totalDeaths = action.payload.covidData.deaths, country) : country )
        }

    case actions.SET_COUNTRY_CASES_DELTA:
      return {
        ...state,
        countries:
          state.countries.map( country => country.ISO2 === action.payload.countryCode ? (country.yesterdayCases = action.payload.covidData.todayCases, country) : country )
        }

    case actions.SET_COUNTRY_DEATHS_DELTA:
      return {
        ...state,
        countries:
          state.countries.map( country => country.ISO2 === action.payload.countryCode ? (country.yesterdayDeaths = action.payload.covidData.todayDeaths, country) : country )
        }

    case actions.SET_DATA_LOADED:
      return {
        ...state,
        dataLoaded: action.payload,
      }

    case actions.INCREMENT_COUNTRY_COUNT:
      return {
        ...state,
        countriesProcessed: ++state.countriesProcessed,
      }

    default:
      return state;
  }
}