// Book constuctor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI(){}


//  Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create table row element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
    `;

    list.appendChild(row);
}

// Show alerts 
UI.prototype.showAlert = function(message, className) {
    
}

// clear fields 
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
// Event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('title').value
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value
    
    // Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '') {
        // Error alert
        UI.showAlerts('Please fill in all fields', 'error')
    } else {
       // Add book to list
    ui.addBookToList(book);
    // Clear fields
    ui.clearFields(); 
    }


    e.preventDefault();
});