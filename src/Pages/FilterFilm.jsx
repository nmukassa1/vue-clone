import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

function FilterFilm({screenSize}) {
    return ( 
        <div className={`filter ${screenSize}`}>

            <div className="filter-button">
                <div className="filter-icon">
                    <FontAwesomeIcon icon={faFilter} />
                </div>
                <button>Filter All Films & Events</button>
            </div>

            <div className="filter-dropdown">
                {/* Filters */}
            </div>
        </div>
     );
}

export default FilterFilm;