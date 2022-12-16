class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.Head = null;
        this.length = 0;
    }

    // 1. Insert new node to the start of the list.
    append(data) {
        this.Head = new Node(data, this.Head);
        this.length++;
    }
    // 2. Insert new node to the end of the list.
    prepend(data) {
        let node = new Node(data);
        let current;

        // If empty, make head
        if(!this.Head) {
            this.Head = node;
        } else {
            current = this.Head;

            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.length++;
    }
    
    // 3. Print the length of the list.
    size() {
        console.log(this.length);
    }

    // 4. Prints the first node in the list.
    head() {
        let current = this.Head
        console.log(current.data);
    }

    // 5. Prints the last node in the list.
    tail() {
        let current = this.Head;
        while (current) {
            if (!current.next) console.log(current.data);
            current = current.next;
        }
    }

    // 6. Prints the node at the given index.
    at(index) {
        let current = this.Head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        console.log(current.data);
    }
    // 7. Remove the last element from the list.
    pop() {
        let current = this.Head;
        let previous;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
    }

    // 8. Print true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let current = this.Head;
        while (current) {
            if (current.data === value) {   // If the current node.data === value, print true then break;
                console.log("True")
                return;
            } else {                        // If the current node !== value, 
                if (!current.next) {        // loop through the list and if hit !current.next then break.
                    console.log("False");
                }
            }
            current = current.next
        }
    }

    // 9. Print the index of the node containing value, or null if not found.
    find(value) {
        let index = 0;
        let current = this.Head;
        while (current) {
            if (current.data === value) {
                console.log(index);
                return;
            }
            if (!current.next) {
                console.log("Null")
            }
            current = current.next;
            index++;
        }
    }

    // Print every node in the list.
    toString() {
        let current = this.Head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const ll = new LinkedList();

ll.append(200);
ll.append(400);
ll.prepend(500);

ll.find(400)
// ll.contains(700);
// ll.toString();