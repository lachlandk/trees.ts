export class BinaryTreeNode {
    value: unknown;
    left: BinaryTreeNode | null = null
    right : BinaryTreeNode | null = null

    constructor(data: unknown) {
        this.value = data;
    }
}

export class BinaryTree {
    root: BinaryTreeNode | null = null
    order: ((data1: unknown, data2: unknown) => boolean) = ((data1, data2) => (data1 as number) >= (data2 as number))

    insert(data: unknown) {
        const node = new BinaryTreeNode(data)
        // compare(currentNode, node) = true if currentNode > node

        // if root is null then insert node into tree, else search the tree for correct position
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(node: BinaryTreeNode, newNode: BinaryTreeNode) {
        // if newNode >= node, move right, else move left
        if (this.order(newNode.value, node.value)) {
            // if right is null, insert node, else search again with right as new root
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        } else {
            // if left is null, insert node, else search again with left as new root
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        }
    }
}
