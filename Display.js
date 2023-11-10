// Fronts

class SLLNode {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
    }

    // Add Front
    addFront(value) {
        var newNode = new SLLNode(value)
        newNode.next = this.head
        this.head = newNode
        return this.head
    }

    // Remove Front
    removeFront() {
        if(this.head == null) {
            return this.head
        }
        var removedNode = this.head
        this.head = removedNode.next
        removedNode.next = null
        return this.head
    }

    // front
    front() {
        if (this.head == null) {
            return null
        }
        else {
            return this.head.value
        }
        // return this.head ? this.head.value : null
    }

    display() {
        var listStr = ""
        if (this.head == null) {
            return ""
            // return "Empty list"
            // return listStr
        }
        listStr += this.head.value
        var runner = this.head.next
        while (runner != null) {
            listStr += ","+ runner.value
            runner = runner.next
        }
        return listStr
    }
}

var mySLL = new SLL()
console.log(mySLL.display())
mySLL.addFront(10)
// console.log(mySLL.front())
mySLL.addFront(5)
mySLL.addFront(3)


// console.log(mySLL)
// mySLL.removeFront()

// console.log(mySLL)
// console.log(mySLL.head.next)
