import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { FormEvent, useContext } from 'react';
import { CartContext } from '../../../providers/CartContext';

const SearchForm = () => {

  const {setFilteredProducts, setSearchValue, searchValue } = useContext(CartContext)

  const handleSubmit = (event:FormEvent) =>{
    event.preventDefault()

    setFilteredProducts(searchValue)
  }

  return(
    <StyledSearchForm onSubmit={handleSubmit}>
      <input type='text' placeholder='Digitar pesquisa' value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  )

};

export default SearchForm;
