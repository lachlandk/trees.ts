export class BinaryTreeNode {
    constructor(value = undefined) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
export class BinaryTree {
    constructor() {
        this.root = null;
        this.order = ((value1, value2) => value1 >= value2);
    }
    insert(data) {
        const node = new BinaryTreeNode(data);
        // compare(currentNode, node) = true if currentNode > node
        // if root is null then insert node into tree, else search the tree for correct position
        if (this.root === null) {
            this.root = node;
        }
        else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(node, newNode) {
        // if newNode >= node, move right, else move left
        if (this.order(newNode.value, node.value)) {
            // if right is null, insert node, else search again with right as new root
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
        else {
            // if left is null, insert node, else search again with left as new root
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
    }
}
