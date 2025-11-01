import React, {useState} from 'react'
import Popular from './features/Popular'
import TopRated from './features/TopRated'
import Upcoming from './features/Upcoming'
import Search from './features/Search'
import Tabs from './features/Tabs'
import './App.css'

const App = () => {
  const [activeTab, setActiveTab] = useState('Popular')
  const [searchQuery, setSearchQuery] = useState('')

  const renderContent = () => {
    switch (activeTab) {
      case 'Top Rated':
        return <TopRated />
      case 'Upcoming':
        return <Upcoming />
      case 'Search':
        return <Search query={searchQuery} />
      default:
        return <Popular />
    }
  }

  const handleSearch = query => {
    setSearchQuery(query)
    setActiveTab('Search')
  }

  return (
    <div>
      <h1>movieDB</h1>
      <Tabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onSearch={handleSearch}
      />
      {renderContent()}
    </div>
  )
}

export default App
