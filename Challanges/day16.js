// day16 challenge - detecting linked list 
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast !== slow) {
        if (fast === null || fast.next === null) {
            return false; // If fast or fast.next is null, there is no cycle
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true; // If fast and slow meet, there is a cycle
}

// Example usage:
// Creating a linked list with a cycle
const head = new ListNode(1);
const secondNode = new ListNode(2);
const thirdNode = new ListNode(3);
head.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = head; // Creating a cycle

const hasCycleResult = hasCycle(head);
console.log('Does the linked list have a cycle?', hasCycleResult); // Output: true
