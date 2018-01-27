const getWaterFromWalls = () => {

  // const walls = document.getElementsByClassName('walls')[0].value;
  const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
  const data = { walls };
  const url = "http://localhost:3000/walls";

  console.log(`this is about to be sent: ${JSON.stringify(data)}`);

  const options = {
  	method: 'POST',
  	body: JSON.stringify(data),
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	})
  };

  fetch(url, options)
    .then(res => res.json())
    .then(response => console.log(`data has been parsed: ${response}`))
    .catch(error => console.log(`Error: ${error}`));

};