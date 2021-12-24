export declare class BinaryTreeNode {
    value: unknown;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;
    constructor(value?: unknown);
}
export declare class BinaryTree {
    root: BinaryTreeNode | null;
    order: ((value1: unknown, value2: unknown) => boolean);
    insert(data: unknown): void;
    insertNode(node: BinaryTreeNode, newNode: BinaryTreeNode): void;
}
