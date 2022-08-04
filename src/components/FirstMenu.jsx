import { useState } from "react";
import user from "../api/usersApi";
import AsyncSelect from 'react-select/async';
import { Card } from 'react-bootstrap';

const FirstMenu = () => {

    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

  // handle input change event
  const handleInputChange = value => {
    setInputValue(value);
    console.log('inputValue :>> ', value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
    console.log('selectedvalue :>> ', value);
  }

  const fetchData = () => {
    return user.get('/users?page=1').then(result => {
      const response = result.data.data;
      return response;
    });
  }

  return (
    <div className="App">
      <div>
        <AsyncSelect
        cacheOptions
        defaultOptions
        value = {selectedValue}
        getOptionLabel = {e => e.first_name + ' ' + e.last_name}
        getOptionValue = {e => e.id}
        loadOptions = {fetchData}
        onInputChange = {handleInputChange}
        onChange = {handleChange}
        />
      </div>
        <Card border="dark" style={{ width: '15rem' }}>
            <Card.Body>
                <Card.Title>#{selectedValue.id}</Card.Title>
                {selectedValue.avatar && (
                <Card.Img variant="top" src={selectedValue.avatar} alt={`Avatar of user ${selectedValue.id}`}/>
                )}
            <br/><br/>
            <Card.Title>{selectedValue.first_name} {selectedValue.last_name}</Card.Title>
            </Card.Body>
        </Card>
    </div>
  );
}

export default FirstMenu