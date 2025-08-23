class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST<T> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    }

    let current = this.root;

    while (true) {
      if (current.value === newNode.value) {
        return undefined;
      }

      if (current.value < newNode.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      }
    }
  }

  includes(value: T) {
    if (!this.root) return false;
    let current: Node<T> | null = this.root;
    while (current) {
      if (current.value === value) return true;
      if (current.value < value) current = current.right;
      else current = current.left;
    }
    return false;
  }

  bfs() {
    let current: Node<T> | null | undefined = this.root;
    let queue = [];
    let data = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      if (current) data.push(current.value);
      if (current && current.left) queue.push(current.left);
      if (current && current.right) queue.push(current.right);
    }

    return data;
  }

  dfsPreOrder(node: Node<T> | null = this.root, data: T[] = []) {
    if (!node) return data;
    data.push(node.value);
    if (node.left) this.dfsPreOrder(node.left, data);
    if (node.right) this.dfsPreOrder(node.right, data);
    return data;
  }

  dfsPostOrder(node: Node<T> | null = this.root, data: T[] = []) {
    if (!node) return data;
    if (node.left) this.dfsPostOrder(node.left, data);
    if (node.right) this.dfsPostOrder(node.right, data);
    data.push(node.value);
    return data;
  }

  dfsInOrder(node: Node<T> | null = this.root, data: T[] = []) {
    if (!node) return data;
    if (node.left) this.dfsInOrder(node.left, data);
    data.push(node.value);
    if (node.right) this.dfsInOrder(node.right, data);
    return data;
  }
}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree.dfsPostOrder());
// console.log(tree.includes(9));
