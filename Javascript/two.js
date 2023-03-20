let list = document.createElement('ul');
document.body.appendChild(list);

let items = ['Python', 'Java', 'C++', 'JavaScript', 'C#', 'PHP'];

for (let i = 0; i < items.length; i++) {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(items[i]));
    list.appendChild(item);
}