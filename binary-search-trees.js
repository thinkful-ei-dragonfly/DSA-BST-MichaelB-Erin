class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      else if (this.left) {
        this._replaceWith(this.left);
      }
      else if (this.right) {
        this._replaceWith(this.right);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

}

let BST = new BinarySearchTree()

BST.insert(3,3)
BST.insert(1,1)
BST.insert(4,4)
BST.insert(6,6)
BST.insert(9,9)
BST.insert(2,2)
BST.insert(5,5)
BST.insert(7,7)

// BST.insert('E')
// BST.insert('A')
// BST.insert('S')
// BST.insert('Y')
// BST.insert('Q')
// BST.insert('U')
// BST.insert('E')
// BST.insert('U')
// BST.insert('S')
// BST.insert('T')
// BST.insert('I')
// BST.insert('O')
// BST.insert('N')

// console.log(BST)

// function tree(t){
//   if(!t){
//       return 0;
//   }
//   return tree(t.left) + t.value + tree(t.right)
// }

// console.log(tree(BST))

// input: [1,2,3,4,5]
//output: 5

//input: [3, 2 , 4, 1 , 5]
//output: 3

// function findHeight(tree){
//   let counter = 0;
//   // if(tree.key === null){
//   //   return 0;
//   // }
//   if(tree.right === null && tree.left === null){
    
//   }

//   find

//   findHeight()

// }

// console.log(findHeight([1,2,3,4,5]));

let tree = new BinarySearchTree();
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(1);
tree.insert(5);

function findHeight(tree){
  let count = 0;

  if(tree.left){
    let leftHeight = 1 + findHeight(tree.left);
    if(leftHeight > count) {
      count = leftHeight;
    }
  }
   else if(tree.right){
    let rightHeight = 1 + findHeight(tree.right);
    if(rightHeight > count) {
      count = rightHeight;
    }
  } else {
    count = 1;
  }

  return count;
}

console.log(findHeight(tree));