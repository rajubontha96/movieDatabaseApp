import React, {useState} from 'react'

const Tabs = ({activeTab, onTabChange, onSearch}) => {
  const [query, setQuery] = useState('')

  const handleSearchClick = () => {
    if (query.trim() !== '') {
      onSearch(query)
      setQuery('')
    }
  }

  return (
    <div>
      <nav>
        <button
          type="button"
          onClick={() => onTabChange('Popular')}
          aria-label="Popular Tab"
        >
          Popular
        </button>
        <button
          type="button"
          onClick={() => onTabChange('Top Rated')}
          aria-label="Top Rated Tab"
        >
          Top Rated
        </button>
        <button
          type="button"
          onClick={() => onTabChange('Upcoming')}
          aria-label="Upcoming Tab"
        >
          Upcoming
        </button>
      </nav>

      <div>
        <input
          type="text"
          role="textbox"
          placeholder="Search Movies"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  )
}

export default Tabs
