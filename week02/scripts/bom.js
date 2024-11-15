input, button, list;{
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('newlist');
}

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;
    // textContent is a property that represents the text content of a node and its descendants.
    // textContent is preferred over innerHTML because it is more secure. However, if you need to include HTML tags, then you would use innerHTML. textContent will not render HTML tags. It will display the tags as text.
    // why is the value property used? Because the input variable references an HTML input text field and that is what is wanted, i.e., the user's entry.
        // example html: <input type="text" id="favchap" placeholder="Alma 5">
deleteButton.textContent = '❌';

li.append(deleteButton);

list.append(li);