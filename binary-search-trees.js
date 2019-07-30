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
tree.insert(5);
tree.insert(7);
tree.insert(11);
tree.insert(12);
tree.insert(9);

function findHeight(tree){
  let count = 0;

  if(tree.left){
    let leftHeight = 1 + findHeight(tree.left);
    if(leftHeight > count) {
      count = leftHeight;
    }
  }
  if(tree.right){
    let rightHeight = 1 + findHeight(tree.right);
    if(rightHeight > count) {
      count = rightHeight;
    }
  } if (!tree.left && !tree.right) {
    count = 1;
  }

  return count;
}

// console.log(findHeight(tree));

function isBST(tree){
  if(tree.left){
    if(tree.left.key > tree.key){
      return false;
    }
    return isBST(tree.left)
  }
  if(tree.right){
    if(tree.right.key < tree.key){
      return false;
    }
    return isBST(tree.right)
  }
  return true;
}

// console.log(isBST(tree));

function findThirdLargest(t, result){
  // let max = t.key;


  if(t.right){
    // max= t.right.key;
     findThirdLargest(t.right, result);
  }
  // console.log(`max: ${result.thirdLargest}, count: ${result.count}`);
  result.count ++;

  if(result.count === 3){
    result.thirdLargest = t.key;
    // console.log(`max: ${result.thirdLargest}, count: ${result.count}`);
    return result.thirdLargest;
  }
  if(t.left){
     findThirdLargest(t.left, result)
  }
  
}

// console.log(findThirdLargest(tree, {count: 0, thirdLargest: null}))

function isBalanced(tree) {
  if (!tree.left && !tree.right) {
    return true
  }

  let left = findHeight(tree.left)
  let right = findHeight(tree.right)
  let diff = Math.abs(left - right)

  if (diff <= 1 && isBalanced(tree.left) && isBalanced(tree.right)) {
    return true
  }

  return false
}

let tree2 = new BinarySearchTree();
tree2.insert(3);
tree2.insert(4);
tree2.insert(5);
tree2.insert(6);
tree2.insert(7);

console.log(isBalanced(tree))