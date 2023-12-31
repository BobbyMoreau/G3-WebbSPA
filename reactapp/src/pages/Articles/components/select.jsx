import { useDispatch, useSelector } from 'react-redux';
import { setSorting, selectedSorting} from '../redux/topicSortSlice';

const SelectsComponent = () => {
    const sorting = useSelector(selectedSorting);
    const dispatch = useDispatch();

    const handleSortingChange = (e) => {
        const selectedSorting = e.target.value;
        dispatch(setSorting(selectedSorting));
    };

    return (
        <div style={{ marginBottom: '15px' }}>
            <label htmlFor="sorting">Sortera:</label>
            <select className="sortera_ng" id="sorting" name="sorting" value={sorting} onChange={handleSortingChange}>
                <option value="newest">Nya</option>
                <option value="oldest">Äldre</option>
            </select>
        </div>
    );
};

export default SelectsComponent;