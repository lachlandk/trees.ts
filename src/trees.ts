export class BinaryTreeNode {
    value: unknown
    left: BinaryTreeNode | null = null
    right : BinaryTreeNode | null = null

    constructor(value: unknown = undefined) {
        this.value = value;
    }

    toString() {
        return this.value;
    }
}

export class BinaryTree {
    root: BinaryTreeNode | null = null
    order: ((value1: unknown, value2: unknown) => boolean) = ((value1, value2) => (value1 as number) >= (value2 as number))

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

    // height(): number {}

    toString(): string {
        const lines: string[] = ["{"];
        const analyse =  (node: BinaryTreeNode, depth: number) => {
            lines.push("-".repeat(depth) + " "+ node.toString());
            if (node.left !== null) {
                analyse(node.left, depth + 1);
            }
            if (node.right !== null) {
                analyse(node.right, depth + 1);
            }
        }
        if (this.root !== null) {
            analyse(this.root, 0);
        } else {
            lines.push("");
        }

        lines.push("}");
        return lines.join("\n");
    }
}
