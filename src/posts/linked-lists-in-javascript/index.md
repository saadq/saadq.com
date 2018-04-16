---
path: "/blog/linked-list"
date: "2015-11-15T00:00:00.000Z"
title: "Linked Lists in JavaScript"
id: 2
---

In this post, I'm going to be going over the implementation for a Linked List from scratch. I'm going to assume you already know what a linked list is, but here is a quick recap in case you need some brushing up:

A linked list is simply a list of objects which are referred to as "nodes". Each node has two properties – a data value and a pointer to the next node. The starting node in a linked list is referred to as the "head" node. The last node in a linked list points to `null`.

We are going to be implementing a singly linked list with the following methods:

* `isEmpty()` – Check to see if the list is empty

* `size()` – Get the current length of the list

* `prepend(val)` – Add a node with the given value to the front of the list

* `append(val)` – Add a node with the given value to the end of the list

* `remove(val)` – Remove a node with the given value from the list and return it

* `contains(val)` – Check to see if the list contains a given value

* `print()` – Print out the contents of the list

 Before we can get started on implementing those methods, we first have to come up with a way to actually create our list. Our linked list object is going to have one value inside it – a pointer to the head node which we need to be able to traverse our list.

Let's create a constructor function for our list:

```javascript
function LinkedList() {
  this.head = null;
}
```

We set `this.head` to `null` because the list will start off without any nodes. We can now create a new linked list by doing the following:

```javascript
var list = new LinkedList();
```

Doing this would let us create a linked list, but we wouldn't be able to do much with it right now. Let's now implement the methods that were mentioned above. There are two ways we can give methods to lists we create. We put them in the constructor function like this:

```javascript
function LinkedList() {
  this.head = null;

  this.isEmpty = function() {};
}
```

Or, we can add the method to the LinkedList's prototype:

```javascript
function LinkedList() {
  this.head = null;
}

LinkedList.prototype.isEmpty = function() {};
```

In both cases, we will be able to use the method the same way by doing `list.isEmpty()`. However, the second approach with the prototypes is usually the preferred way to do it. To explain, let's say we wanted to create two lists:

```javascript
function LinkedList() {
  this.head = null;

  this.isEmpty = function() {};
}

var list1 = new LinkedList();
var list2 = new LinkedList();
```

If we were to do it like this, each `LinkedList` instance would have its **own** `isEmpty()` method. Everytime we create a new list, each method will get redeclared for each instance and it will be worse on memory.

The second approach doesn't suffer from this:

```javascript
function LinkedList() {
  this.head = null;
}

LinkedList.prototype.isEmpty = function() {};

var list1 = new LinkedList();
var list2 = new LinkedList();
```

When we have the function defined on the prototype, the function is only in memory in *one* place, and is accessibly by every instance of a LinkedList. So using the `prototype` will let you create methods that are available to each instance without having to create the same methods multiple times. In the case where you want to create multiple instances, using prototypes is a lot more efficient.

Now that we've gotten that out of the way, let's start adding some methods to the LinkedList `prototype`.

## isEmpty()

An easy method. When we create a new list, `this.head` is initialized to `null`. That means that we can check if a list is empty by just checking if `head` is pointing to `null`.

```javascript
LinkedList.prototype.isEmpty = function() {
  return this.head === null;
};
```

## size()

To get the size of our list, we should first just check if our list is empty. In the case that it is, we just return 0. Otherwise we will need to initialize a counter variable to 0, and keep adding to it until we get to the end of the list.

We can use `this.head` as our starting point, and keep going to the `next` node to traverse. However, we don't wany to modify `this.head` directly because that will make us lose the ability to traverse again. So we will need to create a `current` variable that starts off at `this.head` and keeps traversing to the the next node until it reaches `null` which signifies the end of the list.

```javascript
LinkedList.prototype.size = function() {
  if (this.isEmpty()) {
    return 0;
  }

  var count = 0;
  var current = this.head;

  while (current !== null) {
    count++; // Increment the count
    current = current.next; // Go to the next item in the list
  }

  return count;
};
```

Because JavaScript has "truthiness", we could also just do `while (current)` instead of `while (current !== null)`.

## prepend(val)
To add a node to the front of the list, there are a few steps we need to do. First, We need to create the node that will be added. After that, we want to set it as the new `head` variable. We also have to make sure we make it's `next` value set to the original `head`.

So if we had a list that looked like this:

```
 [10] ––> [15] ––> [20] ––> null
  ↑
head
```

and we wanted to add a node with a value of `5`, we would first create the node:

```
  [5]     [10] ––> [15] ––> [20] ––> null
            ↑
           head
```

Then, we would make it's `next` value point to our old `head`:

```
  [5] --> [10] ––> [15] ––> [20] ––> null
            ↑
           head
```

Lastly, we need to set our `head` to point to the new node

```
  [5] --> [10] ––> [15] ––> [20] ––> null
   ↑
  head
```

And now it's been successfully added to the front of the list! Let's get this into code:

```javascript
LinkedList.prototype.prepend = function(val) {
  // First create the new node and set it's next value to the original head
  var newNode = {
    data: val,
    next: this.head
  };

  // Now, just update this.head to point to our new node
  this.head = newNode;
};
```

## append(val)
There are a few steps to adding a value to the end of a linked list. First, we have to create the node which will be added:

```javascript
LinkedList.prototype.append = function(val) {
  var newNode = {
    data: val,
    next: null
  };
};
```

We set `next` to `null` because this node is going to be added to the end of the list, and the last node of a list should point to `null`.

Next, we need to find out where we should add this node. We need to first check if there are no nodes in the list. In that case, we just want our `head` value to point to this new node we made. This can be done easily using our `isEmpty()` method.

```javascript
LinkedList.prototype.append = function(val) {
  var newNode = {
    data: val,
    next: null
  };

  if (this.isEmpty()) {
    this.head = newNode;
  }
};
```

In the case that our list is *not* empty, we will need to traverse to the end of the list, and make the last node point to this new node. Once again, we will be using a `current` variable so that we don't modify the pointer to our head node.

```javascript
LinkedList.prototype.append = function(val) {
  var newNode = {
    data: val,
    next: null
  };

  if (this.isEmpty()) {
    this.head = newNode;
  } else {
    // Get a reference to the first node
    var current = this.head;

    // Traverse to the end of the list
    while (current.next) {
      current = current.next;
    }

    // Set the `next` value of the last node in the list to point to newNode
    current.next = newNode;
  }
};
```

## remove(val)
There are several different types of remove methods we could do with a linked list. We could remove by index, remove by given node, or remove by given value. For the purposes of this example, we are going to be removing by given value.

First, we need to make sure that the value is actually in the list (otherwise there will be nothing to remove!). Using our `contains` method will make it easy to check if a value is in the list (the `contains` method hasn't been implemented yet, but we will fix that shortly).

```javascript
LinkedList.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return;
  }
};
```

If the value is in the list, there are two cases we need to account for:

1. The node to be removed is the `head` node
2. The node to be removed is somewhere else in the list

If we had a list like this:

```
[5] ––> [10] ––> [15] ––> [20] ––> null
 ↑
head
```

and we wanted to remove the first node, we would just have to change `head` to point to `[10]` instead of `[5]` and then remove the pointer from `[5]` to `[10]`. Technically, we don't have to remove the pointer because the node will be garbage collected anyways due to the fact that nothing is pointing to it anymore, but it doesn't hurt to be explicit. Doing all this would result in this list:

```
[5]     [10] ––> [15] ––> [20] ––> null
          ↑
        head
```

Because nothing is pointing to the node with a value of `5`, it will be removed by the garbage collector. Let's write the code for the removal of the `head` node:

```javascript
LinkedList.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return;
  }

  var current = this.head;
  var nodeToBeRemoved;

  // If the head node is the node to be removed
  if (current.data === val) {
    nodeToBeRemoved = current;
    this.head = nodeToBeRemoved.next; // Make head point to the next node
    nodeToBeRemoved.next = null; // Remove the `next` pointer from the node that was removed
  }

  // Return the node that we just removed
  return nodeToBeRemoved;
};
```

Let's say the node we wanted to remove was *not* the first node in the list. If we wanted to remove `[15]` from this list:

```
[5] ––> [10] ––> [15] ––> [20] ––> null
 ↑
head
```

all we have to do is traverse the list until we reach `[15]`. Then, we need to make the `next` value of `[10]` point to `[20]` instead of `[15]`. And then we can just remove the `next` value of `[15]`. To do this, we are going to need to keep track of both the `current` node and the `previous` node so that we can change the pointers to what we want. Let's put this in code:

```javascript
LinkedList.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return;
  }

  var current = this.head;
  var nodeToBeRemoved;

  if (current.data === val) {
    nodeToBeRemoved = current;
    this.head = nodeToBeRemoved.next;
    nodeToBeRemoved.next = null;
  } else {
    // Keep track of the previous node
    var previous = null;

    // Traverse the list until we get to the node to be removed
    while (current.data !== val) {
      previous = current;
      current = current.next;
    }

    // Save a reference to the node we will remove so that we can return it
    var nodeToBeRemoved = current;

    // After doing this, nothing will be pointing to `current` which will delete that node
    previous.next = current.next;
  }

  // Return the node that we just removed
  return nodeToBeRemoved;
};
```

## contains(val)
Let's implement this `contains` method now. We just need to traverse through the list, and return `true` if we find the given value in the list or return `false` if we don't find it. If the list is empty, don't bother traversing through the array, just return `false`.

```javascript
LinkedList.prototype.contains = function(val) {
  if (this.isEmpty()) {
    return false;
  }

  var current = this.head;

  // Traverse through the list and check the data value in each node
  while (current) {
    if (current.data === val) {
      return true;
    }
    current = current.next;
  }

  return false;
};
```

## print()
To print the list, we will just do a simple traversal and add each value to our `output` variable as we go along. We print the output at the end with `console.log`. Our output will be in this format: `[5, 10, 15, 20]`. If the list is empty, we will simply print `[]`.

```javascript
LinkedList.prototype.print = function() {
  if (this.isEmpty()) {
    console.log('[]');
    return;
  }

  var output = '[';
  var current = this.head;

  // Traverse through the list and add each data value to the output
  while (current) {
    output += current.data;
    if (current.next) {
      output += ', '; // Add a comma if there is a next value
    }
    current = current.next;
  }

  output += ']';
  console.log(output);
};
```

And there we go! We now have finished a linked list. Let's try our functions out and see if they work!

```javascript
var list = new LinkedList();

list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.prepend(10);

list.print(); // [10, 20, 30, 40, 50]

list.remove(40);
list.remove(10);

list.print(); // [20, 30, 50]

console.log(list.contains(20)); // true
console.log(list.contains(40)); // false
console.log(list.size()); // 3
console.log(list.isEmpty()); // false
```
