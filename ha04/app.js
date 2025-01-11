// Function to toggle the loading spinner
function toggleLoadingSpinner(show) {
  const spinner = document.getElementById('loadingSpinner');
  if (show) {
    spinner.classList.remove('d-none');
    spinner.classList.add('d-block');
  } else {
    spinner.classList.remove('d-block');
    spinner.classList.add('d-none');
  }

}

// Function to validate the query
function validateQuery(query){
  // Aufgabe 4.3.1
  // TODO: implement me
    if (query === "") {
        // show html element with id "emptyTextAllert"
        document.getElementById("emptyTextAllert").style.display = "block";
    }
}

// Function to create html for each search result item
function searchResultItem(book){
    const card = document.createElement('div');
    card.className = 'col-12 mb-4';

    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Author: ${book.author_name?.join(', ') || 'Unknown Author'}</p>
          <button class="btn btn-primary btn-sm">View Details</button>
        </div>
      </div>
    `;
    return card;
}


// Function to perform the search
function performSearch() {
  const query = document.getElementById('searchInput').value;

  // validate input for empty query.
  validateQuery(query);
  if(!query){
    return;
  }  
  
  // Show the spinner when the search starts
  toggleLoadingSpinner(true);


  // Aufgabe 4.3.2
  // TODO: implement Fetch with given url
   const url = 'https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&fields=title,cover_i,author_name,first_publish_year,subject,author_key';
    fetch(url)
        .then(response => // do something with response)
        .catch(error => // do something with error)
        .finally(() => // do something after fetch is complete)
  // Aufgabe 4.3.3.1
  // TODO: if no response or empty response, resultsList div must show this text "No results found"

  // Aufgabe 4.3.3.2
  // TODO: implement response to create card for each result using searchResultItem function and append to resultsList in document.

  // Aufgabe 4.3.4
  // TODO: show "Error fetching data" in resultsList when fetch results in any error. 

  // Aufgabe 4.3.5
  // TODO: spinner is hidden in any case when fetch is complete.

  // Aufgabe 4.3.3.3
  // TODO: Attach click event to View Details button for each result to show bookDetails div on screen.

}



//////////////////////////////////////////////////

// Aufgabe 4.2.1
// TODO: add click event on search button and performSearch function is called
document.getElementById("searchButton").addEventListener(
    "click",performSearch
)

// Aufgabe 4.2.2
// TODO: allow enter button to start search and performSearch function is called
document.getElementById("searchInput").addEventListener(
    "keypress", function(event){
        if(event.key === "Enter"){
            performSearch();
        }
    })
