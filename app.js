class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.beginning = null;
        this.length = 0;
    }

    // 1. Insert new node to the start of the list.
    append(data) {
        this.beginning = new Node(data, this.beginning);
        this.length++;
    }
    // 2. Insert new node to the end of the list.
    prepend(data) {
        let node = new Node(data);
        let current;

        // If empty, make beginning
        if(!this.beginning) {
            this.beginning = node;
        } else {
            current = this.beginning;

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

    // 4. Prints the first node in the list
    head() {
        console.log(this.beginning);
    }
    // Print list data
    // printListData() {
    //     let current = this.beginning;

    //     while (current) {
    //         console.log(current.data);
    //         current = current.next;
    //     }
    // }
}


const ll = new LinkedList();

ll.append(200);
ll.append(500);
ll.prepend(400);

ll.head();