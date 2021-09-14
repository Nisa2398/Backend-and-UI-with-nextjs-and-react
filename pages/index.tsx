import { NextPage } from 'next'
import Link from 'next/link'
import * as React from 'react'
import Layout from '../components/layout'
import useApiData from '../hooks/use-api-data'
import Airport from '../types/airport'
import Search from '../components/search-filter';
import Paginate from '../components/pagination';
import LinearProgress from "@material-ui/core/LinearProgress";
const Page: NextPage = () => {
  var isLoading = true
  const airports = useApiData<Airport[]>('/api/airports', [])
  const [page, setPage] = React.useState(0);
  const [recordPerPage, setRecordPerPage] = React.useState<number>(10)
  const [searchQuery, setSearchQuery] = React.useState("")
  function handleSearch(newSearchQuery) {
    setSearchQuery(newSearchQuery)
  }

  if (airports.length > 0) {
    isLoading = false
  }
  if (isLoading) return <LinearProgress />
  const firstIndex = page * recordPerPage;
  const secondIndex = firstIndex + recordPerPage;
  const activeData = airports.slice(firstIndex, secondIndex)
  function handlePagination(paginatedData) {
    setPage(paginatedData.page)
    setRecordPerPage(paginatedData.recordPerPage)
  }
  return <Layout>
    <h1 className='text-2xl font-bold'>Code Challenge: Airports</h1>

    <h2 className="mt-10 text-xl font-semibold">All Airports</h2>

    <div>
      <Search handleSearch={handleSearch} />
      {activeData.filter((val) => {
        if (searchQuery == "") {
          return val;
        }
        else if (val.iata.toLowerCase().includes(searchQuery.toLowerCase())) {
          return val
        }
        else if (val.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return val
        }
        else if (val.city.toLowerCase().includes(searchQuery.toLowerCase())) {
          return val
        }
        else if (val.country.toLowerCase().includes(searchQuery.toLowerCase())) {
          return val
        }
      })

        .map(airport => (
          <Link href={`/airports/${airport.iata.toLowerCase()}`} key={airport.iata}>
            <a className='flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none'>
              <span>
                {airport.name}, {airport.city}
              </span>
              <span className='ml-auto text-gray-500'>
                {airport.country}
              </span>
            </a>
          </Link>
        ))}
    </div>
    <Paginate airports={airports} handlePagination={handlePagination} />
  </Layout>
}

export default Page
