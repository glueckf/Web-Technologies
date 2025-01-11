// Function to toggle the loading spinner
console.log("Test - app.js wurde geladen");

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
function validateQuery(query) {
    if (query.trim() === "") {  // trim() entfernt Leerzeichen
        document.getElementById("emptyTextAlert").style.display = "block";
        return false;  // return false bei ungültiger Query
    }
    document.getElementById("emptyTextAlert").style.display = "none"; // Alert ausblenden wenn Query valid
    return true;  // return true bei gültiger Query
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
    const url  = `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&fields=title,cover_i,author_name,first_publish_year,subject,author_key`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsList = document.getElementById("resultsList");

            // Aufgabe 4.3.3.1
            // TODO: if no response or empty response, resultsList div must show this text "No results found"
            if (data.numFound === 0) {
                resultsList.innerHTML = '<div class="col-12"><p class="text-center">No results found</p></div>';
                console.log('No results found');
                return;
            }

            // Aufgabe 4.3.3.2
            // TODO: implement response to create card for each result using searchResultItem function and append to resultsList in document.
            // Hier kommt die Verarbeitung der gefundenen Bücher
            data.docs.forEach(
                book => {
                    const card = searchResultItem(book);
                    card.querySelector('button').dataset.bookData = JSON.stringify(book);
                    resultsList.appendChild(card);
                }
            )
            console.log('Data:', data); // Only for debugging



        })
        .catch(error => {
            // Aufgabe 4.3.4
            // TODO: show "Error fetching data" in resultsList when fetch results in any error.
            document.getElementById("resultsList").innerHTML = `
                <div class="col-12">
                    <p class="text-center text-danger">Error fetching data</p>
                </div>
            `;
            console.error('Fetch error:', error); // Only for debugging
        })
        .finally(() => {
            toggleLoadingSpinner(false);  // Spinner ausblenden
        });







  // Aufgabe 4.3.5
  // TODO: spinner is hidden in any case when fetch is complete.

  // Aufgabe 4.3.3.3
  // TODO: Attach click event to View Details button for each result to show bookDetails div on screen.

    document.getElementById("resultsList").addEventListener("click", function(event){

    })

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
